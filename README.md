# salvetti.info

The personal landing page for [salvetti.info](https://www.salvetti.info), hosted on GitHub Pages. A minimal dark-themed single-page site with a glassmorphism card and a fade-in animation.

---

## Features

- 🌙 **Dark theme** – deep navy gradient background with a glass-effect card
- ✨ **Fade-in animation** – the card fades in on load via a CSS transition triggered by JavaScript
- 📱 **Responsive** – centred layout that works on desktop and mobile
- 🚀 **Zero dependencies** – plain HTML, CSS, and vanilla JavaScript; no build step required
- 🌐 **GitHub Pages** – deployed automatically from the `main` branch

---

## Quick Start

### View live

```
https://www.salvetti.info
```

### Run locally

```bash
git clone https://github.com/masterlog80/website.git
cd website

# Open directly in your browser — no server needed
open index.html          # macOS
xdg-open index.html      # Linux
```

Or serve with any static file server:

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

---

## Screenshots
### Old
<img width="2938" height="1598" alt="salvetti.info screenshot" src="https://github.com/user-attachments/assets/33b1a850-4d64-431d-92b3-bf7bcdb505c1" />

### New
<img width="1918" height="1025" alt="image" src="https://github.com/user-attachments/assets/b61df491-8633-4005-a4a7-358c4413a8f6" />

---

## Deployment

The site is deployed via **GitHub Pages** from the `main` branch root. The custom domain is configured via the `CNAME` file:

```
www.salvetti.info
```

Any push to `main` is live within seconds.

---

## Project Structure

```
.
├── index.html    # Page markup
├── style.css     # Dark theme + glassmorphism card + animation
├── script.js     # Fade-in on DOMContentLoaded
├── CNAME         # GitHub Pages custom domain
└── README.md
```

---

## License

MIT
