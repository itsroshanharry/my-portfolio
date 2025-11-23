import React, { useState } from 'react';
import { Github, Youtube, Linkedin, Mail, ExternalLink, Code2, Brain, Briefcase, Sparkles } from 'lucide-react';

export default function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const skills = [
    { category: "Agentic Frameworks", items: ["LangChain", "CrewAI", "AutoGen", "LlamaIndex", "Semantic Kernel"] },
    { category: "LLMs & APIs", items: ["OpenAI GPT-4", "Claude", "Gemini", "Anthropic API", "Azure OpenAI"] },
    { category: "ML/AI Tools", items: ["HuggingFace", "PyTorch", "TensorFlow", "LangSmith", "Weights & Biases"] },
    { category: "Backend & Cloud", items: ["Python", "FastAPI", "Docker", "AWS", "Azure", "GCP"] },
    { category: "Vector DBs", items: ["Pinecone", "Weaviate", "Chroma", "FAISS", "Qdrant"] },
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Streamlit"] }
  ];

  const experience = [
    {
      role: "Senior AI Engineer",
      company: "Company Name",
      period: "2023 - Present",
      description: "Leading development of multi-agent systems and RAG pipelines. Architected autonomous workflow solutions processing 100K+ daily operations."
    },
    {
      role: "AI/ML Engineer",
      company: "Previous Company",
      period: "2021 - 2023",
      description: "Built production-ready agentic systems using LangChain and CrewAI. Developed custom LLM integrations and prompt engineering frameworks."
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Multi-Agent Orchestration System",
      description: "Architected an advanced agentic framework coordinating multiple AI agents with dynamic task allocation, inter-agent communication protocols, and autonomous decision-making capabilities.",
      tags: ["LangChain", "Python", "RAG", "OpenAI"],
      github: "https://github.com/yourusername/project1",
      youtube: "https://youtube.com/watch?v=demo1"
    },
    {
      id: 2,
      title: "Autonomous Code Review Agent",
      description: "Developed an intelligent agent that autonomously reviews pull requests, suggests improvements, identifies potential bugs, and ensures code quality standards using advanced LLM reasoning.",
      tags: ["CrewAI", "FastAPI", "GPT-4", "Git"],
      github: "https://github.com/yourusername/project2",
      youtube: "https://youtube.com/watch?v=demo2"
    },
    {
      id: 3,
      title: "Enterprise RAG Knowledge Assistant",
      description: "Created a sophisticated retrieval-augmented generation system with custom embeddings, semantic search, and context-aware responses for enterprise knowledge management.",
      tags: ["LlamaIndex", "Pinecone", "Azure", "Docker"],
      github: "https://github.com/yourusername/project3",
      youtube: "https://youtube.com/watch?v=demo3"
    },
    {
      id: 4,
      title: "Agentic Workflow Automation Platform",
      description: "Engineered an AI agent system that automates complex business workflows with decision-making capabilities, error recovery, and real-time adaptation to changing conditions.",
      tags: ["AutoGen", "MongoDB", "React", "AWS"],
      github: "https://github.com/yourusername/project4",
      youtube: "https://youtube.com/watch?v=demo4"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">Roshan Kumar Kola</div>
          <div className="flex gap-6 items-center">
            <a href="#about" className="text-sm hover:text-blue-600 transition-colors">About</a>
            <a href="#skills" className="text-sm hover:text-blue-600 transition-colors">Skills</a>
            <a href="#experience" className="text-sm hover:text-blue-600 transition-colors">Experience</a>
            <a href="#projects" className="text-sm hover:text-blue-600 transition-colors">Projects</a>
            <div className="flex gap-3 ml-4 border-l border-gray-300 pl-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
                 className="hover:text-blue-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/roshankumarkola" target="_blank" rel="noopener noreferrer"
                 className="hover:text-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:roshan@example.com" className="hover:text-blue-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero / About Section */}
      <section id="about" className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1 h-12 bg-blue-600"></div>
            <span className="text-blue-600 font-medium">AI Engineer</span>
          </div>
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-blue-600">Roshan Kumar Kola</span>
          </h1>
          <p className="text-2xl text-gray-600 mb-8 max-w-3xl leading-relaxed">
            I architect and develop cutting-edge agentic AI systems that solve complex problems. 
            Specialized in building autonomous agents, multi-agent orchestration, and production-ready LLM applications.
          </p>
          <p className="text-lg text-gray-700 mb-10 max-w-3xl leading-relaxed">
            With deep expertise in frameworks like LangChain, CrewAI, AutoGen, and LlamaIndex, I transform innovative 
            AI concepts into scalable, real-world solutions. My work spans retrieval-augmented generation systems, 
            autonomous workflow automation, and intelligent agent architectures that push the boundaries of what's possible.
          </p>
          <div className="flex gap-4">
            <a href="#projects" className="px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-lg font-medium transition-colors">
              View My Work
            </a>
            <a href="mailto:roshan@example.com" className="px-6 py-3 border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 rounded-lg font-medium transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Sparkles className="w-7 h-7 text-blue-600" />
            <h2 className="text-4xl font-bold">Skills & Technologies</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-400 transition-colors">
                <h3 className="text-lg font-bold mb-4 text-blue-600">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
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
      <section id="experience" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="w-7 h-7 text-blue-600" />
            <h2 className="text-4xl font-bold">Experience</h2>
          </div>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="border-l-2 border-blue-600 pl-6 pb-8">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                    <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-gray-600 font-medium">{exp.period}</span>
                </div>
                <p className="text-gray-700 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Code2 className="w-7 h-7 text-blue-600" />
            <h2 className="text-4xl font-bold">Featured Projects</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition-all duration-300"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 text-white hover:bg-gray-800 rounded-lg font-medium transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href={project.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-red-600 text-white hover:bg-red-700 rounded-lg font-medium transition-colors"
                  >
                    <Youtube className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-600 mb-2">© 2024 Roshan Kumar Kola. All rights reserved.</p>
          <p className="text-sm text-gray-500">Architecting Intelligent Agentic AI Systems</p>
        </div>
      </footer>
    </div>
  );
}