# Ayush Bhagwan Gharpinde - AI & ML Portfolio

A modern, interactive 3D portfolio website showcasing AI and Machine Learning expertise, built with React, Three.js, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Interactive 3D Elements**: Floating AI brain, neural network visualizations, and 3D skill cards
- **Smooth Animations**: Framer Motion powered transitions and scroll-triggered animations
- **Modern Design**: Dark theme with neon accents, glassmorphism effects, and gradient text
- **Responsive Layout**: Optimized for all device sizes
- **Performance Optimized**: Lazy loading and efficient 3D rendering

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **3D Graphics**: Three.js + React Three Fiber + Drei
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Deployment**: Ready for Vercel/Netlify

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ayushgharpinde/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Customization

### Personal Information
Update personal details in the component files:
- `src/components/Hero.tsx` - Name, title, tagline
- `src/components/About.tsx` - Bio and highlights
- `src/components/Contact.tsx` - Contact information

### Projects
Modify the projects array in `src/components/Projects.tsx`:
```typescript
const projects = [
  {
    title: "Your Project",
    description: "Project description",
    tech: ["Tech", "Stack"],
    github: "https://github.com/username/repo",
    demo: "https://demo-url.com",
    icon: <YourIcon size={24} />
  }
]
```

### Skills
Update skills in `src/components/Skills.tsx` by modifying the `skillCategories` array.

### Experience & Certifications
Edit the respective arrays in `src/components/Experience.tsx` and `src/components/Certifications.tsx`.

## 🎯 Sections

1. **Hero Section**: 3D AI brain with introduction and CTA buttons
2. **About Me**: Personal bio with animated highlights
3. **Skills**: Interactive 3D skill visualization
4. **Projects**: 3D project cards with hover effects
5. **Experience**: Timeline-style experience showcase
6. **Certifications**: Professional certifications grid
7. **Contact**: Contact information with 3D elements

## 🌟 Key Components

- **Navigation**: Smooth scroll navigation with glass morphism
- **3D Elements**: Custom Three.js components for visual appeal
- **Animations**: Scroll-triggered and hover animations
- **Responsive Design**: Mobile-first approach

## 🚀 Deployment

### GitHub Pages (Recommended)
1. Create a new public repository on GitHub named `portfolio`
2. Update `package.json` homepage with your GitHub username:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/portfolio"
   ```
3. Push to GitHub:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git branch -M main
   git push -u origin main
   ```
4. Enable GitHub Pages in repository settings (Source: GitHub Actions)
5. Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio`

### Manual Deployment
```bash
npm run deploy
```

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🚀 Deployment

### Vercel
```bash
npm run build
# Deploy to Vercel
```

### Netlify
```bash
npm run build
# Deploy dist folder to Netlify
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

- **Email**: ayushgharpinde029@gmail.com
- **LinkedIn**: [linkedin.com/in/ayushgharpinde](https://linkedin.com/in/ayushgharpinde)
- **GitHub**: [github.com/ayushgharpinde](https://github.com/ayushgharpinde)
- **Location**: Nagpur, Maharashtra, India

---

Built with ❤️ by Ayush Bhagwan Gharpinde