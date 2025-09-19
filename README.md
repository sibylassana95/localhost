# 🚀 LocalHost Dashboard

> Une page d'accueil élégante et fonctionnelle pour votre environnement de développement local, construite avec React et TypeScript

![Preview](https://img.shields.io/badge/Version-1.0-orange?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2+-blue?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-5.0+-purple?style=for-the-badge)

## ✨ Fonctionnalités

- 🕐 **Horloge numérique** - Affichage de l'heure et date en temps réel
- 🔗 **Gestion des ports favoris** - Ajout, suppression et restauration des ports personnalisés
- 🎯 **Port personnalisé** - Possibilité d'entrer n'importe quel port
- 🔍 **Recherche Google** - Recherche directe depuis votre localhost
- 🎨 **Thèmes multiples** - Changement de thème avec DaisyUI (Dracula, etc.)
- 📱 **Responsive** - Compatible mobile et desktop
- 💾 **Persistance** - Sauvegarde automatique des ports favoris dans localStorage
- ⚡ **Rapide** - Construit avec Vite pour un développement rapide

## 🎯 Ports pré-configurés

| Port | Framework/Outil  |
| ---- | ---------------- |
| 3000 | Next.js / React  |
| 8000 | Laravel / Django |
| 5173 | Vite             |
| 4200 | Angular          |
| 8080 | Vue.js / Webpack |
| 5000 | Flask / Express  |
| 9000 | Play Framework   |
| 1313 | Hugo             |

## 🚀 Installation

### Prérequis

- Node.js 18+
- npm ou bun

### Installation

```bash
git clone https://github.com/Ygryan360/localhost.git
cd localhost
npm install
# ou
bun install
```

### Démarrage en développement

```bash
npm run dev
# ou
bun run dev
```

L'application sera disponible sur `http://localhost:5173`

### Build pour production

```bash
npm run build
# ou
bun run build
```

## 💻 Utilisation

### Configuration comme page d'accueil

1. **Démarrer l'application**

   ```bash
   npm run dev
   ```

2. **Configurer votre navigateur**
   - **Chrome/Edge** : Paramètres → Démarrage → Ouvrir une page spécifique → `http://localhost:5173`
   - **Firefox** : Paramètres → Accueil → Page d'accueil → `http://localhost:5173`
   - **Safari** : Préférences → Général → Page d'accueil → `http://localhost:5173`

### Gestion des ports favoris

- **Ajouter un port** : Cliquez sur "+ Add Port" et remplissez le formulaire
- **Supprimer un port** : Survolez un port favori et cliquez sur ✕
- **Restaurer les défauts** : Cliquez sur "Restore Defaults" pour remettre les ports par défaut

### Changement de thème

Cliquez sur l'icône de palette en haut à droite pour changer de thème.

## 📁 Structure du projet

```
localhost-dashboard/
├── src/
│   ├── components/
│   │   ├── AddPortModal.tsx      # Modal d'ajout de port
│   │   ├── Clock.tsx             # Composant horloge
│   │   ├── CustomPortSection.tsx # Section port personnalisé
│   │   ├── FavoritePorts.tsx     # Gestion des ports favoris
│   │   ├── SearchSection.tsx     # Section recherche
│   │   └── ThemeSwitcher.tsx     # Sélecteur de thème
│   ├── App.tsx                   # Composant principal
│   ├── constants.ts              # Constantes (ports par défaut, thèmes)
│   ├── index.tsx                 # Point d'entrée
│   ├── types.ts                  # Types TypeScript
│   └── app.css                  # Styles globaux
├── index.html                    # Template HTML
├── package.json                  # Dépendances et scripts
├── vite.config.ts                # Configuration Vite
├── tsconfig.json                 # Configuration TypeScript
└── README.md                     # Documentation
```

## 🎨 Personnalisation

### Modifier les ports par défaut

Éditez `src/constants.ts` :

```typescript
export const INITIAL_FAVORITE_PORTS: Port[] = [
  { number: 3000, description: 'Next.js / React', color: 'bg-sky-500' },
  // Ajoutez vos ports...
];
```

### Ajouter des thèmes

Les thèmes utilisent DaisyUI. Pour ajouter un thème, modifiez `src/constants.ts` :

```typescript
export const DAISYUI_THEMES = [
  'dracula',
  'dark',
  'light',
  // Ajoutez vos thèmes...
];
```

## 🛠️ Technologies utilisées

- **React 18** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Vite** - Outil de build rapide
- **DaisyUI** - Framework CSS basé sur Tailwind
- **Tailwind CSS** - Framework CSS utilitaire
- **Lucide React** - Icônes
- **Font Inter** - Typographie moderne

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📝 Idées d'améliorations

- [ ] Ajouter plus de moteurs de recherche (DuckDuckGo, Bing, etc.)
- [ ] Export/Import des ports favoris
- [ ] Raccourcis clavier
- [ ] Historique des ports utilisés
- [ ] Widget météo
- [ ] Statut des services (port actif/inactif)
- [ ] Mode hors ligne
- [ ] Synchronisation cloud des favoris

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

<div align="center">

**⭐ Si ce projet vous plaît, n'hésitez pas à lui donner une étoile !**

Fait avec ❤️ par [Young Ryan](https://github.com/Ygryan360)

[![Netlify Status](https://api.netlify.com/api/v1/badges/f3c38f56-2320-4272-8612-1e9194631503/deploy-status)](https://app.netlify.com/projects/localhost-ygr/deploys)

</div>
