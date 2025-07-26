import React from "react";
import { User, Code, Heart } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4l font-light text-slate-800 mb-4">About Me</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="spae-y-6">
            <div className="bg-gradient-to-br from-slate-100 to-blue-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 mb-5">
              <User className="text-blue-600 mb-4 " size={32} />
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                Who I Am
              </h3>
              <p>
                My name is Nuttagun Samanjai, but you can call me Kim.
                <br />
                I was born on September 17, 2003.
                <br />
                I am a fourth-year Computer Engineering student at Suranaree
                University of Technology.
                <br />
                My hobbies include coding👨🏻‍💻 , creating videos for TikTok, and
                exploring new technologies🤖.
                <br />
                My favorite food is krapao moo krob 🥗, and I enjoy watching
                science fiction movies 🔬, listening to music ♬⋆.˚, and relaxing in my
                free time⌛.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-100 to-blue-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <Code className="text-blue-600 mb-4" size={32} />
                <h3 className="text-xl font-semibold text-slate-800 mb-3">What I Do</h3>
                <p className="text-slate-600 leading-relaxed">
                I specialize in full-stack development with a focus on modern web technologies. 
                From concept to deployment, I create digital experiences that matter.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-12 rounded-3xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <Heart className="text-red-500 mb-6 mx-auto" size={48}/>
                <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">Passion & Purpose</h3>
                <p className="text-slate-600 leading-relaxed text-center mb-6">
              Technology is not just my profession—it's my passion. I'm driven by the endless 
              possibilities of what we can create when we combine creativity with code.
            </p>
            <div className="text-center">
                <span className="inline-block px-4 py-2 bg-white rounded-full text-sm text-slate-600 shadow-sm">Always learning, always growing

                </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
