export const About = () => {
  const appSkills = ["Java", "Kotlin", "React Native", "Android Studio"];

  const webSkills = ["HTML", "CSS", "JavaScript", "React", "TailwindCSS"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#63c5da] to-[#3d95d1] bg-clip-text text-transparent text-center">
          {" "}
          About Me
        </h2>

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            Hi, I'm Katanawka, a passionate developer who thrives on creating
            intuitive and efficient digital experiences. With a background in
            Java, Kotlin, and React, I specialize in building scalable mobile
            apps and dynamic websites that not only look good but work
            seamlessly. <br />
            <br />
            My approach is always user-centered: I focus on delivering apps and
            websites that are simple to use, fast, and effective, without
            compromising on functionality or performance. I believe that great
            software should feel natural, providing users with an effortless and
            enjoyable experience. Whether you're looking for a powerful mobile
            app or a robust web platform, my goal is to craft solutions that fit
            your needs while keeping the experience smooth and intuitive. <br />
            <br />
            Throughout my career, I’ve had the privilege of working on a wide
            range of projects, from small startups to larger-scale systems.
            Every project presents a unique challenge, and I love finding
            creative ways to solve problems, optimize processes, and push the
            boundaries of what's possible with code.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> App Skills</h3>
              <div className="flex flex-wrap gap-2">
                {appSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                     hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Web Skills</h3>
              <div className="flex flex-wrap gap-2">
                {webSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                     hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> Education </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>National Technical University of Ukraine</strong> -
                “Igor Sikorsky Kyiv Polytechnic Institute” (2024-2025)
              </li>
              <li>
                Independently by courses
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> Work Experience </h3>
            <div className="space-y-4 text-gray-300">
                <div>
                    <h4 className="font-semibold"> Worked as a freelancer (2024-2025)</h4>
                    <p> 
                        Completed tasks for various clients to create Kotlin applications and create mods and plugins for Minecraft
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold"> Worked for a ceramics company (Still working)</h4>
                    <p> 
                        Created utility applications for the company
                    </p>
                </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
