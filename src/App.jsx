import React, { useState } from "react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Resume link and download name
  const resumeLink =
    "https://drive.google.com/file/d/1wqFirFHMKcElMfkqnH1nznk584TzA15b/view?usp=sharing";
  const resumeDownloadName = "Nikhil-Tayde-Resume.pdf";

  // Projects data
  const projects = [
    {
      title: "edXacademy",
      description:
        "Full-featured course management system with authentication, instructor CRUD, student enrollment, and filtering.",
      tech: [
        "React.js",
        "Tailwind CSS",
        "JavaScript",
        "Framer Motion",
        "Context API",
      ],
      github: "https://github.com/NikhilT97/edXacademy",
      deployed: "https://edxacademy.netlify.app/",
    },
    {
      title: "Modesense",
      description:
        "Responsive front-end shop for fashion, beauty, and lifestyle.",
      tech: [
        "JavaScript",
        "HTML",
        "CSS",
        "Firebase",
        "Axios",
        "Cloudflare Icons",
      ],
      github: "https://github.com/NikhilT97/B43_WEB_001_Code-Crafters",
      deployed: "https://majestic-dasik-4f5d39.netlify.app/",
    },
    {
      title: "MoviesPlex App",
      description: "Movie app with search, filter, sort, and responsive UI.",
      tech: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/NikhilT97/MoviesPlex",
      deployed: "https://moviesplex2.netlify.app/",
    },
    {
      title: "EasyMeds",
      description:
        "Track matches, favorite teams, advanced filtering, and statistics dashboard.",
      tech: [
        "React 18",
        "TypeScript",
        "Tailwind CSS",
        "React Router",
        "React Hook Form",
        "Lucide React",
        "Vite",
      ],
      github: "https://github.com/NikhilT97/B44_PharmaCo",
      deployed: "https://incomparable-bunny-8aed28.netlify.app/",
    },
  ];

  const techStack = [
    "HTML5",
    "CSS3",
    "Tailwind",
    "JavaScript",
    "React.js",
    "Node.js",
    "MongoDB",
    "Express.js",
    "TypeScript",
    "REST API",
    "GitHub",
    "NPM",
    "Postman",
    "Chakra UI",
    "Firebase",
    "Vercel",
    "Render",
  ];

  return (
    <div className="bg-gray-900 text-gray-200 font-sans leading-relaxed scroll-smooth">
      {/* Favicon in a real app would be a file, but for a single file, it's a link */}
      <link
        rel="icon"
        href="https://raw.githubusercontent.com/NikhilT97/NikhilT97/main/assets/favicon.png"
      />

      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-gray-900 shadow-lg border-b border-gray-700">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#home" className="text-xl font-bold text-teal-400">
            Nikhil Tayde
          </a>
          <div className="hidden md:flex space-x-6 items-center">
            {[
              "Home",
              "About Me",
              "Skills",
              "Projects",
              "Tech Stack",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                className="hover:text-teal-400 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-500 hover:bg-teal-600 text-gray-900 px-4 py-2 rounded-lg font-medium transition-colors duration-300"
            >
              Resume
            </a>
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-200 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="flex flex-col items-center py-4 space-y-4">
              {[
                "Home",
                "About Me",
                "Skills",
                "Projects",
                "Tech Stack",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-center py-2 hover:bg-gray-700 transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="w-full text-center py-2 bg-teal-500 text-gray-900 hover:bg-teal-600 rounded-lg font-medium transition-colors duration-300"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Sections */}
      <main>
        {/* Home & About Me Section */}
        <section
          id="about-me"
          className="py-20 px-4 md:px-10 min-h-screen flex items-center bg-gray-800"
        >
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-extrabold text-teal-400 leading-tight">
                Nikhil Tayde
              </h1>
              <p className="mt-4 text-xl md:text-2xl text-gray-300 max-w-xl">
                I’m a MERN Stack Developer passionate about building scalable
                web apps with clean code and modern UI/UX. I enjoy solving
                problems and exploring new technologies.
              </p>
              <div className="mt-8 flex justify-center md:justify-start space-x-4">
                <a
                  href={resumeLink}
                  download={resumeDownloadName}
                  className="bg-teal-500 hover:bg-teal-600 text-gray-900 px-6 py-3 rounded-lg font-bold shadow-lg transition-transform transform hover:scale-105"
                >
                  Download Resume
                </a>
                <a
                  href={resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 text-gray-200 px-6 py-3 rounded-lg font-bold shadow-lg transition-transform transform hover:scale-105"
                >
                  View Resume
                </a>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                src="https://placehold.co/400x400/222/FFF?text=Nikhil"
                alt="Nikhil Tayde"
                className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-gray-700 shadow-xl transition-transform transform hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 md:px-10 bg-gray-900">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">
              Skills
            </h2>
            <p className="text-center max-w-3xl mx-auto text-lg text-gray-300">
              My technical expertise includes a wide range of web development
              technologies, focusing on creating robust and scalable full-stack
              applications.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 md:px-10 bg-gray-800">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-700 flex flex-col transition-transform transform hover:scale-105"
                >
                  <img
                    src="https://placehold.co/600x400/333/FFF?text=Project+Cover"
                    alt={project.title}
                    className="rounded-lg mb-4 w-full h-48 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-teal-400">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-gray-400 flex-grow">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 text-sm">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 hover:bg-gray-600 text-gray-200 px-4 py-2 rounded-lg font-medium transition-colors duration-300 flex-1 text-center"
                    >
                      GitHub Repo
                    </a>
                    <a
                      href={project.deployed}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-teal-500 hover:bg-teal-600 text-gray-900 px-4 py-2 rounded-lg font-medium transition-colors duration-300 flex-1 text-center"
                    >
                      Deployed Link
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GitHub Stats Section */}
        <section id="github-stats" className="py-20 px-4 md:px-10 bg-gray-900">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">
              GitHub Stats
            </h2>
            <div className="flex flex-col items-center space-y-8">
              <img
                src="https://github-readme-stats.vercel.app/api?username=NikhilT97&show_icons=true&theme=dark"
                alt="GitHub Stats"
                className="w-full max-w-2xl rounded-lg shadow-xl"
              />
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=NikhilT97&theme=dark"
                alt="GitHub Streak"
                className="w-full max-w-2xl rounded-lg shadow-xl"
              />
              <img
                src="https://ghchart.rshah.org/NikhilT97"
                alt="GitHub Calendar"
                className="w-full max-w-2xl rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech-stack" className="py-20 px-4 md:px-10 bg-gray-800">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">
              Tech Stack & Tools
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2 p-4 bg-gray-900 rounded-lg shadow-md transition-transform transform hover:scale-110"
                >
                  <div className="h-12 w-12 bg-gray-700 rounded-full flex items-center justify-center text-xl text-teal-400">
                    <span role="img" aria-label={tech}>
                      🛠️
                    </span>
                  </div>
                  <span className="text-sm font-medium text-center">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 md:px-10 bg-gray-900">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-teal-400 mb-6">Contact</h2>
            <p className="text-lg max-w-3xl mx-auto mb-8 text-gray-300">
              I’m open to work and freelance opportunities. Let’s connect!
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <a
                href="https://www.linkedin.com/in/nikhiltayde97/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-xl hover:text-teal-400 transition-colors duration-300"
              >
                <i className="fab fa-linkedin"></i>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/NikhilT97"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-xl hover:text-teal-400 transition-colors duration-300"
              >
                <i className="fab fa-github"></i>
                <span>GitHub</span>
              </a>
              <a
                href="mailto:nikhiltayde97@gmail.com"
                className="flex items-center space-x-2 text-xl hover:text-teal-400 transition-colors duration-300"
              >
                <i className="fas fa-envelope"></i>
                <span>Email</span>
              </a>
              <a
                href="tel:+918421899526"
                className="flex items-center space-x-2 text-xl hover:text-teal-400 transition-colors duration-300"
              >
                <i className="fas fa-phone"></i>
                <span>Phone</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-center py-6 border-t border-gray-700">
        <p className="text-sm text-gray-400">
          Designed and built with ❤️ by Nikhil Tayde
        </p>
      </footer>
    </div>
  );
};

export default App;
