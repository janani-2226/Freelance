import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Award, Building2 } from 'lucide-react';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const projects = {
    1: {
      id: 1,
      title: "Quantum Dashboard",
      desc: "Real-time data visualization for quantum computing metrics",
      tags: ["React", "D3.js", "WebSocket"],
      metric: "99.9% Uptime",
      fullDescription:
        "A cutting-edge real-time dashboard designed to monitor and visualize quantum computing performance metrics. Built with React and D3.js, this platform processes millions of data points per second.",
      challenge:
        "Creating a visualization system that could handle the unpredictable nature of quantum data while maintaining sub-millisecond rendering times.",
      solution:
        "Implemented a custom WebSocket protocol with intelligent data batching and developed specialized D3.js components optimized for quantum metric visualization.",
      impact:
        "Reduced debugging time by 60% for quantum researchers and enabled real-time experiment adjustments.",
      technologies: [
        "React 18",
        "D3.js",
        "WebSocket",
        "Node.js",
        "Redis",
        "PostgreSQL"
      ],
      duration: "6 months",
      client: "Quantum Computing Research Lab"
    }
  };

  const project = projects[id];

  if (!project) {
    return (
      <div className="flex items-center justify-center py-40 bg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Project Not Found
          </h2>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 w-full">
      
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Portfolio</span>
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-6 py-12">

        {/* Hero */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="flex flex-col justify-center">

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm font-medium rounded-md border border-blue-100">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {project.title}
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              {project.desc}
            </p>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl border">
                <Award className="w-5 h-5 text-blue-600 mb-2" />
                <div className="text-lg font-bold">{project.metric}</div>
                <div className="text-xs text-gray-500 uppercase">Achievement</div>
              </div>

              <div className="bg-white p-4 rounded-xl border">
                <Calendar className="w-5 h-5 text-blue-600 mb-2" />
                <div className="text-lg font-bold">{project.duration}</div>
                <div className="text-xs text-gray-500 uppercase">Duration</div>
              </div>

              <div className="bg-white p-4 rounded-xl border">
                <Building2 className="w-5 h-5 text-blue-600 mb-2" />
                <div className="text-lg font-bold">
                  {project.client.split(' ')[0]}
                </div>
                <div className="text-xs text-gray-500 uppercase">Client</div>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="rounded-xl overflow-hidden shadow-lg w-full">
              <img
                src={`https://picsum.photos/600/500?random=${project.id}`}
                alt={project.title}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Overview</h2>
          <div className="bg-white p-8 rounded-xl border">
            <p className="text-gray-700 text-lg mb-6">
              {project.fullDescription}
            </p>
            <div className="pt-6 border-t">
              <span className="text-sm font-semibold">Client: </span>
              <span className="text-sm text-gray-600">
                {project.client}
              </span>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Approach</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border">
              <div className="px-3 py-1 bg-red-50 text-red-700 text-xs rounded-full mb-4 inline-block">
                Challenge
              </div>
              <p>{project.challenge}</p>
            </div>

            <div className="bg-white p-8 rounded-xl border">
              <div className="px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full mb-4 inline-block">
                Solution
              </div>
              <p>{project.solution}</p>
            </div>
          </div>
        </section>

        {/* Impact & Tech */}
        <div className="grid md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-3xl font-bold mb-6">Impact</h2>
            <div className="bg-blue-50 p-8 rounded-xl border">
              <p className="text-lg">{project.impact}</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Technologies</h2>
            <div className="bg-white p-8 rounded-xl border">
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="px-4 py-2 bg-gray-50 rounded-lg border">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </div>

      </main>
    </div>
  );
}
