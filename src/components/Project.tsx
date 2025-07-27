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
  functions: string[];
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Health And Wellness Web Application (Private)",
      description:
        "A final-year undergraduate project (3 team members, Computer Engineering) – A health web application featuring an AI chatbot that provides real-time, 24/7 health guidance for the public and students.",
      image: health,
      techStack: [
        "React",
        "TypeScript",
        "Tailwindcss",
        "Css",
        "Mysql",
        "Golang",
        "Ollama",
      ],
      githubUrl:
        "https://github.com/project-health-and-wellness/health-and-wellness",
      category: "Web Application",
      date: "2025-Present",
      functions: [
        "Health Knowledge Hub - Provides reliable articles and videos, includes an approval workflow, tracks view counts, allows comments/likes/reporting, and lets users save favorites.",
        "Health Behavior Tracking & Motivation – Daily health logs (water intake, meals, exercise), gamified challenges and leaderboards with virtual rewards, and progress statistics",
        "24/7 Health Chatbot – Offers basic health advice (common diseases, first aid, nearby health services), suggests related content, and collects usage data for system improvement.",
      ],
    },
    {
      id: 2,
      title: "Zoo Web Application",
      description:
        "A group project for a Software Engineering course (6 members): A web-based zoo management system that handles ticket booking, vehicle rentals, animal care, staff management, and visitor interactions.",
      image: zoo,
      techStack: [
        "React",
        "TypeScript",
        "Tailwindcss",
        "Css",
        "Sqlite",
        "Golang",
      ],
      githubUrl: "https://github.com/Nuttagun/Zoo-Web-Application.git",
      category: "Web Application",
      date: "2024-2025",
      functions: [
        "Ticket booking and vehicle rental management",
        "Staff and user profile management",
        "Animal data, health records, and feeding schedule management",
        "Event and activity scheduling",
        "User reviews, comments, and rating system",
        "Admin-Zookeeper chat for internal communication",
        "Promotions and discount management",
        "Payment processing for tickets and merchandise",
      ],
    },
    {
      id: 3,
      title: "Novel (Lokniyai) Web Application",
      description:
        "A group project for the Software Architecture course (5 members): An online novel platform (NovelStore) for reading and selling novels, supporting both authors and readers.",
      image: lokniyai,
      techStack: ["React", "TypeScript", "Css", "Sqlite", "Golang"],
      githubUrl: "https://github.com/Nuttagun/SA-67-NOVEL",
      category: "Web Application",
      date: "2024-2025",
      functions: [
        "User registration and login",
        "Novel management and writing system for authors",
        "Novel browsing by category",
        "Shopping cart and mock payment system",
        "Coin top-up system for purchasing novels",
        "Commenting and like system for reader engagement",
      ],
    },
    {
  id: 4,
  title: "Flower Shop",
  description:
    "A simple and elegant static website for a flower shop, designed to showcase products with a clean layout and aesthetic visuals. Built using only HTML and CSS.",
  image: flowershop,
  techStack: ["HTML5", "CSS3"],
  demoUrl: "https://nuttagun.github.io/Flower-Shop/",
  githubUrl: "https://github.com/Nuttagun/Flower-Shop?tab=readme-ov-file",
  category: "Web Application",
  date: "2024",
  functions: [
    "Static homepage with clean design",
    "Product cards displaying different flower types",
    "Google Fonts integration for better typography",
    "Custom background images for enhanced visual appeal",
    "Responsive layout for various screen sizes"
  ]
}
,
    {
  "id": 5,
  "title": "MyShareNote Web Application",
  "description": "Save My Notes is a web application for note-taking, sharing feelings, and exchanging important information with friends. The system is designed with a Microservices architecture and managed using Docker, Jenkins, Prometheus, and Grafana.",
  "image": note,
  "techStack": [
    "React",
    "TypeScript",
    "Tailwindcss",
    "Css",
    "PostgreSQL",
    "Golang"
  ],
  "githubUrl": "https://github.com/Nuttagun/MyShareNote",
  "category": "Web Application",
  "date": "2025",
  "functions": [
    "User registration and authentication",
    "Create, edit, and manage personal notes",
    "Share notes with other users",
    "Notifications when notes are shared",
    "Like notes to show appreciation",
    "Automated deployment through Jenkins CI/CD"
  ]
}
,
    {
  "id": 6,
  "title": "Portfolio Web Application",
  "description": "A personal portfolio website to showcase projects, skills, certificates, and contact information with a modern and responsive design.",
  "image": port,
  "techStack": ["React", "TypeScript", "Tailwindcss", "CSS"],
  "demoUrl": "https://nuttagun.github.io/my-portfolio/",
  "githubUrl": "https://github.com/Nuttagun/my-portfolio",
  "category": "Web Application",
  "date": "2025",
  "functions": [
    "Showcase personal projects with descriptions and links",
    "Display technical skills with icons and progress indicators",
    "Present certificates and achievements",
    "Contact form for visitors to reach out",
    "Responsive design for desktop and mobile",
    "Smooth navigation and interactive UI components"
  ]
}

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
              Projects
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
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
            href="https://github.com/Nuttagun"
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
                      Key Function
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.functions.map((functions, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-slate-600">{functions}</span>
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
