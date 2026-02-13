import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Sparkles, Zap, Brain, Layers, Globe, Star, Circle, Triangle, Square, Award, Users, TrendingUp, Mail, Github, Linkedin, Twitter, Send, Download, Play } from 'lucide-react';

export default function UniquePortfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [activeSection, setActiveSection] = useState(0);
  const [ripples, setRipples] = useState([]);
  const cursorTrailRef = useRef([]);
  const [cursorTrail, setCursorTrail] = useState([]);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = document.querySelectorAll('section');
      const scrollPos = window.scrollY + window.innerHeight / 2;
      
      sections.forEach((section, index) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        if (scrollPos >= top && scrollPos < bottom) {
          setActiveSection(index);
        }
      });
    };
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      cursorTrailRef.current = [
        { x: e.clientX, y: e.clientY, id: Date.now() },
        ...cursorTrailRef.current.slice(0, 12)
      ];
      setCursorTrail([...cursorTrailRef.current]);

      // Random particle generation
      if (Math.random() > 0.95) {
        const newParticle = {
          x: e.clientX + (Math.random() - 0.5) * 100,
          y: e.clientY + (Math.random() - 0.5) * 100,
          id: Date.now() + Math.random()
        };
        setParticles(prev => [...prev.slice(-20), newParticle]);
      }
    };

    const handleClick = (e) => {
      const newRipple = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now()
      };
      setRipples(prev => [...prev, newRipple]);
      
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 1200);
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const expertise = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Strategy",
      areas: ["Machine Learning", "Neural Networks", "GPT Integration", "Model Training"],
      shape: <Circle className="w-full h-full" />
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Creative Tech",
      areas: ["WebGL/Three.js", "Motion Design", "Interactive Art", "Generative UI"],
      shape: <Triangle className="w-full h-full" />
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "System Design",
      areas: ["Microservices", "Cloud Native", "Real-time Data", "GraphQL APIs"],
      shape: <Square className="w-full h-full" />
    }
  ];

  const showcase = [
    {
      id: 1,
      title: "Quantum Dashboard",
      desc: "Real-time data visualization for quantum computing metrics",
      tags: ["React", "D3.js", "WebSocket"],
      metric: "99.9% Uptime"
    },
    {
      id: 2,
      title: "Neural Canvas",
      desc: "AI-powered creative tool for digital artists",
      tags: ["Next.js", "Stable Diffusion", "WebGL"],
      metric: "50K+ Users"
    },
    {
      id: 3,
      title: "Echo Protocol",
      desc: "Distributed messaging system with E2E encryption",
      tags: ["Rust", "WebRTC", "IPFS"],
      metric: "1M+ Messages"
    },
    {
      id: 4,
      title: "Prism Analytics",
      desc: "Multi-dimensional business intelligence platform",
      tags: ["TypeScript", "PostgreSQL", "Redis"],
      metric: "10TB Data"
    }
  ];

  const teamValues = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Innovation",
      desc: "Pushing boundaries with cutting-edge solutions"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      desc: "Building together, achieving extraordinary"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence",
      desc: "Delivering quality in every detail"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Impact",
      desc: "Creating solutions that matter worldwide"
    }
  ];

  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "50+", label: "Team Members" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "15+", label: "Countries Served" }
  ];

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden relative min-h-screen">
      {/* Advanced Cursor */}
      <div className="fixed inset-0 pointer-events-none z-[9999]">
        {/* Cursor Trail */}
        {cursorTrail.map((point, index) => (
          <div
            key={point.id}
            className="absolute"
            style={{
              left: `${point.x}px`,
              top: `${point.y}px`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div 
              className="w-3 h-3 rounded-full bg-blue-500 mix-blend-multiply"
              style={{
                opacity: (1 - index / cursorTrail.length) * 0.3,
                scale: (1 - index / cursorTrail.length)
              }}
            />
          </div>
        ))}

        {/* Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-gray-900 rounded-full animate-particle-float"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
            }}
          />
        ))}

        {/* Main Cursor */}
        <div
          className="absolute transition-all duration-150 ease-out"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div className={`rounded-full border-2 border-gray-900 transition-all duration-300 ${
            cursorVariant === 'hover' ? 'w-20 h-20 border-blue-500' : 'w-12 h-12'
          }`} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-gray-900 rounded-full" />
        </div>

        {/* Ripples */}
        {ripples.map((ripple) => (
          <div
            key={ripple.id}
            className="absolute rounded-full border-2 border-blue-500 animate-ripple-expand"
            style={{
              left: `${ripple.x}px`,
              top: `${ripple.y}px`,
              transform: 'translate(-50%, -50%)'
            }}
          />
        ))}
      </div>

      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-blue-400/40 rounded-full blur-[80px] animate-blob" />
        <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-sky-400/40 rounded-full blur-[80px] animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/3 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[80px] animate-blob" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-40 right-1/4 w-[500px] h-[500px] bg-sky-500/30 rounded-full blur-[80px] animate-blob" style={{ animationDelay: '6s' }} />
      </div>

      {/* Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Sidebar Navigation */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col gap-6">
          {['Intro', 'About', 'Works', 'Contact'].map((item, index) => (
            <button
              key={item}
              onClick={() => {
                if (item === 'Intro') window.scrollTo({ top: 0, behavior: 'smooth' });
                else scrollToSection(item.toLowerCase().replace(' ', '-'));
              }}
              className={`group relative transition-all duration-300 ${
                activeSection === index ? 'scale-125' : 'scale-100 opacity-50 hover:opacity-100'
              }`}
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSection === index 
                  ? 'bg-blue-500 shadow-lg shadow-blue-500/50' 
                  : 'bg-gray-400'
              }`} />
              <span className="absolute left-6 top-1/2 -translate-y-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-gray-900">
                {item}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <div 
            className="text-2xl font-black tracking-tighter text-gray-900 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            Σ
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            {['About Us', 'Works', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="text-sm font-medium tracking-wide text-gray-600 hover:text-blue-600 transition-colors"
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* <button
            onClick={() => scrollToSection('contact')}
            className="text-sm font-medium tracking-wide text-gray-600 hover:text-blue-600 transition-colors"
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            Contact
          </button> */}
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-8 bg-transparent">
        <div className="max-w-6xl mx-auto text-center bg-transparent">
          <div className="mb-8 inline-flex items-center gap-3 px-5 py-2 border border-gray-300 rounded-full backdrop-blur-sm bg-transparent">
            <div className="relative w-2 h-2">
              <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping" />
              <div className="relative w-2 h-2 bg-blue-500 rounded-full" />
            </div>
            <span className="text-xs tracking-widest uppercase text-gray-600 font-display">Available for All Projects</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-light leading-tight mb-6 tracking-tight">
            <span className="text-gray-900">I Build </span>
            <span className="text-gray-900">Impossible </span>
            <span className="text-gray-900">Things</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed font-display font-light">
            Full-stack engineer specializing in AI integration, creative technology, and pushing the boundaries of what's possible on the web.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('works')}
              className="group relative px-8 py-4 overflow-hidden bg-gray-900 hover:bg-blue-600 transition-colors duration-500"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <span className="relative text-white font-display font-medium tracking-wide flex items-center gap-3">
                View Selected Work
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </button>

            <button
              onClick={() => scrollToSection('about-us')}
              className="px-8 py-4 border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-colors font-display font-medium tracking-wide"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              Read Manifesto
            </button>
          </div>

          {/* Floating Metrics */}
          <div className="grid grid-cols-3 gap-6 mt-20 max-w-3xl mx-auto">
            {[
              { value: "8+", label: "Years Shipping" },
              { value: "100+", label: "Projects Deployed" },
              { value: "∞", label: "Lines of Code" }
            ].map((metric, i) => (
              <div key={i} className="group">
                <div className="text-4xl font-display font-semibold mb-2 text-gray-900">
                  {metric.value}
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-widest font-display">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-32 px-8 relative bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Story Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
            <div className="space-y-6">
              <h3 className="text-4xl font-black text-gray-900">Our Story</h3>
              <p className="text-gray-600 leading-relaxed">
                Founded with a vision to revolutionize the digital landscape, we've grown from a small team of enthusiasts to a globally recognized force in technology and design. Our journey has been marked by countless innovations, breakthrough projects, and partnerships with industry leaders.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we continue to challenge conventions and set new standards in everything we do. From AI-powered solutions to immersive web experiences, our work speaks for itself.
              </p>
            </div>
            <div className="relative h-[400px] rounded-3xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />
            </div>
          </div>

          {/* Values */}
          <div>
            <h3 className="text-4xl font-black text-gray-900 mb-12 text-center">Our Values</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {teamValues.map((value, index) => (
                <div
                  key={index}
                  className="group relative text-center p-8 bg-white border-2 border-gray-200 rounded-3xl hover:border-blue-500 transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-2"
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl border border-blue-200 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-black mb-3 text-gray-900">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mt-20 text-center max-w-4xl mx-auto p-12 bg-gradient-to-br from-blue-50 to-sky-50 rounded-3xl border-2 border-blue-100">
            <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-blue-600 text-white rounded-full">
              <TrendingUp className="w-10 h-10" />
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To empower businesses and individuals through innovative technology solutions that are not only functional but also beautiful, accessible, and transformative. We believe in creating digital experiences that inspire, engage, and drive meaningful change.
            </p>
          </div>
        </div>
      </section>

{/* Showcase Grid */}
<section id="works" className="py-32 px-8 relative">
  <div className="w-full mx-auto">
    <div
      id="scrollContainer"
      className="overflow-x-auto pb-8 scrollbar-hide"
      onMouseEnter={() => {
        // Disable body scroll when mouse enters
        document.body.style.overflow = 'hidden';
      }}
      onMouseLeave={() => {
        // Re-enable body scroll when mouse leaves
        document.body.style.overflow = 'auto';
      }}
      onWheel={(e) => {
        e.preventDefault(); // Prevent normal vertical scroll
        const container = e.currentTarget;
        
        // Scroll horizontally based on wheel direction
        // deltaY > 0 means scrolling down → scroll right
        // deltaY < 0 means scrolling up → scroll left
        container.scrollLeft += e.deltaY;
      }}
    >
      <div className="flex gap-8 items-start">
        
        {/* Title - Now scrolls with content */}
        <div className="flex-shrink-0 w-[300px] flex items-end h-[520px]">
          <h2 className="text-5xl md:text-7xl font-display font-light text-gray-900 pb-6">
            Case Studies
          </h2>
        </div>

        {/* Projects */}
        {showcase.map((project, index) => (
          <a
            href="#"
            key={project.id}
            className="group relative overflow-hidden rounded-2xl border border-gray-200 transition-all duration-300 w-[340px] h-[520px] flex-shrink-0"
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            
            {/* Random Online Image */}
            <img
              src={`https://picsum.photos/600/900?random=${index}`}
              alt="project"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            {/* Bottom Content */}
            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="text-xl font-display mb-2 leading-snug">
                {project.title}
              </h3>

              <p className="text-sm text-gray-200">
                {project.desc}
              </p>
            </div>

          </a>
        ))}
      </div>
    </div>

    {/* Scroll Arrow */}
    <button
      onClick={() => {
        document
          .getElementById("scrollContainer")
          .scrollBy({ left: 360, behavior: "smooth" });
      }}
      className="absolute right-8 top-1/2 -translate-y-1/2 bg-white border border-gray-200 shadow-md rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-50 z-10"
    >
      →
    </button>

  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 relative bg-gradient-to-br from-gray-50 via-blue-50 to-sky-50">
        <div className="max-w-7xl mx-auto">
          {/* Split Layout */}
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Left Side - Content */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold uppercase tracking-wider">
                  Get In Touch
                </div>
                
                <h2 className="text-5xl md:text-6xl font-black mb-4 leading-tight">
                  <span className="text-gray-900">Let's Build</span>
                  <br />
                  <span className="text-blue-600">Together</span>
                </h2>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Have an ambitious project in mind? We'd love to hear about it and explore how we can bring your vision to life.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { value: "< 24h", label: "Response Time" },
                  { value: "100%", label: "Satisfaction" },
                  { value: "24/7", label: "Support" }
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 bg-white rounded-xl border border-gray-200">
                    <div className="text-2xl font-black text-blue-600">{stat.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {[
                  { icon: <Mail className="w-5 h-5" />, label: "Email", color: "bg-blue-600" },
                  { icon: <Twitter className="w-5 h-5" />, label: "Twitter", color: "bg-sky-500" },
                  { icon: <Github className="w-5 h-5" />, label: "GitHub", color: "bg-gray-900" },
                  { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", color: "bg-blue-700" }
                ].map((social, i) => (
                  <button
                    key={i}
                    className={`group relative w-12 h-12 ${social.color} hover:scale-110 transition-all flex items-center justify-center text-white rounded-xl shadow-lg hover:shadow-xl`}
                    onMouseEnter={() => setCursorVariant('hover')}
                    onMouseLeave={() => setCursorVariant('default')}
                  >
                    {social.icon}
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {social.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200 flex flex-col">
              <h3 className="text-2xl font-black mb-6 text-gray-900">Send a Message</h3>
              
              <form className="space-y-4 flex-1 flex flex-col">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Project Type</label>
                  <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors">
                    <option>Web Development</option>
                    <option>Mobile App</option>
                    <option>AI Integration</option>
                    <option>UI/UX Design</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex-1 flex flex-col">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors resize-none flex-1 min-h-[120px]"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group w-full px-8 py-4 bg-blue-600 hover:bg-gray-900 transition-colors duration-500 rounded-xl font-bold text-white flex items-center justify-center gap-3"
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>

              {/* Trust Badge */}
              <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-center gap-2 text-sm text-gray-500">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>We'll respond within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 border-t-2 border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-black text-gray-900">Σ</div>
          
          <div className="text-sm text-gray-500">
            © 2026 — Crafted with obsessive attention to detail
          </div>

          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes particle-float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) translateX(20px);
            opacity: 0;
          }
        }

        @keyframes ripple-expand {
          0% {
            width: 0;
            height: 0;
            opacity: 1;
          }
          100% {
            width: 300px;
            height: 300px;
            opacity: 0;
          }
        }

        .animate-blob {
          animation: blob 7s ease-in-out infinite;
        }

        .animate-particle-float {
          animation: particle-float 2s ease-out forwards;
        }

        .animate-ripple-expand {
          animation: ripple-expand 1.2s ease-out forwards;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}