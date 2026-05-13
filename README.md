# Shots Studio — Premium Product Photography

Shots Studio is a high-end product photography landing page built for a Dubai-based creative studio. Originally developed as a premium landscaping template, it has been fully rebranded to serve the product photography industry with a sleek, minimal, and premium aesthetic.

## 📸 Project Overview

This is a modern, responsive React application designed to showcase a professional photography portfolio, list specialized services, and capture leads through a custom-built contact system.

### Core Identity
- **Business Name:** Shots Studio
- **Industry:** Product Photography (Beauty, Food, Tech, Fashion, Jewellery)
- **Location:** Dubai, UAE (Design District d3)
- **Primary Theme Color:** `#ffb3ba` (Pink Accent)

## 🛠 Tech Stack

- **Framework:** [React](https://reactjs.org/) (with TypeScript)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:**
  - **Logo:** `Gugi` (Google Fonts) - A unique, futuristic display font.
  - **Headings:** `Space Grotesk` - Clean, modern sans-serif.
  - **Body:** `DM Sans` - Highly readable geometric sans-serif.

## ✨ Key Features

1. **Dynamic Hero Section:** Features a Ken Burns animation effect on a high-resolution studio background (1920x1080).
2. **Filtered Portfolio:** A grid of work categorized by industry (Beauty, Tech, Food, etc.) with smooth hover effects.
3. **Interactive Services:** Five core service offerings with dynamic pricing and direct "Book Session" integration.
4. **Custom Contact Form:** Includes real-time validation, success/error states, and animated feedback.
5. **Premium Animations:** Custom CSS-based scroll animations (FadeInUp, SlideIn, etc.) defined in `src/index.css`.
6. **Mobile First:** Fully responsive design with a tailored mobile navigation menu.

## 🚀 Getting Started

### Prerequisites
- Node.js (Latest LTS recommended)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/oussss/green-home-landscaping.git

# Navigate to project directory
cd green-home-landscaping

# Install dependencies
npm install

# Run development server
npm run dev
```

## 📝 Developer Notes (Rebranding Context)

- **Colors:** The global brand accent is defined in `tailwind.config.js` under `theme.extend.colors.accent`. Most green classes were replaced by `accent` or `accent/10` to allow for easy future theme changes.
- **Logo:** The logo in `Header.tsx` and `Footer.tsx` is text-only using the `Gugi` font. The `Camera` icon was removed to keep the branding minimal.
- **CSS Variables:** Check `src/index.css` for custom keyframes used across the site for the "premium" feel.
- **Images:** All hero and project images are currently hosted via Pexels CDN with specific width/height parameters for performance.

## 📄 License
This project is for private use by Shots Studio.
