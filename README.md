# 🚀 DJM Tech Portfolio

<div align="center">

![Astro](https://img.shields.io/badge/Astro-5.x-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**A modern, high-performance portfolio website showcasing full-stack development expertise**

[🌐 Live Demo](https://www.djm-tech.dev/) • [📧 Contact](mailto:djmartin2019@gmail.com) • [💼 LinkedIn](https://www.linkedin.com/in/davidjmartin2025)

</div>

## ✨ Key Features

### 🎨 **Design & User Experience**

- **🌙 Dark/Light Mode**: Toggle between themes with persistent user preference
- **📱 Mobile-First Design**: Fully responsive across all device sizes
- **🎭 Interactive Animations**: Smooth transitions and hover effects
- **🎨 Modern UI**: Clean, professional design with blue neon accents
- **♿ Accessibility**: WCAG compliant with proper contrast ratios

### ⚡ **Performance & SEO**

- **🚀 Static Site Generation**: Lightning-fast page loads with Astro
- **🔍 SEO Optimized**: Comprehensive meta tags, structured data, and sitemaps
- **📊 Core Web Vitals**: Optimized for Google's performance metrics
- **🖼️ Image Optimization**: Automatic image compression and lazy loading
- **📡 RSS Feed**: Built-in blog RSS feed for content syndication

### 📝 **Content Management**

- **📖 MDX Blog System**: Rich content with markdown and React components
- **🏷️ Tag-Based Filtering**: Organize and filter blog posts by topics
- **📂 Project Portfolio**: Showcase current, completed, and roadmap projects
- **🔗 Dynamic Routing**: Automatic page generation from content collections
- **📅 Date Sorting**: Chronological blog post organization

### 🛠️ **Developer Experience**

- **📘 TypeScript**: Full type safety throughout the codebase
- **🎯 Component Architecture**: Reusable, maintainable UI components
- **🔧 Hot Reload**: Instant development feedback with Vite
- **📦 Modern Build Tools**: Optimized bundling and asset management

## 🛠️ Tech Stack

### **Frontend**

- **[Astro 5.x](https://astro.build/)** - Static site generator with island architecture
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript development
- **[Tailwind CSS 4.x](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide Astro](https://lucide.dev/)** - Beautiful, customizable SVG icons

### **Content & Data**

- **[MDX](https://mdxjs.com/)** - Markdown with JSX components for rich blog content
- **[Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)** - Type-safe content management
- **[DevIcons](https://devicon.dev/)** - Technology logos and icons

### **Development & Build Tools**

- **[Vite](https://vitejs.dev/)** - Lightning-fast build tool and dev server
- **[Sharp](https://sharp.pixelplumbing.com/)** - High-performance image processing
- **[Formspree](https://formspree.io/)** - Contact form handling
- **[Git](https://git-scm.com/)** - Version control and collaboration

### **SEO & Performance**

- **[Astro Sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)** - Automatic sitemap generation
- **[Astro RSS](https://docs.astro.build/en/guides/rss/)** - RSS feed generation
- **[Open Graph](https://ogp.me/)** - Social media preview optimization
- **[JSON-LD](https://json-ld.org/)** - Structured data for search engines

## 📁 Project Structure

```
djm-tech-v2/
├── 📁 public/                    # Static assets
│   ├── 📁 assets/               # Images and media files
│   │   ├── 📁 websites/         # Project screenshots
│   │   └── about-me-photo.jpeg  # Profile picture
│   ├── favicon.ico              # Site favicon
│   └── robots.txt               # SEO robots file
├── 📁 src/
│   ├── 📁 components/           # Reusable UI components
│   │   ├── Header.astro         # Navigation with theme toggle
│   │   ├── Footer.astro         # Site footer with social links
│   │   └── ThemeToggle.astro    # Dark/light mode switcher
│   ├── 📁 content/              # Content collections
│   │   └── 📁 blog/             # MDX blog posts
│   │       ├── *.mdx            # Individual blog posts
│   │       └── config.ts        # Content collection schema
│   ├── 📁 data/                 # Static data and types
│   │   ├── projects.ts          # Project portfolio data
│   │   ├── skills.ts            # Technology skills data
│   │   └── blog.ts              # Blog utilities and functions
│   ├── 📁 layouts/              # Page layouts and templates
│   │   └── Layout.astro         # Main layout with SEO
│   ├── 📁 pages/                # Astro pages (file-based routing)
│   │   ├── index.astro          # Homepage
│   │   ├── projects.astro       # Projects showcase
│   │   ├── blog.astro           # Blog listing page
│   │   ├── blog/[slug].astro    # Individual blog posts
│   │   ├── about.astro          # About page
│   │   ├── contact.astro        # Contact form
│   │   └── rss.xml.js           # RSS feed generator
│   └── 📁 styles/               # Global styles and themes
│       └── global.css           # CSS variables and utilities
├── 📄 astro.config.mjs          # Astro configuration
├── 📄 package.json              # Dependencies and scripts
├── 📄 tailwind.config.mjs       # Tailwind CSS configuration
└── 📄 tsconfig.json             # TypeScript configuration
```

## 🚀 Quick Start

### **Prerequisites**

- Node.js 18+
- npm or yarn package manager

### **Installation & Setup**

1. **Clone the repository**

   ```bash
   git clone https://github.com/djmartin2019/djm-tech-v2.git
   cd djm-tech-v2
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:4321](http://localhost:4321) to view the site

4. **Build for production**

   ```bash
   npm run build
   # or
   yarn build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   # or
   yarn preview
   ```

### **Available Scripts**

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build optimized production site
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands

## 📝 Content Management

### **Adding Blog Posts**

1. **Create a new MDX file** in `src/content/blog/`

   ```bash
   touch src/content/blog/your-new-post.mdx
   ```

2. **Add frontmatter** with required fields:

   ```yaml
   ---
   title: "Your Amazing Blog Post Title"
   description: "A compelling description for SEO and social sharing"
   summary: "Brief summary for blog listings (optional)"
   date: "2025-01-15"
   tags: ["Web Development", "Astro", "TypeScript"]
   featured: false
   readTime: 5
   image: "/assets/blog/your-featured-image.jpg"
   ---
   # Your Content Here

   Write your blog post content using Markdown syntax...
   ```

3. **Supported frontmatter fields:**
   - `title` (required) - Post title
   - `description` (required) - SEO description
   - `summary` (optional) - Brief summary for listings
   - `date` (required) - Publication date (YYYY-MM-DD)
   - `tags` (required) - Array of topic tags
   - `featured` (optional) - Boolean for featured posts
   - `readTime` (optional) - Estimated reading time in minutes
   - `image` (optional) - Featured image path

### **Adding Projects**

Edit `src/data/projects.ts` to add new projects:

```typescript
{
  id: 'unique-project-id',
  title: 'Project Name',
  description: 'Brief project description for cards',
  longDescription: 'Detailed project description for project pages',
  image: '/assets/websites/project-screenshot.png',
  technologies: ['React', 'TypeScript', 'Tailwind CSS'],
  status: 'current', // 'current' | 'completed' | 'roadmap'
  liveUrl: 'https://your-project.com',
  githubUrl: 'https://github.com/djmartin2019/your-project',
  featured: true,
  category: 'Web Application',
  startDate: '2024-01',
  endDate: '2024-06' // Optional for completed projects
}
```

### **Adding Skills**

Update `src/data/skills.ts` to add new technologies:

```typescript
{
  name: "Technology Name",
  icon: "icon-name", // DevIcons identifier
  category: "Frontend" // "Frontend" | "Backend" | "Tools"
}
```

## 🔍 SEO & Performance Features

### **Search Engine Optimization**

- **📊 Meta Tags**: Comprehensive Open Graph and Twitter Card support
- **🏗️ Structured Data**: JSON-LD schema markup for rich snippets
- **🗺️ Sitemap**: Automatic XML sitemap generation
- **📡 RSS Feed**: Blog RSS feed at `/rss.xml`
- **🤖 Robots.txt**: Search engine crawler optimization
- **🔗 Canonical URLs**: Proper URL canonicalization

### **Performance Optimizations**

- **⚡ Core Web Vitals**: Optimized LCP, FID, and CLS scores
- **🖼️ Image Optimization**: Automatic compression and WebP conversion
- **📦 Bundle Splitting**: Efficient code splitting and lazy loading
- **🎯 Critical CSS**: Inlined critical styles for faster rendering
- **💾 Caching**: Optimized cache headers and static asset caching

## 🚀 Deployment

This static site can be deployed to any platform that supports static site hosting:

### **Build Configuration**

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node.js Version**: 18.x or higher

### **Deployment Options**

- **GitHub Pages**: Free hosting for public repositories
- **Netlify**: Easy deployment with continuous integration
- **Cloudflare Pages**: Global CDN with edge computing
- **AWS S3 + CloudFront**: Enterprise-grade hosting
- **Firebase Hosting**: Google's hosting platform
- **Surge.sh**: Simple static site deployment

### **Environment Variables**

No environment variables required for basic deployment. Optional variables for enhanced features:

```bash
# Contact Form (Formspree)
FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id

# Analytics (Optional)
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

### **Deployment Steps**

1. **Build the site**: `npm run build`
2. **Upload the `dist` folder** to your hosting platform
3. **Configure custom domain** (optional)
4. **Set up continuous deployment** from your Git repository

## 🎨 Customization Guide

### **Branding & Colors**

The site uses CSS custom properties for easy theming:

```css
/* src/styles/global.css */
:root {
  --accent-color: #00d4ff; /* Primary blue */
  --accent-hover: #33dfff; /* Hover blue */
  --accent-dark: #0099cc; /* Dark blue */
  --bg-primary: #0a0a0a; /* Dark background */
  --text-primary: #ffffff; /* Primary text */
  /* ... more variables */
}
```

### **Personal Information**

Update these files with your information:

- **Projects**: `src/data/projects.ts` - Portfolio projects
- **Skills**: `src/data/skills.ts` - Technology skills
- **About Page**: `src/pages/about.astro` - Personal bio
- **Contact**: `src/pages/contact.astro` - Contact details
- **SEO**: `src/layouts/Layout.astro` - Site metadata

### **Layout Customization**

Key layout files:

- **Main Layout**: `src/layouts/Layout.astro` - Global structure
- **Header**: `src/components/Header.astro` - Navigation
- **Footer**: `src/components/Footer.astro` - Site footer
- **Theme Toggle**: `src/components/ThemeToggle.astro` - Dark/light mode

## ⚡ Performance Metrics

This site is built for optimal performance:

- **🚀 Static Generation**: All pages pre-rendered at build time
- **💧 Minimal JavaScript**: Only interactive components hydrated
- **🖼️ Optimized Images**: Automatic compression and modern formats
- **🎨 CSS Optimization**: Tailwind CSS purging and critical CSS
- **🌐 CDN Ready**: Optimized for global content delivery
- **📊 Lighthouse Score**: 95+ across all metrics

### **Core Web Vitals**

- **LCP**: < 2.5s (Largest Contentful Paint)
- **FID**: < 100ms (First Input Delay)
- **CLS**: < 0.1 (Cumulative Layout Shift)

## 🌐 Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile Browsers**: iOS Safari 14+, Chrome Mobile 90+
- **Progressive Enhancement**: Graceful degradation for older browsers

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### **Development Guidelines**

- Follow TypeScript best practices
- Use semantic commit messages
- Test thoroughly before submitting
- Update documentation as needed

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 📞 Contact & Support

<div align="center">

**David Martin** - Full-Stack Developer & Entrepreneur

[![Email](https://img.shields.io/badge/Email-djmartin2019@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:djmartin2019@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-djmartin2019-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/djmartin2019)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-davidjmartin2025-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/davidjmartin2025)
[![Twitter](https://img.shields.io/badge/Twitter-@djmartin2019-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/djmartin2019)

</div>

---

<div align="center">

**⭐ If you found this project helpful, please give it a star!**

Made with ❤️ by [David Martin](https://www.djm-tech.dev/)

</div>
