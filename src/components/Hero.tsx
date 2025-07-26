import { ChevronDown } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gardient-to-br from-slate-50 via-blue-50 to-slate-100 relative overflow-hidden">
      <div className="absolute inset-o">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-oulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-400-10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl ma-autp px-6">
        <img
          src="/src/assets/profile.png"
          alt="Profile"
          className="w-60 h-60 mx-auto rounded-full border-4 border-white shadow-xl object-cover mb-6 hover:scale-105 transition-transform duration-300"
        />

        <h1 className="text-5xl md:text-7xl font-light text-slate-800 mb-2 leading-tight">
          Hello, I'm{" "}
          <span className="bg-gradient-to-r from-blue-600 to-slate-600 bg-clip-text text-transparent font-medium">
            Kim
          </span>
        </h1>

        <p className="text-xs md:text-xl mb-8">
          My name is Nuttagun Samanajai
          <br />
          I'm 4 year Computer Engineering Student From Suranaree University
          <br />I want to be Full Stack Developer.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center item-center">
          <a
            href="#about"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hoer:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Learn More
          </a>

          <a
            href="#contact"
            className="px-8 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-all duration-300 transform hover:scale-105 font-medium"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <div>
        <ChevronDown className="text-slate-600 mt-3" size={32}/>
      </div>
    </section>
  );
};
export default Hero;
