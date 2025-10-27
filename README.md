# IronCore Fitness - Custom Gym Website Portfolio

A professional, custom-designed fitness gym website built with React, showcasing a complete multi-page web application for IronCore Fitness.

## Features

### Custom $997 Tier Website Design
- 7 fully custom pages with unique content
- Professional branding and design system
- SEO optimized with meta tags
- Contact forms with validation
- Social media integration
- Custom animations with Framer Motion
- Fully responsive design

### Pages

1. **Home** - Hero section, featured programs, transformations preview, testimonials
2. **Memberships** - 4-tier pricing comparison, features, free trial promotion
3. **Classes** - Weekly schedule, 8+ class types with details
4. **Trainers** - 6-8 trainer profiles with bios and specialties
5. **Facilities** - Photo gallery, equipment list, amenities
6. **Blog** - 6-8 fitness articles with categories
7. **Contact** - Multi-purpose contact form, FAQ section, map integration

### Technology Stack

- **Framework:** React 19.1
- **Build Tool:** Vite 7.1
- **Routing:** React Router DOM 6.20
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion 11.0
- **Icons:** Heroicons 2.1
- **Forms:** EmailJS Browser 3.11

### Design System

**Color Palette:**
- Primary (Blue): `#2563eb` - Trust, Strength
- Secondary (Green): `#22c55e` - Health, Growth
- Accent (Yellow): `#facc15` - Energy, Motivation

**Typography:**
- Headings: Montserrat (Bold, 600-900)
- Body: Inter (300-800)

## Business Information

- **Name:** IronCore Fitness
- **Tagline:** Forge Your Strength. Transform Your Life.
- **Location:** 789 Fitness Blvd, Livonia, MI 48150
- **Phone:** (734) 555-IRON (4766)
- **Email:** info@ironcorefitness.com
- **Hours:** Mon-Fri 5AM-11PM, Sat-Sun 6AM-9PM (24/7 for Elite)
- **Established:** 2018
- **Members:** 5,000+

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
portfolio-gym/
├── public/
│   └── gym-icon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky navigation with mobile menu
│   │   ├── Footer.jsx       # Footer with links and contact info
│   │   └── ScrollToTop.jsx  # Scroll to top on route change
│   ├── pages/
│   │   ├── Home.jsx         # Landing page
│   │   ├── Memberships.jsx  # Pricing and plans
│   │   ├── Classes.jsx      # Class schedule
│   │   ├── Trainers.jsx     # Trainer profiles
│   │   ├── Facilities.jsx   # Gym facilities
│   │   ├── Blog.jsx         # Fitness blog
│   │   └── Contact.jsx      # Contact form
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Key Features

### Navigation
- Sticky header that changes on scroll
- Mobile-responsive hamburger menu
- Active page highlighting
- Smooth scroll behavior

### Animations
- Framer Motion page transitions
- Scroll-triggered animations
- Hover effects and transforms
- Custom keyframe animations

### Forms
- Contact form with validation
- Multiple inquiry types
- Success/error states
- Email and phone validation

### SEO
- Meta tags for all pages
- Semantic HTML structure
- Descriptive page titles
- Open Graph tags

### Accessibility
- ARIA labels
- Semantic HTML
- Keyboard navigation
- Screen reader friendly

## Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  primary: '#2563eb',    // Blue
  secondary: '#22c55e',  // Green
  accent: '#facc15',     // Yellow
}
```

### Content
All content is in the respective page components under `src/pages/`.

### Images
Images use Unsplash URLs. Replace with your own images by updating the URLs in components.

## License

This project is a portfolio demonstration piece.

## Author

Created as a custom website portfolio project demonstrating professional web development capabilities.
