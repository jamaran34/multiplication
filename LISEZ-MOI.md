# Multiplication & Cie — mise en ligne et installation

Contenu du dossier :

| Fichier | Rôle |
|---|---|
| `index.html` | le jeu complet |
| `manifest.webmanifest` | nom, icônes et mode plein écran de l'application |
| `sw.js` | fonctionnement hors ligne |
| `icone-*.png` | icônes de l'écran d'accueil |

Les quatre types de fichiers doivent rester **dans le même dossier**.

## 1. Mettre en ligne avec GitHub Pages (gratuit)

1. Créer un compte sur github.com si nécessaire.
2. Cliquer sur **New repository**, le nommer par exemple `multiplication`, le laisser **Public**, valider.
3. Sur la page du dépôt : **Add file → Upload files**, déposer tous les fichiers de ce dossier, puis **Commit changes**.
4. Onglet **Settings → Pages**. Sous *Source*, choisir **Deploy from a branch**, branche `main`, dossier `/ (root)`. Enregistrer.
5. Après une à deux minutes, l'adresse s'affiche en haut de cette page :
   `https://<votre-compte>.github.io/multiplication/`

Cette adresse est celle à ouvrir sur les téléphones et tablettes.

## 2. Installer sur l'écran d'accueil

**Android (Chrome)** : ouvrir l'adresse, puis soit le bouton *Installer sur l'écran d'accueil*
en bas de l'écran d'accueil du jeu, soit le menu ⋮ → *Ajouter à l'écran d'accueil*.

**iPhone / iPad (Safari)** : bouton Partager → *Sur l'écran d'accueil*.

L'application s'ouvre ensuite en plein écran, avec son icône, et fonctionne sans connexion.

## 3. Où vont les scores

Les scores sont enregistrés dans le navigateur de chaque appareil, donc **chaque appareil a ses
propres joueurs**. Pour transférer une partie : bouton **Exporter** sur l'appareil de départ,
**Importer** sur celui d'arrivée.

À éviter : effacer les données de navigation pour ce site, ce qui supprimerait les scores.
L'export régulier reste la sauvegarde sûre.

## 4. Modifier le jeu plus tard

Remplacer `index.html` dans le dépôt, **et** augmenter le numéro de version dans la première
ligne utile de `sw.js` (`const VERSION = "mc-v1"` → `"mc-v2"`). Sans ce changement, les
appareils continueraient de servir l'ancienne version gardée en cache.
