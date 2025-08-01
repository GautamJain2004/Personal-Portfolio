import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Palette,
  Zap,
  ArrowRight,
  Download,
  Menu,
  X,
} from 'lucide-react';

const Portfolio = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentSection, setCurrentSection] = useState('hero');
  const [isLoaded, setIsLoaded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    setIsLoaded(true);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
 {
    title: 'AI Finance Platform',
    desc: 'Full-stack personal finance management app with AI-powered expense tracking, budgeting, and receipt scanning using Gemini AI.',
    tech: ['Next.js', 'Tailwind CSS', 'Node.js', 'Gemini AI'],
    color: 'from-purple-500 to-cyan-500',
  },
  {
    title: 'Chatbot with Gemini Integration',
    desc: 'React-based AI chat app using Vite for performance and Gemini AI for intelligent responses, secured with .env configs.',
    tech: ['React', 'Vite', 'Node.js', 'Gemini AI'],
    color: 'from-blue-500 to-teal-500',
  },
  {
    title: 'Project Management System (CodeFire)',
    desc: 'Secure full-stack PMS and employee management system using React.js, Node.js (Express), and MySQL with JWT auth, pagination, bug fixes, and real-time notifications.',
    tech: ['React.js', 'Node.js', 'Express', 'MySQL'],
    color: 'from-orange-500 to-red-500',
  }
  ];

  const skills = [
  { name: 'React / Next.js', level: 90, icon: <Code className="w-6 h-6" /> },
  { name: 'Node.js / Express', level: 85, icon: <Code className="w-6 h-6" /> },
  { name: 'Tailwind CSS / Vite', level: 80, icon: <Palette className="w-6 h-6" /> },
  { name: 'AI Integration (Gemini)', level: 75, icon: <Zap className="w-6 h-6" /> },
  ];

  const scrollToSection = (sectionId) => {
    setCurrentSection(sectionId);
    setMobileMenuOpen(false);
    // Smooth scroll would work in a real implementation
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 opacity-30 transition-all duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.3) 0%, transparent 50%)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse" />
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30 animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Gautam Jain
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['hero', 'about', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                className="hover:text-purple-400 transition-all duration-300 hover:scale-110 capitalize"
                onClick={() => scrollToSection(item)}
              >
                {item === 'hero' ? 'Home' : item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10">
            <div className="px-6 py-4 space-y-4">
              {['hero', 'about', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  className="block w-full text-left hover:text-purple-400 transition-colors capitalize"
                  onClick={() => scrollToSection(item)}
                >
                  {item === 'hero' ? 'Home' : item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div
          className={`text-center transform transition-all duration-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 p-1 animate-spin-slow">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 animate-pulse" />
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Gautam Jain
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto">
            Aspiring Full Stack Developer
          </p>
          
          <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
             Hands-on experience building responsive, secure, and AI-powered web applications using React, Next.js, Node.js, and Tailwind CSS.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              onClick={() => scrollToSection('projects')}
            >
              <span className="flex items-center justify-center gap-2">
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="px-8 py-4 border border-purple-500 rounded-full hover:bg-purple-500/10 transition-all duration-300 hover:scale-105">
              <span className="flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Download CV
              </span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {[
              { icon: <Github className="w-6 h-6" />, href: 'https://github.com/GautamJain2004' },
              { icon: <Linkedin className="w-6 h-6" />, href: 'https://www.linkedin.com/in/gautam-jain-b27358375/' },
              { icon: <Mail className="w-6 h-6" />, href: 'jaingautam10092004@gmail.com' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="p-3 rounded-full bg-white/10 hover:bg-purple-500/20 transition-all duration-300 hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                 I’m an aspiring full-stack developer with hands-on experience building secure, scalable, and AI-powered web applications using React, Next.js, Node.js, and Tailwind CSS. I enjoy turning complex challenges into intuitive, functional digital solutions.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                 My recent experience includes an internship at CodeFire Technologies, where I contributed to enhancing an internal project management system with secure authentication, real-time updates, and performance optimizations. I also developed AI-integrated projects like a finance platform and a smart chatbot using Gemini API.  I’m passionate about clean code, emerging technologies, and creating products that make a difference. Outside of development, I explore AI concepts, write blogs, and enjoy researching financial strategies.
              </p>
            </div>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                        {skill.icon}
                      </div>
                      <span className="font-semibold">{skill.name}</span>
                    </div>
                    <span className="text-purple-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full transition-all duration-1000 group-hover:from-purple-400 group-hover:to-cyan-400"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />

                <div className="relative p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors group-hover:scale-110" />
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">{project.desc}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30 hover:bg-purple-500/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Let's Create Something Amazing
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's collaborate and build something extraordinary together.
          </p>
          
<div className="flex flex-col sm:flex-row gap-6 justify-center">
  <a
    href="mailto:jaingautam10092004@gmail.com"
    className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
  >
    <span className="flex items-center justify-center gap-2">
      <Mail className="w-5 h-5" />
      Get In Touch
    </span>
  </a>

            {/* <button className="px-8 py-4 border border-purple-500 rounded-full hover:bg-purple-500/10 transition-all duration-300 hover:scale-105">
              <span className="flex items-center justify-center gap-2">
                Schedule a Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2025 Gautam Jain. Crafted with passion and code.
          </div>
          <div className="flex space-x-6">
            {[
             { icon: <Github className="w-6 h-6" />, href: 'https://github.com/GautamJain2004' },
              { icon: <Linkedin className="w-6 h-6" />, href: 'https://www.linkedin.com/in/gautam-jain-b27358375/' },
              { icon: <Mail className="w-6 h-6" />, href: 'jaingautam10092004@gmail.com' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-gray-400 hover:text-purple-400 transition-colors hover:scale-110 transform duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;