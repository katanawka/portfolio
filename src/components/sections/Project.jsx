import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#63c5da] to-[#3d95d1] bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {[
              {
                title: "Metal App",
                description:
                  "Metal is an innovative social manager that combines the functions of a familiar messenger with unique opportunities for users.",
                link: "https://github.com/tup0g/Metal-App",
                techStack: ["Kotlin", "XML", "PostgreSQL"],
              },
              {
                title: "React Portfolio",
                description:
                  "A modern and responsive portfolio website built using React to showcase projects and skills.",
                link: "https://github.com/katanawka/portfolio",
                techStack: ["React", "TailwindCSS", "JavaScript"],
              },
              {
                title: "GitHelper",
                description:
                  "A handy tool for developers to quickly generate Git commands, learn best practices, and manage repositories with ease.",
                link: "https://githelper.netlify.app/",
                techStack: ["React", "TailwindCSS", "TypeScript"],
              },
            ].map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition block flex flex-col"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>
                <div>
                  {project.techStack.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all mx-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};