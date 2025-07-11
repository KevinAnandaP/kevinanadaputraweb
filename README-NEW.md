# Professional Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS. Features a clean design with blue and white minimalist color scheme, dark/light mode toggle, and smooth animations.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with seamless experience across all devices
- **Dark/Light Mode**: Theme switcher with system preference detection
- **Modern Tech Stack**: React 18, TypeScript, Vite, and Tailwind CSS
- **Smooth Animations**: Elegant transitions and hover effects
- **Accessible**: WCAG compliant with semantic HTML structure
- **Fast Performance**: Optimized for speed with Vite build tool
- **SEO Ready**: Meta tags and structured content for better search visibility
- **Deploy Ready**: Static build compatible with Netlify, Vercel, and other platforms

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header with theme toggle
│   ├── Hero.tsx        # Hero section with intro
│   ├── About.tsx       # About me section
│   ├── Projects.tsx    # Projects showcase
│   ├── Skills.tsx      # Skills and technologies
│   ├── Contact.tsx     # Contact form and information
│   └── Footer.tsx      # Footer with links
├── contexts/           # React contexts
│   └── ThemeContext.tsx # Dark/light theme management
├── data/               # Data structures
│   └── portfolio.ts    # Portfolio content (projects, skills, etc.)
├── App.tsx            # Main app component
├── main.tsx           # Entry point
└── index.css          # Global styles with Tailwind
```

## 🎨 Customization

### Update Personal Information

1. **Portfolio Data**: Edit `src/data/portfolio.ts` to update:
   - Projects information
   - Skills and technologies
   - Social media links
   - Contact details

2. **Hero Section**: Modify `src/components/Hero.tsx` to update:
   - Name and title
   - Profile description
   - Call-to-action buttons

3. **About Section**: Update `src/components/About.tsx` for:
   - Personal bio
   - Statistics
   - Resume link

### Styling

The project uses Tailwind CSS with a custom blue color palette. To modify colors:

1. Edit `tailwind.config.js` to change the primary color scheme
2. Update custom CSS classes in `src/index.css`

### Adding Content

- **New Projects**: Add project objects to the `projects` array in `src/data/portfolio.ts`
- **Skills**: Update the `skills` array with your technologies
- **Social Links**: Modify the `socialLinks` array with your profiles

## 🌐 Deployment

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist/` folder to Netlify
3. Configure build settings: Build command: `npm run build`, Publish directory: `dist`

### Vercel

1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel --prod`
3. Follow the deployment prompts

### GitHub Pages

1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run: `npm run build && npm run deploy`

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Static hosting compatible

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## 📧 Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/portfolio-website](https://github.com/yourusername/portfolio-website)
