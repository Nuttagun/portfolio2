import React from 'react';
import { Github, Linkedin, Heart, FacebookIcon } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/Nuttagun",
      label: "GitHub"
    },
    {
      icon: <Linkedin size={20} />,
      href: "www.linkedin.com/in/nuttagun-samanjai-8340842b8",
      label: "LinkedIn"
    },
    {
      icon: <FacebookIcon size={20} />,
      href: "https://www.facebook.com/nuttagun.samanjai/",
      label: "Twitter"
    }
  ];

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Portfolio</h3>
            <p className="text-slate-400">
              Building skills for co-op experience
            </p>
          </div>

          <div className="flex items-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg group"
              >
                <div className="text-slate-400 group-hover:text-white transition-colors">
                  {link.icon}
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <div className="flex items-center justify-center text-slate-400 text-sm">
            <span>Made with</span>
            <Heart className="mx-2 text-red-500" size={16} />
            <span>using React & TypeScript made by Nuttagun</span>
          </div>
          <p className="text-slate-500 mt-2">
            © 2025 Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;