"use client";

import { useState, useEffect } from "react";
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Database,
  Brain,
  Settings,
  Award,
  Briefcase,
  User,
  Home,
  FolderOpen,
  Phone,
} from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [typedText, setTypedText] = useState("");
  const fullText = "Hi, I'm Jai Agash — Data Analytics Enthusiast";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "projects",
        "experience",
        "skills",
        "certifications",
        "achievements",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projects = [
    {
      title: "Bank Account Management System",
      description:
        "A comprehensive banking system built with Python using Object-Oriented Programming principles. Features account creation, transaction management, and balance tracking.",
      technologies: ["Python", "OOP", "File Handling"],
      github: "https://github.com/JaiAgash08",
    },
    {
      title: "Email Spam Detection",
      description:
        "Machine learning model to classify emails as spam or legitimate using natural language processing and classification algorithms.",
      technologies: ["Python", "scikit-learn", "Machine Learning", "NLP"],
      github: "https://github.com/JaiAgash08",
    },
    {
      title: "Travel Companion Application",
      description:
        "Full-stack web application for travel planning and management with user authentication, trip planning, and destination recommendations.",
      technologies: ["Node.js", "MongoDB", "JavaScript", "Express"],
      github: "https://github.com/JaiAgash08",
    },
  ];

  const skills = {
    Programming: ["C", "Python", "Java"],
    "Web Development": [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
    ],
    Databases: ["MongoDB", "MySQL"],
    "Machine Learning": [
      "Pandas",
      "NumPy",
      "scikit-learn",
      "TensorFlow",
      "Keras",
      "PyTorch",
    ],
    Tools: ["Git", "GitHub", "Docker"],
  };

  const certifications = [
    "Microsoft Azure AI Fundamentals",
    "Microsoft Azure Data Fundamentals",
    "Google AI Essentials",
    "Google Data Analytics",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-blue-600">Jai Agash S</div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: "home", label: "Home", icon: Home },
                { id: "about", label: "About", icon: User },
                { id: "projects", label: "Projects", icon: FolderOpen },
                { id: "experience", label: "Experience", icon: Briefcase },
                { id: "skills", label: "Skills", icon: Code },
                { id: "contact", label: "Contact", icon: Phone },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === id
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white pt-16"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              {typedText}
              <span className="animate-pulse">|</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-6">
              Data Analytics & Full-Stack Developer
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              4th-year Computer Science Engineering student passionate about
              transforming data into insights and building innovative web
              solutions.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-64 h-64 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
                <User size={80} className="text-gray-400" />
                <span className="absolute mt-20 text-sm text-gray-500">
                  Profile Photo
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Education & Background
              </h3>
              <p className="text-gray-600 mb-6">
                Currently pursuing my Bachelor's degree in Computer Science and
                Engineering, specializing in Data Analytics. I'm passionate
                about leveraging technology to solve real-world problems through
                data-driven insights and innovative web applications.
              </p>
              <p className="text-gray-600 mb-6">
                My journey in technology spans across multiple domains including
                machine learning, full-stack web development, and database
                management. I enjoy working on projects that challenge me to
                learn new technologies and apply theoretical knowledge to
                practical solutions.
              </p>
              <p className="text-gray-600">
                When I'm not coding, I'm exploring the latest trends in AI and
                data science, participating in hackathons, and contributing to
                open-source projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 hover:transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  <Github size={16} className="mr-2" />
                  View on GitHub
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Experience
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 rounded-full p-3">
                  <Briefcase size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Cisco AICTE Virtual Internship Program
                  </h3>
                  <p className="text-blue-600 font-medium mb-4">2024</p>
                  <p className="text-gray-700 mb-4">
                    Participated in a comprehensive virtual internship program
                    focusing on cutting-edge technologies and industry best
                    practices.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">
                      Key Learning Areas:
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Network fundamentals and cybersecurity principles</li>
                      <li>Cloud computing and virtualization technologies</li>
                      <li>IoT and emerging technology trends</li>
                      <li>Industry-standard development practices</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => {
              const icons = {
                Programming: Code,
                "Web Development": Code,
                Databases: Database,
                "Machine Learning": Brain,
                Tools: Settings,
              };
              const Icon = icons[category] || Code;

              return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                      <Icon size={24} className="text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {category}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {skillList.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="bg-gray-50 rounded-lg px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 flex items-center space-x-4"
              >
                <div className="bg-blue-600 rounded-full p-3">
                  <Award size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {cert}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Achievements
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center space-x-4">
                <div className="bg-yellow-100 rounded-full p-4">
                  <Award size={32} className="text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    ICT Academy Learnathon 2024
                  </h3>
                  <p className="text-gray-600">
                    Participated in the prestigious ICT Academy Learnathon 2024,
                    demonstrating commitment to continuous learning and skill
                    development in emerging technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Get In Touch
          </h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-8">
              I'm always open to discussing new opportunities, collaborations,
              or just having a chat about technology!
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="mailto:jaiagash@karunya.edu.in"
                className="bg-blue-50 hover:bg-blue-100 rounded-lg p-6 transition-colors group"
              >
                <Mail
                  size={32}
                  className="text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform"
                />
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 text-sm">jaiagash@karunya.edu.in</p>
              </a>
              <a
                href="https://github.com/JaiAgash08"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-50 hover:bg-gray-100 rounded-lg p-6 transition-colors group"
              >
                <Github
                  size={32}
                  className="text-gray-700 mx-auto mb-4 group-hover:scale-110 transition-transform"
                />
                <h3 className="font-semibold text-gray-900 mb-2">GitHub</h3>
                <p className="text-gray-600 text-sm">github.com/JaiAgash08</p>
              </a>
              <a
                href="https://linkedin.com/in/jai-agash-586a08249"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-50 hover:bg-blue-100 rounded-lg p-6 transition-colors group"
              >
                <Linkedin
                  size={32}
                  className="text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform"
                />
                <h3 className="font-semibold text-gray-900 mb-2">LinkedIn</h3>
                <p className="text-gray-600 text-sm">jai-agash-586a08249</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Jai Agash S. Built with passion and React.
          </p>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
