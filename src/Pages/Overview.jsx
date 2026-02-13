import React, { useState } from 'react';

export default function ProjectsOverview() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Full-stack shopping experience with payment integration",
      tech: ["React", "Node.js", "Stripe"],
      color: "#FF6B6B",
      gradient: "from-red-500 to-orange-500"
    },
    {
      id: 2,
      title: "Brand Identity Design",
      category: "Graphic Design",
      description: "Complete visual identity for a tech startup",
      tech: ["Figma", "Illustrator", "Branding"],
      color: "#4ECDC4",
      gradient: "from-teal-400 to-cyan-500"
    },
    {
      id: 3,
      title: "Mobile Banking App",
      category: "UI/UX Design",
      description: "Intuitive financial management for modern users",
      tech: ["Figma", "Prototyping", "User Research"],
      color: "#95E1D3",
      gradient: "from-emerald-400 to-green-500"
    },
    {
      id: 4,
      title: "Marketing Campaign",
      category: "Digital Marketing",
      description: "Social media strategy driving 300% engagement growth",
      tech: ["Social Media", "Analytics", "Content"],
      color: "#F38181",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      id: 5,
      title: "SaaS Dashboard",
      category: "Web Development",
      description: "Real-time analytics platform for enterprise clients",
      tech: ["Vue.js", "D3.js", "WebSocket"],
      color: "#AA96DA",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      id: 6,
      title: "Content Strategy",
      category: "Copywriting",
      description: "SEO-optimized blog series generating 50k monthly views",
      tech: ["SEO", "Content Writing", "Analytics"],
      color: "#FCBAD3",
      gradient: "from-fuchsia-400 to-pink-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase bg-cyan-400/10 px-4 py-2 rounded-full border border-cyan-400/20">
              Portfolio
            </span>
          </div>
          <h1 className="text-7xl font-black text-white mb-6 tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">Work</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
            A collection of projects that showcase creativity, technical expertise, and real results for clients worldwide
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'slideUp 0.6s ease-out forwards',
                opacity: 0
              }}
            >
              {/* Card Container */}
              <div className="relative h-full bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800/50 overflow-hidden transition-all duration-500 hover:border-slate-700 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2">
                {/* Gradient Accent */}
                <div 
                  className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${project.gradient} transition-all duration-500 ${hoveredProject === project.id ? 'h-2' : ''}`}
                ></div>

                {/* Content */}
                <div className="p-8">
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1.5 bg-slate-800/50 text-slate-300 rounded-full border border-slate-700/50 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <button className="group/btn flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors">
                    <span>View Project</span>
                    <svg 
                      className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>

                {/* Hover Glow Effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${project.color}15, transparent 70%)`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-xl text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
            <span className="flex items-center gap-3">
              View All Projects
              <svg 
                className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}
