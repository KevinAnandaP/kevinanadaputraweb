export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Quiz API with Express.js",
    description: "A RESTful API for quiz management built with Express.js and JavaScript. Features comprehensive quiz creation, user management, and scoring system with robust backend architecture.",
    image: "/assets/quiz-api.png",
    technologies: ["JavaScript", "Express.js", "Node.js", "REST API"],
    githubUrl: "https://github.com/KevinAnandaP/QuizAPI",
    featured: true
  },
  {
    id: 2,
    title: "Golang OAuth2",
    description: "OAuth2 authentication system implementation using Go with Google and GitHub providers. Secure user authentication and authorization with modern security practices.",
    image: "/assets/golang-oauth.png",
    technologies: ["Go", "OAuth2", "Google API", "GitHub API"],
    githubUrl: "https://github.com/KevinAnandaP/google-github-oauth",
    featured: true
  },
  {
    id: 3,
    title: "Golang Realtime Chat",
    description: "Real-time chat application built with Go and WebSocket technology. Features live messaging, user presence, and room management with efficient real-time communication.",
    image: "/assets/golang-realtime.png",
    technologies: ["Go", "WebSocket", "Real-time", "Chat System"],
    githubUrl: "https://github.com/KevinAnandaP/go-realtime-chat",
    featured: true
  },
  {
    id: 4,
    title: "CRUD Node.js",
    description: "Full-stack CRUD application with Node.js backend. Complete create, read, update, and delete operations with modern web interface and database integration.",
    image: "/assets/crud-node.jpg",
    technologies: ["Node.js", "JavaScript", "CRUD", "Web Development"],
    githubUrl: "https://github.com/KevinAnandaP/UKK-WEB-KK4",
    featured: false
  }
];

export const skills: Skill[] = [
  // Programming Languages
  { name: "Go", icon: "🚀", level: "Advanced" },
  { name: "JavaScript", icon: "⚡", level: "Expert" },
  { name: "Java", icon: "☕", level: "Intermediate" },
  { name: "Python", icon: "🐍", level: "Intermediate" },
  
  // Web Technologies
  { name: "Node.js", icon: "🟢", level: "Advanced" },
  { name: "Express.js", icon: "🔧", level: "Advanced" },
  { name: "REST API", icon: "🌐", level: "Expert" },
  { name: "WebSocket", icon: "🔌", level: "Advanced" },
  
  // Databases
  { name: "MongoDB", icon: "🍃", level: "Advanced" },
  { name: "PostgreSQL", icon: "🐘", level: "Advanced" },
  
  // Tools
  { name: "Git", icon: "📝", level: "Advanced" },
  { name: "VS Code", icon: "💻", level: "Expert" },
  { name: "Postman", icon: "📮", level: "Advanced" },
  { name: "Figma", icon: "🎨", level: "Intermediate" }
];

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/KevinAnandaP",
    icon: "github"
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/kevin-ananda-Putra",
    icon: "linkedin"
  },
  {
    platform: "Email",
    url: "mailto:kevinputraoffice@gmail.com",
    icon: "mail"
  }
];

// Personal Information
export const personalInfo = {
  name: "Kevin Ananda Putra",
  title: "Backend Developer",
  subtitle: "Go, JavaScript & Database Specialist",
  description: "Undergraduate in Informatics at Sebelas Maret University. Passionate about building robust backend systems, RESTful APIs, and full-stack web applications. Experienced in Go, JavaScript, and modern database technologies.",
  location: "Indonesia",
  email: "kevinputraoffice@gmail.com",
  university: "Sebelas Maret University",
  degree: "Informatics",
  experience: "3+ years",
  projectsCompleted: "5+",
  technologiesMastered: "10+"
};

export const skillCategories = [
  {
    title: "Backend Development",
    description: "Building robust, scalable server-side applications and RESTful APIs.",
    icon: "/assets/backend-icon.png"
  },
  {
    title: "Database Management", 
    description: "Designing and optimizing database schemas for PostgreSQL and MongoDB.",
    icon: "/assets/database-icon.png"
  },
  {
    title: "Web Development",
    description: "Building full-stack web applications with modern frontend frameworks and robust backend systems.",
    icon: "/assets/web-icon.png"
  },
  {
    title: "UI/UX Design",
    description: "Crafting intuitive user interfaces with focus on user experience and accessibility.",
    icon: "/assets/figma-icon.png"
  }
];

// Tools and Technologies
export const tools = [
  { name: "VS Code", icon: "/assets/vscode.png" },
  { name: "Postman", icon: "/assets/Postman.png" },
  { name: "MongoDB", icon: "/assets/mongodb.png" },
  { name: "PostgreSQL", icon: "/assets/postgresql.png" },
  { name: "Git", icon: "/assets/git.png" }
];

// Additional info sections for About component
export const infoSections = [
  {
    title: "Languages",
    description: "Go, JavaScript, Java, Python",
    icon: "/assets/code-icon.png",
    iconDark: "/assets/code-icon-dark.png"
  },
  {
    title: "Education", 
    description: "Undergraduate in Informatics at Sebelas Maret University",
    icon: "/assets/edu-icon.png",
    iconDark: "/assets/edu-icon-dark.png"
  },
  {
    title: "Projects",
    description: "Built more than 5 projects using various technologies.",
    icon: "/assets/project-icon.png", 
    iconDark: "/assets/project-icon-dark.png"
  }
];
