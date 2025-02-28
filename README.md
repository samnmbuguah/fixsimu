# FixSimu - Phone & Laptop Repair Services

A modern, responsive website for FixSimu, a professional phone and laptop repair service. Built with Next.js and Tailwind CSS.

## Features

- 📱 Responsive design that works on all devices
- 🎥 Video background hero section
- 🛠️ Comprehensive services showcase
- 📍 Contact information with business hours
- ⚡ Fast loading with Next.js and Turbopack
- 🎨 Modern UI with Tailwind CSS animations

## Tech Stack

- [Next.js 15](https://nextjs.org/) - React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [GitHub Pages](https://pages.github.com/) - Hosting

## Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/fixsimu.git
cd fixsimu
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Development

- `npm run dev` - Start development server with Turbopack
- `npm run dev:stable` - Start development server without Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run deploy` - Deploy to GitHub Pages

## Deployment

This project is configured for GitHub Pages deployment. The site will be automatically deployed when pushing to the main branch.

### Manual Deployment Steps

1. Push your changes to the main branch
2. GitHub Actions will automatically:
   - Build the project
   - Deploy to the gh-pages branch
   - Make the site available at `https://yourusername.github.io/fixsimu`

### First-time Setup

1. Create a new repository on GitHub named "fixsimu"
2. Push your code to GitHub:
```bash
git remote add origin https://github.com/yourusername/fixsimu.git
git push -u origin main
```

3. In your GitHub repository settings:
   - Go to "Settings" > "Pages"
   - Set the source branch to `gh-pages`
   - Save the changes

## Project Structure

```
fixsimu/
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   └── styles/          # Global styles
├── public/              # Static files
│   ├── images/          # Image assets
│   └── videos/          # Video assets
└── ...configuration files
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries about the website, please contact:
- Phone: 0722255330
- Email: contact@fixsimu.com
- Location: Shop No. 10, Union Towers 1st Floor, Nairobi, Kenya
