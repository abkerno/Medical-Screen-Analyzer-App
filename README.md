# Clinexa Website Repository

This repository contains the complete static website for **Clinexa (كلينيكسا)** - a leader in modern healthcare technology.

## 🌐 Live Deployment

This website is configured for deployment as a static site on platforms like:
- **GitHub Pages**
- **Netlify**
- **Vercel**
- **Cloudflare Pages**

## 📁 Project Structure

```
/workspace/
├── index.html          # Main HTML file (entry point)
├── css/
│   └── styles.css      # Complete stylesheet with RTL support
├── js/
│   └── main.js         # Language toggle & interactive features
├── images/             # Image assets directory
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## ✨ Key Features

- **Bilingual Harmony**: Seamless English/Arabic language switching with full RTL/LTR support
- **Minimal + Systematic Design**: Built on an 8-column grid for scalability
- **Color Palette**: 
  - Primary Text: `#0F172A` (Charcoal Slate)
  - Accent: `#0A84FF` (Vibrant Blue)
  - Dark Navy: `#020617` (for inverse mode)
- **Typography**: Inter (English) + IBM Plex Sans Arabic
- **Responsive**: Mobile, tablet, and desktop optimized
- **Accessible**: Semantic HTML with ARIA labels

## 🚀 Deployment Instructions

### GitHub Pages

1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Select source: **Deploy from branch** → **main** → **/(root)**
4. Click **Save**
5. Your site will be live at `https://[username].github.io/[repo-name]`

### Netlify

1. Drag and drop the `/workspace` folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or connect your Git repository for automatic deployments

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts to deploy

### Local Testing

```bash
# Using Python
python3 -m http.server 8080

# Then open: http://localhost:8080
```

## 🎨 Design Philosophy

The Clinexa website embodies:
- **System Over Decoration**: Clean, efficient paths through content
- **Dual-Language Experience**: True native experiences for both languages
- **Modular & Scalable**: Built on systematic grids
- **Trust-Focused Architecture**: Precision and credibility in every element

## 📄 License

© Clinexa. All rights reserved.