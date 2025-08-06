# 🚀 LocalHost Dashboard

> Une page d'accueil élégante et fonctionnelle pour votre environnement de développement local

![Preview](https://img.shields.io/badge/Version-1.0-orange?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![Language](https://img.shields.io/badge/Made%20with-HTML%2FCSS%2FJS-red?style=for-the-badge)

## ✨ Fonctionnalités

- 🕐 **Horloge numérique** - Affichage de l'heure et date en temps réel
- 🔗 **Liens rapides** - Accès direct aux ports de développement les plus utilisés
- 🎯 **Port personnalisé** - Possibilité d'entrer n'importe quel port
- 🔍 **Recherche Google** - Recherche directe depuis votre localhost
- 🎨 **Design moderne** - Interface sombre avec accents orange
- 📱 **Responsive** - Compatible mobile et desktop
- ⚡ **Léger** - Aucune dépendance externe

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

### Option 1: Clone direct

```bash
git clone https://github.com/Ygryan360/localhost.git
cd localhost
```

### Option 2: Téléchargement

Téléchargez les fichiers et placez-les dans votre dossier localhost préféré.

## 💻 Utilisation

### Configuration comme page d'accueil

1. **Démarrer un serveur local** (optionnel)

   ```bash
   # Python
   python3 -m http.server 80

   # Node.js (avec http-server)
   npx http-server -p 80

   # PHP
   php -S localhost:80
   ```

2. **Configurer votre navigateur**
   - **Chrome/Edge** : Paramètres → Démarrage → Ouvrir une page spécifique → `http://localhost`
   - **Firefox** : Paramètres → Accueil → Page d'accueil → `http://localhost`
   - **Safari** : Préférences → Général → Page d'accueil → `http://localhost`

### Ou simplement ouvrir le fichier

Double-cliquez sur `index.html` pour l'ouvrir directement dans votre navigateur.

## 📁 Structure du projet

```
localhost-dashboard/
├── index.html          # Page principale
├── style.css           # Styles CSS
├── script.js           # Fonctionnalités JavaScript
└── README.md           # Documentation
```

## 🎨 Personnalisation

### Modifier les ports favoris

Éditez le fichier `index.html` pour ajouter/modifier les liens :

```html
<a href="http://localhost:VOTRE_PORT" class="port-link">
  <span class="port-number">VOTRE_PORT</span>
  <span class="port-description">Votre Description</span>
</a>
```

### Changer les couleurs

Modifiez les variables CSS dans `style.css` :

```css
:root {
  --bg-base-300: #000000; /* Arrière-plan principal */
  --bg-base-200: #0b0908; /* Arrière-plan secondaire */
  --bg-base-100: #1b1816; /* Arrière-plan tertiaire */
  --base-content: #cdcdcd; /* Couleur du texte */
  --primary: #ff8f00; /* Couleur d'accent (orange) */
}
```

## 🛠️ Technologies utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Styles modernes avec variables CSS et Grid
- **JavaScript (Vanilla)** - Fonctionnalités interactives
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
- [ ] Système de favoris personnalisables
- [ ] Thèmes multiples
- [ ] Raccourcis clavier
- [ ] Historique des ports utilisés
- [ ] Widget météo
- [ ] Statut des services (port actif/inactif)

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

<div align="center">

**⭐ Si ce projet vous plaît, n'hésitez pas à lui donner une étoile !**

Fait avec ❤️ par [Young Ryan](https://github.com/Ygryan360)

</div>
