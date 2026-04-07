# Clinexa - Professional Healthcare Technology Website

## Overview

Clinexa is a premium, bilingual (English/Arabic) healthcare technology website built with modern web standards. It embodies the brand philosophy of **Minimal + Systematic + Bilingual Harmony**, delivering a professional digital experience for global healthcare organizations.

## Features

### 🌐 Bilingual Support
- Seamless English/Arabic language switching
- Full RTL/LTR layout adaptation
- Native Arabic typography with IBM Plex Sans Arabic
- Language-specific content and form placeholders
- Persistent language preference via localStorage

### 🎨 Design Philosophy
- **Minimal**: Clean, distraction-free interface focused on content
- **Systematic**: Built on an 8-column modular grid for consistency
- **Professional**: Clinical-level legibility and precision
- **Accessible**: WCAG-compliant color contrast and ARIA labels

### 📱 Responsive Design
- Mobile-first approach
- Breakpoints: 768px (tablet), 1024px (desktop)
- Adaptive navigation with mobile hamburger menu
- Touch-friendly interactive elements

### ✨ Interactive Features
- Smooth scroll navigation
- Scroll-triggered fade-in animations
- Animated statistics counters
- Form validation with error messages
- Sticky header with scroll shadow
- Active navigation highlighting

### 🎯 Sections
1. **Hero**: Impactful introduction with animated data-flow background
2. **Philosophy**: Core values (Connection, Continuity, Precision)
3. **Solutions**: Four product modules with feature lists
4. **About**: Company story with animated statistics
5. **Resources**: Case studies and downloadable reports
6. **Contact**: Bilingual contact form with validation

## Technology Stack

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Custom properties, Flexbox, Grid, animations
- **Vanilla JavaScript**: No dependencies, lightweight implementation
- **Google Fonts**: Inter (EN) + IBM Plex Sans Arabic (AR)

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Text | `#0F172A` | Body text, headings |
| Accent Blue | `#0A84FF` | CTAs, links, icons |
| Dark Navy | `#020617` | Footer, inverse mode |
| Light Gray | `#F8FAFC` | Section backgrounds |
| Medium Gray | `#E2E8F0` | Borders, dividers |

## Typography

### English (Inter)
- Headings: 600-700 weight
- Body: 400-500 weight
- Modular scale: 12px to 60px

### Arabic (IBM Plex Sans Arabic)
- Headings: 600-700 weight
- Body: 400-500 weight
- Perceived size matched to English

## File Structure

```
/workspace/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Complete stylesheet
├── js/
│   └── main.js         # JavaScript functionality
├── images/             # Image assets directory
└── README.md           # This file
```

## Deployment

This is a **static website** ready for deployment on any static hosting platform:

### GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in settings
3. Select main branch as source

### Netlify
1. Drag & drop folder to Netlify
2. Or connect GitHub repository
3. Automatic deployments on push

### Vercel
```bash
npm i -g vercel
vercel deploy
```

### Cloudflare Pages
1. Connect GitHub repository
2. Configure build settings (none required)
3. Deploy

### Traditional Hosting
Upload files via FTP/SFTP to any web server with PHP/Apache/Nginx.

## Local Development

### Quick Start
```bash
# Using Python
python3 -m http.server 8080

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8080
```

Visit `http://localhost:8080` in your browser.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Accessibility

- ✅ Semantic HTML5 elements
- ✅ ARIA labels and roles
- ✅ Skip-to-content link
- ✅ Keyboard navigation support
- ✅ Focus indicators
- ✅ Color contrast compliance (WCAG AA)
- ✅ Screen reader friendly

## Performance

- No external JavaScript libraries
- Minimal CSS footprint
- Optimized font loading with preconnect
- Lazy-loading ready for images
- Print styles included

## Customization

### Adding New Translations
Edit the `translations` object in `js/main.js`:

```javascript
const translations = {
    en: {
        'new.key': 'English text'
    },
    ar: {
        'new.key': 'النص العربي'
    }
};
```

Then add `data-i18n="new.key"` to HTML elements.

### Modifying Colors
Update CSS custom properties in `css/styles.css`:

```css
:root {
    --color-accent: #YOUR_COLOR;
}
```

### Adding New Sections
1. Add HTML structure in `index.html`
2. Style in `css/styles.css`
3. Add animations class if needed
4. Update navigation links

## Contact & Support

For questions or customization requests, contact the development team.

---

**© 2024 Clinexa. All rights reserved.**

*Connecting Technology & Medicine*
