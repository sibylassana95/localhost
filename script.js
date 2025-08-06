document.addEventListener('DOMContentLoaded', function () {
  const customPortInput = document.getElementById('customPort');
  const goToPortButton = document.getElementById('goToPort');
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');

  /**
   * Fonction pour mettre à jour l'horloge numérique
   * Affiche l'heure actuelle et la date formatée en français
   * @returns {void}
   */
  function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const dateString = now.toLocaleDateString('fr-FR', options);

    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = dateString;
  }

  updateClock();
  setInterval(updateClock, 1000);

  /**
   * Fonction pour aller au port personnalisé
   * Ouvre une nouvelle fenêtre avec l'URL http://localhost:<port>
   * @returns {void}
   */
  function goToCustomPort() {
    const port = customPortInput.value.trim();

    if (!port) {
      alert('Veuillez entrer un numéro de port');
      customPortInput.focus();
      return;
    }

    const portNumber = parseInt(port);

    if (isNaN(portNumber) || portNumber < 1 || portNumber > 65535) {
      alert('Veuillez entrer un port valide (1-65535)');
      customPortInput.focus();
      return;
    }

    const url = `http://localhost:${portNumber}`;
    window.open(url, '_blank');

    customPortInput.value = '';
  }

  /**
   * Fonction pour effectuer une recherche Google
   * @returns {void}
   */
  function performGoogleSearch() {
    const query = searchInput.value.trim();

    if (!query) {
      alert('Veuillez entrer un terme de recherche');
      searchInput.focus();
      return;
    }

    const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(googleUrl, '_blank');

    searchInput.value = '';
  }

  goToPortButton.addEventListener('click', goToCustomPort);

  customPortInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      goToCustomPort();
    }
  });

  searchButton.addEventListener('click', performGoogleSearch);

  searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      performGoogleSearch();
    }
  });

  const portLinks = document.querySelectorAll('.port-link');

  portLinks.forEach((link) => {
    link.addEventListener('mouseenter', function () {
      this.style.filter = 'brightness(1.1)';
    });

    link.addEventListener('mouseleave', function () {
      this.style.filter = 'brightness(1)';
    });
  });
});
