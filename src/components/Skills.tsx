
import React from 'react';
import react from './../assets/react.png'
import javascript from './../assets/javascript.png'
import typescript from './../assets/typescript.png'
import html from './../assets/html.png'
import css from './../assets/css.png'
import tailwind from './../assets/tailwind.png'
import python from './../assets/python.png'
import go from './../assets/go.png'
import c from './../assets/c.png'
import java from './../assets/java.png'
import git from './../assets/git.png'
import api from './../assets/api.png'
import mysql from './../assets/mysql.png'
import postgresql from './../assets/postgresql.png'
import sqlite from './../assets/sqlite.png'
import figma from './../assets/figma.png'
import docker from './../assets/docker.png'
import postman from './../assets/postman.png'
import ollama from './../assets/ollama.png'
import jenkins from './../assets/jenkins.png'
import colab from './../assets/colab.png'


const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: javascript },
      { name: "TypeScript", icon: typescript },
      { name: "Python", icon: python },
      { name: "Java", icon: java },
      { name: "C", icon: c },
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: react},
      { name: "HTML", icon: html},
      { name: "CSS", icon: css },
      { name: "Tailwind CSS", icon: tailwind }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Golang", icon: go },
      { name: "RESTful APIs", icon: api }
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", icon: mysql },
      { name: "PostgreSQL", icon: postgresql },
      { name: "SQLite", icon: sqlite }
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "GitHub", icon: git },
      { name: "Figma", icon: figma },
      { name: "Postman", icon: postman },
      { name: "Jenkins", icon: jenkins },
      { name: "Ollama", icon: ollama },
      { name: "Colab", icon: colab },
      { name: "docker", icon: docker }
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-slate-800 mb-4">Skills & Technologies</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-6 max-w-2xl mx-auto">
            Technologies and skills I use to build great products
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="group flex flex-col items-center p-4 rounded-xl hover:bg-blue-50 transition-all duration-300 cursor-pointer transform hover:scale-105"
                    style={{ animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms` }}
                  >
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      <img src={skill.icon} className='w-15 h-15'/>
                    </div>
                    <span className="text-sm font-medium text-slate-700 text-center group-hover:text-blue-600 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
