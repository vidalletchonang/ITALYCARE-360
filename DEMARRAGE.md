# ITALYCARE 360 — Guide de démarrage

## 1. Prérequis
- Node.js 18+ : https://nodejs.org
- Un compte GitHub

## 2. Lancer en développement

```bash
cd italycare360
npm install
npm run dev
```
→ Ouvrir http://localhost:3000

## 3. Activer le formulaire de contact (Formspree)

1. Créer un compte gratuit sur https://formspree.io
2. Créer un nouveau formulaire → copier l'ID (ex: `xpwzabcd`)
3. Ouvrir `src/components/ContactModal.tsx`
4. Remplacer `YOUR_FORM_ID` par votre ID :
   ```
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xpwzabcd'
   ```

## 4. Déployer sur GitHub Pages

### Étape A — Créer le dépôt GitHub
```bash
cd italycare360
git init
git add .
git commit -m "Initial commit"
gh repo create italycare360 --public --source=. --push
```

### Étape B — Activer GitHub Pages
1. Aller dans votre repo → Settings → Pages
2. Source : **GitHub Actions**

### Étape C — Configurer le basePath
Dans `.github/workflows/deploy.yml`, vérifier que :
```yaml
NEXT_PUBLIC_BASE_PATH: /italycare360
```
→ Remplacer `italycare360` par le nom exact de votre repo.

### Étape D — Domaine personnalisé (optionnel)
Si vous avez un domaine (ex: www.italycare360.com) :
1. Dans `next.config.js` : supprimer la ligne `basePath`
2. Dans le workflow : supprimer la ligne `NEXT_PUBLIC_BASE_PATH`
3. Dans Settings → Pages : ajouter votre domaine custom

## 5. Structure du projet

```
src/
├── app/
│   ├── globals.css      ← Tous les styles CSS
│   ├── layout.tsx       ← Layout racine
│   └── page.tsx         ← Page principale
├── components/
│   ├── Nav.tsx          ← Navigation + sélecteur de langue
│   ├── Hero.tsx         ← Section héro
│   ├── MarqueeBanner.tsx← Bandeau défilant
│   ├── About.tsx        ← À propos + orbite animée
│   ├── Services.tsx     ← Grille 8 services
│   ├── Process.tsx      ← 5 étapes du processus
│   ├── Numbers.tsx      ← Compteurs animés
│   ├── Testimonials.tsx ← Témoignages
│   ├── CTA.tsx          ← Call to action
│   ├── ContactBar.tsx   ← Barre de contact dorée
│   ├── Footer.tsx       ← Pied de page
│   ├── ContactModal.tsx ← Modal formulaire RDV ← MODIFIER ICI
│   ├── Cursor.tsx       ← Curseur personnalisé
│   └── ScrollFade.tsx   ← Animations au défilement
├── context/
│   └── LangContext.tsx  ← Gestion des 4 langues
└── i18n/
    ├── fr.ts            ← Traductions français
    ├── en.ts            ← Traductions anglais
    ├── ar.ts            ← Traductions arabe (RTL)
    └── it.ts            ← Traductions italien
```

## 6. Ajouter du contenu

### Changer les textes
Modifier les fichiers dans `src/i18n/` pour chaque langue.

### Changer les couleurs
Modifier les variables CSS dans `src/app/globals.css` :
```css
:root {
  --g: #1a6b3c;   /* vert principal */
  --o: #c9a84c;   /* or */
  --bk: #0c0c0a;  /* noir */
}
```
