# SavoryOps - Restaurant Management System Marketing Website

A modern, responsive marketing website for SavoryOps restaurant management system built with React, Material-UI, and SCSS. Features a beautiful green and white color scheme with Material Icons.

## 🚀 Features

- **Modern Design**: Clean, professional design with green and white color scheme
- **Responsive Layout**: Fully responsive design that works on all devices
- **Material Icons**: Beautiful Material Design icons throughout the interface
- **Interactive Components**: Hover effects, animations, and smooth transitions
- **Contact Form**: Functional contact dialog for lead generation
- **SEO Optimized**: Proper meta tags, structured data, and semantic HTML
- **Accessibility**: WCAG compliant with proper focus states and screen reader support
- **Performance**: Optimized for fast loading with preloaded resources
- **Modular Architecture**: Organized component structure with separated SCSS files

## 🎨 Design System

### Color Palette
- **Primary Green**: `#2e7d32` (Main brand color)
- **Light Green**: `#4caf50` (Accents and highlights)
- **Dark Green**: `#1b5e20` (Text and dark elements)
- **White**: `#ffffff` (Background and text)
- **Light Gray**: `#fafafa` (Secondary backgrounds)

### Typography
- **Font Family**: Roboto (Google Fonts)
- **Weights**: 300, 400, 500, 700
- **Responsive**: Scales appropriately across all screen sizes

## 🛠️ Technology Stack

- **React 19**: Latest React with hooks and modern patterns
- **Material-UI**: Component library with custom theme
- **SCSS**: Advanced styling with variables and mixins
- **Vite**: Fast build tool and development server
- **ESLint**: Code quality and consistency

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd SavoryOpsLandingPage
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
SavoryOpsLandingPage/
├── public/
│   └── logo.png              # Company logo
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── Navigation.jsx    # Navigation bar component
│   │   ├── Footer.jsx        # Footer component
│   │   ├── ContactDialog.jsx # Contact form dialog
│   │   └── ScrollToTop.jsx   # Scroll to top button
│   ├── pages/                # Page sections
│   │   ├── Hero.jsx          # Hero section
│   │   ├── Features.jsx      # Features section
│   │   ├── Benefits.jsx      # Benefits section
│   │   ├── Testimonials.jsx  # Testimonials section
│   │   └── CTA.jsx           # Call-to-action section
│   ├── styles/               # SCSS styles organized by type
│   │   ├── main.scss         # Main styles file with imports
│   │   ├── components/       # Component-specific styles
│   │   │   ├── buttons.scss  # Button styles
│   │   │   ├── cards.scss    # Card styles
│   │   │   ├── dialogs.scss  # Dialog styles
│   │   │   └── forms.scss    # Form styles
│   │   ├── layout/           # Layout styles
│   │   │   ├── navigation.scss # Navigation styles
│   │   │   └── footer.scss   # Footer styles
│   │   └── pages/            # Page-specific styles
│   │       ├── hero.scss     # Hero section styles
│   │       ├── features.scss # Features section styles
│   │       ├── benefits.scss # Benefits section styles
│   │       ├── testimonials.scss # Testimonials styles
│   │       └── cta.scss      # CTA section styles
│   ├── App.jsx               # Main application component
│   ├── main.jsx              # Application entry point
│   └── index.css             # Global CSS styles
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
└── README.md                 # This file
```

## 🎯 Website Sections

1. **Navigation Bar**: Fixed header with logo, menu items, and CTA button
2. **Hero Section**: Eye-catching banner with main value proposition
3. **Features**: Six key features with Material Icons
4. **Benefits**: Why choose SavoryOps with checkmarks
5. **Testimonials**: Customer reviews and ratings
6. **Call-to-Action**: Final conversion section
7. **Footer**: Contact information and links

## 🎨 Customization

### Colors
Update the color variables in `src/styles/main.scss`:
```scss
$primary-green: #2e7d32;
$primary-green-light: #4caf50;
$primary-green-dark: #1b5e20;
```

### Theme
Modify the Material-UI theme in `src/main.jsx`:
```javascript
const theme = createTheme({
  palette: {
    primary: {
      main: '#2e7d32',
      // ... other colors
    }
  }
});
```

### Content
Update the content in individual component files:
- `src/pages/Hero.jsx` - Hero section content
- `src/pages/Features.jsx` - Feature descriptions
- `src/pages/Testimonials.jsx` - Customer testimonials
- `src/components/Footer.jsx` - Contact details

### Styles
Modify specific styles in their respective SCSS files:
- `src/styles/pages/hero.scss` - Hero section styling
- `src/styles/components/buttons.scss` - Button styles
- `src/styles/layout/navigation.scss` - Navigation styling

## 📱 Responsive Breakpoints

- **Mobile**: < 600px
- **Tablet**: 600px - 960px
- **Desktop**: > 960px

## 🚀 Performance Optimizations

- **Code Splitting**: Automatic with Vite
- **Image Optimization**: Optimized logo and assets
- **Font Loading**: Preloaded Google Fonts
- **CSS Optimization**: Minified SCSS output
- **Bundle Analysis**: Available with build tools
- **Modular SCSS**: Organized styles for better maintainability

## 🔧 Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📈 SEO Features

- **Meta Tags**: Complete Open Graph and Twitter Card support
- **Structured Data**: JSON-LD schema markup
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Performance**: Fast loading times for better rankings
- **Mobile-Friendly**: Responsive design for mobile-first indexing

## 🔒 Security

- **HTTPS Ready**: Configured for secure connections
- **Content Security Policy**: Ready for CSP headers
- **XSS Protection**: React's built-in XSS protection
- **Input Validation**: Form validation and sanitization

## 🌐 Browser Support

- **Chrome**: Latest 2 versions
- **Firefox**: Latest 2 versions
- **Safari**: Latest 2 versions
- **Edge**: Latest 2 versions
- **Mobile Browsers**: iOS Safari, Chrome Mobile

## 📞 Support

For technical support or questions about the website:

- **Email**: info@savoryops.com
- **Phone**: +1 (555) 123-4567
- **Website**: https://savoryops.com

## 📄 License

This project is proprietary software owned by SavoryOps. All rights reserved.

## 🤝 Contributing

This is a marketing website for SavoryOps. For contributions to the main product, please contact the development team.

---

**Built with ❤️ by the SavoryOps Team**
