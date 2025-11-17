import { useCallback, useEffect, useState } from 'react';

export interface PortStatus {
  [port: number]: boolean;
}

interface UsePortStatusOptions {
  interval?: number;
  timeout?: number;
  enabled?: boolean;
}

/**
 * Hook personnalisé pour vérifier le statut des ports
 * Vérifie si chaque port est actif via une requête HEAD HTTP
 */
export const usePortStatus = (ports: number[], options: UsePortStatusOptions = {}) => {
  const {
    interval = 30000, // 30 secondes
    timeout = 3000, // 3 secondes
    enabled = true,
  } = options;

  const [portStatus, setPortStatus] = useState<PortStatus>({});
  const [isChecking, setIsChecking] = useState(false);
  const [lastChecked, setLastChecked] = useState<Date | null>(null);

  /**
   * Vérifie si un port spécifique est actif
   */
  const checkPortStatus = useCallback(
    async (port: number): Promise<boolean> => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout);

        await fetch(`http://localhost:${port}`, {
          method: 'HEAD',
          signal: controller.signal,
          mode: 'no-cors',
        });

        clearTimeout(timeoutId);

        return true;
      } catch (error) {
        return false;
      }
    },
    [timeout]
  );

  /**
   * Vérifie le statut de tous les ports
   */
  const checkAllPorts = useCallback(async () => {
    if (!enabled || ports.length === 0) return;

    setIsChecking(true);
    const newStatus: PortStatus = {};

    const promises = ports.map(async (port) => {
      const isActive = await checkPortStatus(port);
      newStatus[port] = isActive;
    });

    await Promise.all(promises);

    setPortStatus(newStatus);
    setLastChecked(new Date());
    setIsChecking(false);
  }, [ports, enabled, checkPortStatus]);

  /**
   * Force une vérification immédiate
   */
  const forceCheck = useCallback(() => {
    checkAllPorts();
  }, [checkAllPorts]);

  useEffect(() => {
    if (enabled && ports.length > 0) {
      checkAllPorts();
    }
  }, [ports, enabled, checkAllPorts]);

  useEffect(() => {
    if (!enabled || interval <= 0) return;

    const intervalId = setInterval(checkAllPorts, interval);
    return () => clearInterval(intervalId);
  }, [checkAllPorts, interval, enabled]);

  return {
    portStatus,
    isChecking,
    lastChecked,
    forceCheck,
    checkPort: checkPortStatus,
  };
};
