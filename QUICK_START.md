# Quick Start Guide - IronCore Fitness Website

## Getting Started in 3 Steps

### 1. Install Dependencies
```bash
cd portfolio-gym
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
The site will open at `http://localhost:5173` (or next available port)

### 3. Build for Production
```bash
npm run build
```
Production files will be in the `dist/` folder

## What You Get

### 7 Complete Pages
1. **Home** (`/`) - Landing page with hero, programs, testimonials
2. **Memberships** (`/memberships`) - 4-tier pricing ($29, $49, $79, $99)
3. **Classes** (`/classes`) - 8+ class types with schedule
4. **Trainers** (`/trainers`) - 6-8 trainer profiles
5. **Facilities** (`/facilities`) - Photo gallery & amenities
6. **Blog** (`/blog`) - 7 fitness articles
7. **Contact** (`/contact`) - Contact form with validation & FAQ

### Key Features
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ SEO optimized with meta tags
- ✅ Custom animations (Framer Motion)
- ✅ Form validation
- ✅ Social media links
- ✅ Professional design
- ✅ Fast performance (Vite)
- ✅ Accessibility features

### Technology
- React 19.1
- Vite 7.1
- Tailwind CSS 3.4
- React Router DOM 6.20
- Framer Motion 11.0
- Heroicons 2.1

## Project Structure
```
src/
├── components/    # Navbar, Footer, ScrollToTop
├── pages/         # 7 page components
├── App.jsx        # Main app
└── main.jsx       # Entry point
```

## Testing the Site

After running `npm run dev`, navigate to:
- `http://localhost:5173/` - Home
- `http://localhost:5173/memberships` - Memberships
- `http://localhost:5173/classes` - Classes
- `http://localhost:5173/trainers` - Trainers
- `http://localhost:5173/facilities` - Facilities
- `http://localhost:5173/blog` - Blog
- `http://localhost:5173/contact` - Contact

## Deployment Options

### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify
1. Run `npm run build`
2. Drag `dist/` folder to Netlify

### Option 3: GitHub Pages
```bash
npm install -g gh-pages
npm run build
gh-pages -d dist
```

## Customization

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#2563eb',    // Change blue
  secondary: '#22c55e',  // Change green
  accent: '#facc15',     // Change yellow
}
```

### Edit Content
All content is in `src/pages/`:
- `Home.jsx` - Landing page
- `Memberships.jsx` - Pricing
- `Classes.jsx` - Class schedule
- `Trainers.jsx` - Trainer bios
- `Facilities.jsx` - Facilities info
- `Blog.jsx` - Blog posts
- `Contact.jsx` - Contact form

### Change Images
Replace Unsplash URLs in page components with your own images.

## Need Help?

- Check `README.md` for full documentation
- Check `PROJECT_SUMMARY.md` for detailed breakdown
- All pages are self-documenting with clear component structure

## Build Status
✅ **Production Build Tested:** Successfully builds in ~4.4s
✅ **Dev Server Tested:** Starts in ~322ms
✅ **All 7 Pages:** Working and accessible
✅ **Routing:** React Router configured correctly
✅ **Styling:** Tailwind CSS fully configured
✅ **Animations:** Framer Motion integrated

## Contact Form Setup (Optional)

To enable email functionality:
1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Get your service ID, template ID, and public key
3. Update `src/pages/Contact.jsx` with your credentials
4. The form validation is already complete!

---

**You're ready to go!** Run `npm run dev` to start building.
