import React, { useState } from "react";
import { ExternalLink, Github, X, Calendar, Code } from "lucide-react";
import zoo from "./../assets/zoo.jpg";
import lokniyai from "./../assets/HLogo.png";
import health from "./../assets/health.png";
import flowershop from "./../assets/flowershop.png";
import note from "./../assets/note.png";
import port from "./../assets/portfolio.png";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  category: string;
  date: string;
  features: string[];
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Health And Wellness Web Application (Private)",
      description:
        "เว็บแอปสุขภาพที่มีแชทบอท AI ช่วยให้คำแนะนำด้านสุขภาพแบบเรียลไทม์ตลอด 24 ชม",
      image: health,
      techStack: ["React", "TypeScript", "Tailwindcss", "Css", "Mysql","Golang","Ollama"],
      githubUrl: "#",
      category: "Web Application",
      date: "2024",
       features: [
    "User authentication and authorization",
    "Product catalog with search and filtering",
    "Shopping cart and checkout process",
    "Payment integration with Stripe",
    "Admin dashboard for inventory management",
    "Responsive design for all devices"
  ]
    },
    {
      id: 2,
      title: "Zoo Web Application",
      description: "Collaborative task management with real-time updates",
      image: zoo,
      techStack: ["React", "TypeScript", "Tailwindcss", "Css", "Sqlite","Golang"],
      demoUrl: "",
      githubUrl: "https://github.com/Nuttagun/Zoo-Web-Application.git",
      category: "Web Application",
      date: "2023",
      features: [
        "Real-time collaboration between team members",
        "Drag-and-drop task organization",
        "File attachments and comments",
        "Progress tracking and analytics",
        "Offline functionality with PWA",
        "Push notifications for updates",
      ]
    },
    {
      id: 3,
      title: "Novel (Lokniyai) Web Application",
      description:
        "Business intelligence dashboard with machine learning insights",
      image: lokniyai,
      techStack: ["React", "TypeScript", "Css", "Sqlite","Golang"],
      demoUrl: "#",
      githubUrl: "#",
      category: "Web Application",
      date: "2023",
      features: [
        "Interactive data visualizations",
        "Predictive analytics using ML models",
        "Custom report generation",
        "Real-time data processing",
        "Multi-tenant architecture",
        "API integration with various data sources",
      ]
    },
    {
      id: 4,
      title: "Flower Shop ",
      description: "Modern social networking platform with advanced features",
      image: flowershop,
      techStack: ["Html", "Css"],
      demoUrl: "#",
      githubUrl: "#",
      category: "Web Application",
      date: "2024",
      features: [
        "User profiles and social connections",
        "Real-time messaging and notifications",
        "Content sharing with media support",
        "Advanced privacy controls",
        "Content moderation system",
        "Mobile-responsive design",
      ]
    },
    {
      id: 5,
      title: "MyShareNote Web Application",
      description: "Real-time crypto portfolio tracking and analysis",
      image: note,
      techStack: ["React", "TypeScript", "Tailwindcss", "Css", "Sqlite","Golang"],
      githubUrl: "https://github.com/Nuttagun/MyShareNote",
      category: "Web Application",
      date: "2023",
      features: [
        "Real-time price tracking for 1000+ cryptocurrencies",
        "Portfolio management and P&L tracking",
        "Price alerts and notifications",
        "Advanced charting and technical analysis",
        "News integration and market sentiment",
        "Secure wallet integration",
      ]
    },
    {
      id: 6,
      title: "Portfolio Web Application ",
      description:
        "Comprehensive online learning platform for educational institutions",
      image: port,
      techStack: ["Angular", "Spring Boot", "MySQL", "AWS S3", "WebRTC"],
      demoUrl: "#",
      githubUrl: "#",
      category: "Web Application",
      date: "2023",
      features: [
        "Course creation and management tools",
        "Video streaming and live classes",
        "Assignment submission and grading",
        "Discussion forums and collaboration",
        "Progress tracking and analytics",
        "Mobile app for students and teachers",
      ]
    },
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <section id="projects" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-800 mb-4">
              Featured Projects
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-6 max-w-2xl mx-auto">
              A showcase of my recent work and technical expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => openModal(project)}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden flex justify-center items-center bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-auto max-h-44 object-contain border-4 border-white rounded-lg shadow-md group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center text-slate-500 text-sm mb-3">
                    <Calendar size={16} className="mr-2" />
                    {project.date}
                  </div>

                  <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="px-2 py-1 bg-slate-200 text-slate-600 text-xs rounded-md font-medium">
                          +{project.techStack.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700 transition-colors">
                      <Code size={16} className="mr-1" />
                      View Details
                    </div>
                    <div className="flex space-x-2">
                      {project.demoUrl && (
                        <div className="p-2 bg-slate-100 rounded-lg hover:bg-blue-100 transition-colors">
                          <ExternalLink
                            size={16}
                            className="text-slate-600 hover:text-blue-600"
                          />
                        </div>
                      )}
                      {project.githubUrl && (
                        <div className="p-2 bg-slate-100 rounded-lg hover:bg-blue-100 transition-colors">
                          <Github
                            size={16}
                            className="text-slate-600 hover:text-blue-600"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <a
            href="https://github.com/YourGitHubUsername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          >
            <Github size={20} />
            More on GitHub
          </a>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
              >
                <X size={20} className="text-slate-600" />
              </button>
              <div className="absolute bottom-6 left-6 text-white">
                <span className="px-3 py-1 bg-blue-600 text-xs font-medium rounded-full mb-3 inline-block">
                  {selectedProject.category}
                </span>
                <h2 className="text-3xl font-bold mb-2">
                  {selectedProject.title}
                </h2>
                <p className="text-white/90">{selectedProject.date}</p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">
                      Project Overview
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-slate-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-2 bg-slate-100 text-slate-700 text-sm rounded-lg font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    {selectedProject.demoUrl && (
                      <a
                        href={selectedProject.demoUrl}
                        className="flex items-center justify-center w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={18} className="mr-2" />
                        Live Demo
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        className="flex items-center justify-center w-full px-4 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={18} className="mr-2" />
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
