import React, { useState, useEffect } from 'react';
import { Github, Youtube, Linkedin, Mail, ExternalLink, Code2, Brain, Briefcase, Sparkles, Moon, Sun, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedArchitecture, setSelectedArchitecture] = useState(null);
  const [selectedDiagram, setSelectedDiagram] = useState(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
    }
    
    // Remove body margins and ensure full coverage
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    localStorage.setItem('theme', !isDark ? 'dark' : 'light');
  };

  const skills = [
    { category: "Agentic Frameworks", items: ["LangChain", "CrewAI", "AutoGen", "LlamaIndex", "Semantic Kernel"] },
    { category: "LLMs & APIs", items: ["OpenAI GPT-4", "Claude", "Gemini", "Anthropic API", "Azure OpenAI"] },
    { category: "Workflow Automation", items: ["n8n", "Make", "Zapier", "Apache Airflow", "Temporal"] },
    { category: "ML/AI Tools", items: ["HuggingFace", "PyTorch", "TensorFlow", "LangSmith", "Weights & Biases"] },
    { category: "Backend & Cloud", items: ["Python", "FastAPI", "Docker", "AWS", "Azure", "GCP"] },
    { category: "Vector DBs", items: ["Pinecone", "Weaviate", "Chroma", "FAISS", "Qdrant"] },
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Streamlit"] }
  ];

  const experience = [
    {
      role: "FullStack AI Engineer",
      company: "Accenture",
      period: "Aug 2024 - Present",
      description: "Developing and deploying production-ready multi-agent systems using cutting-edge agentic AI frameworks including LangChain, CrewAI, Strands, Google ADK and AutoGen. Architecting scalable, cloud-native solutions on AWS with emphasis on reliability and systems thinking. Exploring and implementing enterprise agentic AI services including AWS Bedrock and Claude APIs for autonomous intelligent systems."
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Multi-Agent Orchestration System",
      description: "Architected an advanced agentic framework coordinating multiple AI agents with dynamic task allocation, inter-agent communication protocols, and autonomous decision-making capabilities. Fully deployed on AWS.",
      tags: ["Strands", "Python", "AWS", "Lambda", "DynamoDB", "Api gateway", "WebSockets"],
      github: "https://github.com/itsroshanharry/swarm-with-human-in-the-loop",
      youtube: "https://www.youtube.com/watch?v=iajM20lhH-Y&t=2s",
      hasArchitecture: true,
      architectureDiagrams: [
        { name: "High-Level Architecture - Overview", path: "/my-portfolio/swarm-high-level-architecture-diagram1.png" },
        { name: "High-Level Architecture - Components", path: "/my-portfolio/swarm-high-level-architecture-diagram2.png" },
        { name: "Low-Level Architecture Design", path: "/my-portfolio/swarm-low-level-architecture-design.png" }
      ]
    },
    {
      id: 2,
      title: "Slack N8N Workflow Builder Bot",
      description: "Built an intelligent Slack bot that converts natural language automation ideas into complete N8N workflows. Users describe their needs via text or voice, OpenAI Assistants API handles clarification, and Claude generates detailed step-by-step workflow instructions with node configurations.",
      tags: ["N8N", "Slack API", "OpenAI Assistants", "Claude"],
      github: "https://github.com/itsroshanharry/slack-n8n-workflow",
      youtube: "https://www.youtube.com/watch?v=tj6JSzW2JTE&t=18s",
      hasArchitecture: false
    }
  ];

  return (
    <div className={`min-h-screen w-full transition-colors duration-300 overflow-x-hidden ${isDark ? 'bg-gradient-to-br from-gray-900 via-red-950 to-black text-white' : 'bg-gradient-to-br from-red-50 via-white to-blue-50 text-gray-900'}`}>
      
      {/* Spider-Web SVG Background */}
      <div className="fixed inset-0 -z-10 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="web" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M100 0 L100 200 M0 100 L200 100 M50 50 L150 150 M150 50 L50 150" 
                    stroke={isDark ? '#ef4444' : '#dc2626'} strokeWidth="0.5" fill="none" opacity="0.3"/>
              <circle cx="100" cy="100" r="3" fill={isDark ? '#ef4444' : '#dc2626'} opacity="0.5"/>
              <circle cx="100" cy="0" r="2" fill={isDark ? '#ef4444' : '#dc2626'} opacity="0.3"/>
              <circle cx="200" cy="100" r="2" fill={isDark ? '#ef4444' : '#dc2626'} opacity="0.3"/>
              <circle cx="100" cy="200" r="2" fill={isDark ? '#ef4444' : '#dc2626'} opacity="0.3"/>
              <circle cx="0" cy="100" r="2" fill={isDark ? '#ef4444' : '#dc2626'} opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#web)"/>
        </svg>
      </div>

      {/* Floating Spiders */}
      <div className={`fixed top-10 right-20 text-4xl animate-float hidden lg:block ${isDark ? 'opacity-20' : 'opacity-10'}`} style={{animationDelay: '0s'}}>
        🕷️
      </div>
      <div className={`fixed top-40 left-10 text-3xl animate-float hidden lg:block ${isDark ? 'opacity-15' : 'opacity-8'}`} style={{animationDelay: '2s'}}>
        🕷️
      </div>
      <div className={`fixed bottom-32 right-32 text-5xl animate-float hidden lg:block ${isDark ? 'opacity-25' : 'opacity-12'}`} style={{animationDelay: '4s'}}>
        🕷️
      </div>
      
      {/* Crawling Spider */}
      <div className={`fixed top-0 text-2xl animate-crawl hidden lg:block ${isDark ? 'opacity-30' : 'opacity-15'}`}>
        🕷️
      </div>
      
      {/* Web Strands */}
      <div className="fixed top-0 left-1/4 w-0.5 h-32 bg-gradient-to-b from-red-500/30 to-transparent animate-swing hidden lg:block" style={{animationDelay: '0s'}}></div>
      <div className="fixed top-0 right-1/3 w-0.5 h-40 bg-gradient-to-b from-blue-500/30 to-transparent animate-swing hidden lg:block" style={{animationDelay: '1s'}}></div>
      <div className="fixed top-0 left-2/3 w-0.5 h-36 bg-gradient-to-b from-red-500/30 to-transparent animate-swing hidden lg:block" style={{animationDelay: '2s'}}></div>

      {/* Fixed Navigation */}
      <nav className={`fixed top-0 w-full backdrop-blur-md border-b z-50 transition-colors duration-300 ${isDark ? 'bg-gray-900/90 border-red-900/50' : 'bg-white/90 border-red-200'}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
              🕸️ Roshan Kumar Kola
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-6 items-center">
              <a href="#about" className={`text-sm transition-colors ${isDark ? 'hover:text-red-400' : 'hover:text-red-600'}`}>About</a>
              <a href="#skills" className={`text-sm transition-colors ${isDark ? 'hover:text-red-400' : 'hover:text-red-600'}`}>Skills</a>
              <a href="#experience" className={`text-sm transition-colors ${isDark ? 'hover:text-red-400' : 'hover:text-red-600'}`}>Experience</a>
              <a href="#projects" className={`text-sm transition-colors ${isDark ? 'hover:text-red-400' : 'hover:text-red-600'}`}>Projects</a>
              <button 
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${isDark ? 'hover:bg-red-900/30' : 'hover:bg-red-100'}`}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5 text-red-400" /> : <Moon className="w-5 h-5 text-red-600" />}
              </button>
              <div className={`flex gap-3 ml-4 border-l pl-4 ${isDark ? 'border-red-900' : 'border-red-300'}`}>
                <a href="https://github.com/itsroshanharry" target="_blank" rel="noopener noreferrer" 
                   className={`transition-colors ${isDark ? 'hover:text-red-400' : 'hover:text-red-600'}`}>
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/itsroshanharry/" target="_blank" rel="noopener noreferrer"
                   className={`transition-colors ${isDark ? 'hover:text-red-400' : 'hover:text-red-600'}`}>
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:roshankumarkola6@gmail.com" className={`transition-colors ${isDark ? 'hover:text-red-400' : 'hover:text-red-600'}`}>
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden gap-2 items-center">
              <button 
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${isDark ? 'hover:bg-red-900/30' : 'hover:bg-red-100'}`}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5 text-red-400" /> : <Moon className="w-5 h-5 text-red-600" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors ${isDark ? 'hover:bg-red-900/30' : 'hover:bg-red-100'}`}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className={`md:hidden mt-4 py-4 border-t ${isDark ? 'border-red-900/50' : 'border-red-200'}`}>
              <div className="flex flex-col gap-4">
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className={`text-sm transition-colors ${isDark ? 'hover:text-red-400' : 'hover:text-red-600'}`}>About</a>
                <a href="#skills" onClick={() => setMobileMenuOpen(false)} className={`text-sm transition-colors ${isDark ? 'hover:text-red-400' : 'hover:text-red-600'}`}>Skills</a>
                <a href="#experience" onClick={() => setMobileMenuOpen(false)} className={`text-sm transition-colors ${isDark ? 'hover:text-red-400' : 'hover:text-red-600'}`}>Experience</a>
                <a href="#projects" onClick={() => setMobileMenuOpen(false)} className={`text-sm transition-colors ${isDark ? 'hover:text-red-400' : 'hover:text-red-600'}`}>Projects</a>
                <div className={`flex gap-4 pt-4 border-t ${isDark ? 'border-red-900/50' : 'border-red-200'}`}>
                  <a href="https://github.com/itsroshanharry" target="_blank" rel="noopener noreferrer" className={`transition-colors ${isDark ? 'hover:text-red-400' : 'hover:text-red-600'}`}>
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/itsroshanharry/" target="_blank" rel="noopener noreferrer" className={`transition-colors ${isDark ? 'hover:text-red-400' : 'hover:text-red-600'}`}>
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="mailto:roshankumarkola6@gmail.com" className={`transition-colors ${isDark ? 'hover:text-red-400' : 'hover:text-red-600'}`}>
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero / About Section */}
      <section id="about" className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 relative overflow-hidden">
        {/* Animated web corner decorations */}
        <div className="absolute top-0 left-0 w-32 h-32 opacity-20 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M0,0 L100,0 L0,100 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-red-500"/>
            <path d="M20,0 L0,20" stroke="currentColor" strokeWidth="0.5" className="text-red-500"/>
            <path d="M40,0 L0,40" stroke="currentColor" strokeWidth="0.5" className="text-red-500"/>
            <path d="M60,0 L0,60" stroke="currentColor" strokeWidth="0.5" className="text-red-500"/>
            <path d="M80,0 L0,80" stroke="currentColor" strokeWidth="0.5" className="text-red-500"/>
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 opacity-20 pointer-events-none transform scale-x-[-1]">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M0,0 L100,0 L0,100 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-blue-500"/>
            <path d="M20,0 L0,20" stroke="currentColor" strokeWidth="0.5" className="text-blue-500"/>
            <path d="M40,0 L0,40" stroke="currentColor" strokeWidth="0.5" className="text-blue-500"/>
            <path d="M60,0 L0,60" stroke="currentColor" strokeWidth="0.5" className="text-blue-500"/>
            <path d="M80,0 L0,80" stroke="currentColor" strokeWidth="0.5" className="text-blue-500"/>
          </svg>
        </div>
        <div className={`absolute inset-0 -z-10 ${isDark ? 'bg-gradient-to-br from-red-900/20 via-transparent to-blue-900/20' : 'bg-gradient-to-br from-red-100/50 via-transparent to-blue-100/50'}`}></div>
        
        <div className="max-w-5xl mx-auto">
          {/* Profile Picture with Spider Web Animation */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-8">
            <div className="relative group">
              {/* Animated Spider Web Ring */}
              <div className={`absolute inset-0 rounded-full animate-spin-slow ${isDark ? 'border-4 border-transparent border-t-red-500 border-r-blue-500' : 'border-4 border-transparent border-t-red-600 border-r-blue-600'}`} style={{animationDuration: '8s'}}></div>
              <div className={`absolute inset-0 rounded-full animate-spin-slow ${isDark ? 'border-4 border-transparent border-b-red-500 border-l-blue-500' : 'border-4 border-transparent border-b-red-600 border-l-blue-600'}`} style={{animationDuration: '12s', animationDirection: 'reverse'}}></div>
              
              {/* Web lines decoration */}
              <svg className="absolute inset-0 w-full h-full animate-pulse" viewBox="0 0 200 200" style={{animationDuration: '3s'}}>
                <circle cx="100" cy="100" r="95" fill="none" stroke={isDark ? '#ef4444' : '#dc2626'} strokeWidth="0.5" opacity="0.3"/>
                <circle cx="100" cy="100" r="80" fill="none" stroke={isDark ? '#3b82f6' : '#2563eb'} strokeWidth="0.5" opacity="0.3"/>
                <circle cx="100" cy="100" r="65" fill="none" stroke={isDark ? '#ef4444' : '#dc2626'} strokeWidth="0.5" opacity="0.3"/>
              </svg>
              
              {/* Profile Image */}
              <div className={`relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 ${isDark ? 'border-red-500 shadow-2xl shadow-red-500/50' : 'border-red-600 shadow-2xl shadow-red-600/30'} group-hover:scale-105 transition-transform duration-300`}>
                <img 
                  src="/my-portfolio/profile.jpg" 
                  alt="Roshan Kumar Kola" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    e.target.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'w-full h-full flex items-center justify-center text-6xl font-bold bg-gradient-to-br from-red-500 to-blue-500';
                    fallback.textContent = 'RK';
                    e.target.parentElement.appendChild(fallback);
                  }}
                />
              </div>
              
              {/* Spider emoji that moves on hover */}
              <div className="absolute -top-2 -right-2 text-3xl group-hover:animate-bounce">🕷️</div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4 sm:mb-6">
                <div className={`w-1 h-8 sm:h-12 ${isDark ? 'bg-gradient-to-b from-red-500 to-blue-500' : 'bg-gradient-to-b from-red-600 to-blue-600'}`}></div>
                <span className={`font-bold text-sm sm:text-base ${isDark ? 'text-red-400' : 'text-red-600'}`}>🕷️ AI Engineer</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                With <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">Great AI</span> Comes <span className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">Great Responsibility</span>
              </h1>
            </div>
          </div>
          <p className={`text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-3xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            I'm <strong className={isDark ? 'text-red-400' : 'text-red-600'}>Roshan</strong>, architecting cutting-edge agentic AI systems that solve complex problems. 
            Specialized in building autonomous agents, multi-agent orchestration, and production-ready LLM applications.
          </p>
          <p className={`text-base sm:text-lg mb-8 sm:mb-10 max-w-3xl leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            With deep expertise in frameworks like AutoGen, LangChain, and CrewAI, I build reliable, context-aware multi-agent systems. 
            I bring a systems thinking approach to deploying scalable agentic AI on cloud platforms. My work spans retrieval-augmented generation, 
            multi-agent system design, writing detailed prompts with LLM-specific prompting strategies, and autonomous workflow automation. 
            Building resilient AI architectures on both AWS and Azure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#projects" className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 text-center shadow-lg ${isDark ? 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 hover:shadow-red-500/50' : 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700'}`}>
              🕸️ View My Work
            </a>
            <a href="mailto:roshankumarkola6@gmail.com" className={`px-6 py-3 border-2 rounded-lg font-bold transition-all duration-300 text-center ${isDark ? 'border-red-600 text-red-400 hover:bg-red-600/10 hover:border-red-500' : 'border-red-600 text-red-600 hover:bg-red-50 hover:border-red-700'}`}>
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-16 sm:py-20 px-4 sm:px-6 relative ${isDark ? 'bg-black/30' : 'bg-white/30'}`}>
        <div className={`absolute inset-0 -z-10 ${isDark ? 'bg-gradient-to-r from-gray-900 via-red-950 to-gray-900' : 'bg-gradient-to-r from-red-50 via-white to-blue-50'}`}></div>
        
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8 sm:mb-12">
            <Sparkles className={`w-6 sm:w-7 h-6 sm:h-7 ${isDark ? 'text-red-500' : 'text-red-600'}`} />
            <h2 className="text-3xl sm:text-4xl font-bold">Skills & Technologies</h2>
            <span className="text-2xl">🕷️</span>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <div key={index} className={`p-6 rounded-xl border transition-all duration-300 relative overflow-hidden group ${isDark ? 'bg-gray-900/80 border-red-900/50 hover:border-red-500 hover:shadow-lg hover:shadow-red-500/20' : 'bg-white border-red-200 hover:border-red-400 hover:shadow-lg'}`}>
                {/* Web decoration on hover */}
                <div className="absolute top-0 right-0 text-6xl opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                  🕸️
                </div>
                <div className={`absolute top-0 left-0 w-full h-1 transition-all duration-300 ${isDark ? 'bg-gradient-to-r from-red-500 to-blue-500' : 'bg-gradient-to-r from-red-500 to-blue-500'}`}></div>
                <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-red-400' : 'text-red-600'}`}>
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, idx) => (
                    <span key={idx} className={`px-3 py-1 rounded-full text-sm transition-colors ${isDark ? 'bg-gray-800 text-gray-300 group-hover:bg-red-900/30 group-hover:text-red-300' : 'bg-red-50 text-gray-700 group-hover:bg-red-100'}`}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 relative">
        <div className={`absolute inset-0 -z-10 ${isDark ? 'bg-gradient-to-bl from-blue-900/20 via-transparent to-red-900/20' : 'bg-gradient-to-bl from-blue-100/50 via-transparent to-red-100/50'}`}></div>
        
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8 sm:mb-12">
            <Briefcase className={`w-6 sm:w-7 h-6 sm:h-7 ${isDark ? 'text-blue-500' : 'text-blue-600'}`} />
            <h2 className="text-3xl sm:text-4xl font-bold">Experience</h2>
            <span className="text-2xl">🕸️</span>
          </div>
          
          <div className="space-y-6 sm:space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className={`border-l-4 pl-4 sm:pl-6 pb-6 sm:pb-8 transition-colors ${isDark ? 'border-red-500' : 'border-red-600'}`}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold">{exp.role}</h3>
                    <p className={`text-base sm:text-lg font-bold ${isDark ? 'text-red-400' : 'text-red-600'}`}>{exp.company}</p>
                  </div>
                  <span className={`font-medium text-sm sm:text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{exp.period}</span>
                </div>
                <p className={`leading-relaxed text-sm sm:text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-16 sm:py-20 px-4 sm:px-6 relative ${isDark ? 'bg-black/30' : 'bg-white/30'}`}>
        <div className={`absolute inset-0 -z-10 ${isDark ? 'bg-gradient-to-l from-gray-900 via-red-950 to-gray-900' : 'bg-gradient-to-l from-red-50 via-white to-blue-50'}`}></div>
        
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8 sm:mb-12">
            <Code2 className={`w-6 sm:w-7 h-6 sm:h-7 ${isDark ? 'text-red-500' : 'text-red-600'}`} />
            <h2 className="text-3xl sm:text-4xl font-bold">Featured Projects</h2>
            <span className="text-2xl">🕷️</span>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`border rounded-xl p-6 transition-all duration-300 relative overflow-hidden group ${isDark ? 'bg-gray-900/80 border-red-900/50 hover:border-red-500 hover:shadow-xl hover:shadow-red-500/20' : 'bg-white border-red-200 hover:border-red-400 hover:shadow-xl'}`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Web decoration on hover */}
                <div className={`absolute top-0 right-0 text-6xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}>
                  🕸️
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold mb-3 pr-10">{project.title}</h3>
                <p className={`mb-4 leading-relaxed text-sm sm:text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span key={index} className={`px-3 py-1 rounded-full text-sm font-medium ${isDark ? 'bg-gray-800 text-gray-300' : 'bg-red-50 text-gray-700'}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all duration-300 ${isDark ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-900 text-white hover:bg-gray-800'}`}
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                    <a
                      href={project.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 rounded-lg font-medium transition-all duration-300"
                    >
                      <Youtube className="w-4 h-4" />
                      Demo
                    </a>
                  </div>
                  {project.hasArchitecture && (
                    <button
                      onClick={() => setSelectedArchitecture(project)}
                      className={`flex items-center justify-center gap-2 px-4 py-2.5 border-2 rounded-lg font-medium transition-all duration-300 ${isDark ? 'border-blue-600 text-blue-400 hover:bg-blue-600/10' : 'border-blue-600 text-blue-600 hover:bg-blue-50'}`}
                    >
                      <Brain className="w-4 h-4" />
                      View Architecture
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Modal - Diagram List */}
      {selectedArchitecture && !selectedDiagram && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80" onClick={() => setSelectedArchitecture(null)}>
          <div className={`relative max-w-2xl w-full rounded-xl ${isDark ? 'bg-gray-900' : 'bg-white'}`} onClick={(e) => e.stopPropagation()}>
            <div className={`flex justify-between items-center p-4 border-b ${isDark ? 'border-red-900/50' : 'border-red-200'}`}>
              <h3 className="text-xl font-bold">{selectedArchitecture.title} - Architecture</h3>
              <button onClick={() => setSelectedArchitecture(null)} className={`p-2 rounded-lg transition-colors ${isDark ? 'hover:bg-red-900/30' : 'hover:bg-red-100'}`}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6">
              <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Click on the diagram you want to view:
              </p>
              <div className="space-y-3">
                {selectedArchitecture.architectureDiagrams.map((diagram, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedDiagram(diagram)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ${isDark ? 'border-red-900/50 hover:border-red-500 bg-gray-800 hover:bg-gray-700' : 'border-red-200 hover:border-red-400 bg-white hover:bg-red-50'}`}
                  >
                    <div className="flex items-center gap-3">
                      <Brain className={`w-5 h-5 ${isDark ? 'text-red-400' : 'text-red-600'}`} />
                      <span className="font-medium">{diagram.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Architecture Modal - Single Diagram View */}
      {selectedDiagram && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80" onClick={() => setSelectedDiagram(null)}>
          <div className={`relative max-w-6xl w-full max-h-[90vh] overflow-y-auto rounded-xl ${isDark ? 'bg-gray-900' : 'bg-white'}`} onClick={(e) => e.stopPropagation()}>
            <div className={`sticky top-0 z-10 flex justify-between items-center p-4 border-b ${isDark ? 'bg-gray-900 border-red-900/50' : 'bg-white border-red-200'}`}>
              <h3 className="text-xl font-bold">{selectedDiagram.name}</h3>
              <button onClick={() => setSelectedDiagram(null)} className={`p-2 rounded-lg transition-colors ${isDark ? 'hover:bg-red-900/30' : 'hover:bg-red-100'}`}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6">
              <img src={selectedDiagram.path} alt={selectedDiagram.name} className="w-full rounded-lg" />
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className={`py-8 sm:py-12 px-4 sm:px-6 border-t ${isDark ? 'border-red-900/50' : 'border-red-200'}`}>
        <div className="max-w-5xl mx-auto text-center">
          <p className={`mb-2 text-sm sm:text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2024 Roshan Kumar Kola. All rights reserved.
          </p>
          <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            🕷️ Architecting Intelligent Agentic AI Systems 🕸️
          </p>
        </div>
      </footer>
    </div>
  );
}