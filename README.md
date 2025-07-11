# Kevin Ananda Putra - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, featuring smooth animations with Framer Motion.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **Smooth Animations**: Framer Motion for engaging user interactions
- **Responsive Design**: Mobile-first approach with perfect responsiveness
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Interactive Contact Form**: Web3Forms integration for form submissions
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Fast Performance**: Optimized build with Vite

## 📱 Sections

- **Hero**: Introduction with animated profile image and call-to-action
- **About**: Personal information, stats, and educational background
- **Projects**: Featured projects with filtering and live demos
- **Skills**: Technical skills with animated progress bars
- **Contact**: Interactive contact form with social media links

## 🛠️ Technologies Used

### Frontend
- React 18 with TypeScript
- Vite for fast development and building
- Tailwind CSS for styling
- Framer Motion for animations
- Lucide React for icons

### Tools & Services
- Web3Forms for contact form submissions
- Git for version control
- ESLint for code quality

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/KevinAnandaP/kevinanadaputraweb.git
cd kevinanadaputraweb
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Vercel
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Vercel will automatically detect it's a Vite project and deploy

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Projects.tsx    # Projects showcase
│   ├── Skills.tsx      # Skills and technologies
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer component
├── contexts/           # React contexts
│   └── ThemeContext.tsx
├── data/              # Data and configurations
│   └── portfolio.ts   # Portfolio data
├── hooks/             # Custom hooks
│   └── useTheme.ts
├── styles/            # Stylesheets
│   └── index.css
├── App.tsx           # Main App component
└── main.tsx          # Entry point
```

## 🎨 Customization

### Personal Information
Update your personal information in `src/data/portfolio.ts`:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... other fields
};
```

### Projects
Add your projects in `src/data/portfolio.ts`:

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: "Project Name",
    description: "Project description",
    technologies: ["Tech1", "Tech2"],
    githubUrl: "https://github.com/username/repo",
    featured: true
  },
  // ... more projects
];
```

### Skills
Update your skills in `src/data/portfolio.ts`:

```typescript
export const skills: Skill[] = [
  { name: "Skill Name", icon: "🚀", level: "Advanced" },
  // ... more skills
];
```

## 🔧 Configuration

### Contact Form
The contact form uses Web3Forms. To set it up:

1. Go to [Web3Forms](https://web3forms.com/)
2. Create a free account and get your access key
3. Replace the access key in `src/components/Contact.tsx`

### Theme Configuration
Customize colors in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          // Your custom colors
        }
      }
    }
  }
}
```

## 🏗️ Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality
This project uses ESLint for code quality and consistency. The configuration includes:
- TypeScript support
- React hooks rules
- Modern JavaScript standards

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

Kevin Ananda Putra
- Email: kevinputraoffice@gmail.com
- GitHub: [@KevinAnandaP](https://github.com/KevinAnandaP)
- LinkedIn: [kevin-ananda-putra](https://linkedin.com/in/kevin-ananda-putra)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
