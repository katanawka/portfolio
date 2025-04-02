export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#63c5da] to-[#3d95d1] bg-clip-text text-transparent leading-right">
          Coded BY. Katanawka
        </h1>

        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          Katanawka — a developer focused on creating intuitive apps and
          websites. Mobile and web solutions with a user-friendly interface.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-gradient-to-r from-[#63c5da] to-[#3d95d1] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 
                       hover:shadow-[0_0_15px_rgba(0, 98, 255, 0.52)]"
          >
            View Projects
          </a>

          <a
            href="#projects"
            className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
                       hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(0, 98, 255, 0.52)] hover:bg-blue-500/10"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};
