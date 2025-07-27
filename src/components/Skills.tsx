import React from 'react';
import react from './../assets/icons/react.png'
import javascript from './../assets/icons/javascript.png'
import typescript from './../assets/icons/typescript.png'
import html from './../assets/icons/html.png'
import css from './../assets/icons/css.png'
import tailwind from './../assets/icons/tailwind.png'
import python from './../assets/icons/python.png'
import go from './../assets/icons/go.png'
import c from './../assets/icons/c.png'
import java from './../assets/icons/java.png'
import git from './../assets/icons/git.png'
import api from './../assets/icons/api.png'
import mysql from './../assets/icons/mysql.png'
import postgresql from './../assets/icons/postgresql.png'
import sqlite from './../assets/icons/sqlite.png'
import figma from './../assets/icons/figma.png'
import docker from './../assets/icons/docker.png'
import postman from './../assets/icons/postman.png'
import ollama from './../assets/icons/ollama.png'
import jenkins from './../assets/icons/jenkins.png'
import colab from './../assets/icons/colab.png'

const skillCategories = [
  {
    title: "Languages",
    color: "bg-red-500",
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
    color: "bg-blue-500",
    skills: [
      { name: "React", icon: react},
      { name: "HTML", icon: html},
      { name: "CSS", icon: css },
      { name: "Tailwind CSS", icon: tailwind }
    ]
  },
  {
    title: "Backend",
    color: "bg-green-500",
    skills: [
      { name: "Golang", icon: go },
      { name: "RESTful APIs", icon: api }
    ]
  },
  {
    title: "Database",
    color: "bg-purple-500",
    skills: [
      { name: "MySQL", icon: mysql },
      { name: "PostgreSQL", icon: postgresql },
      { name: "SQLite", icon: sqlite }
    ]
  },
  {
    title: "Tools",
    color: "bg-gray-600",
    skills: [
      { name: "GitHub", icon: git },
      { name: "Figma", icon: figma },
      { name: "Postman", icon: postman },
      { name: "Jenkins", icon: jenkins },
      { name: "Ollama", icon: ollama },
      { name: "Colab", icon: colab },
      { name: "Docker", icon: docker }
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

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="mb-8">
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`w-1 h-8 ${category.color} mr-4 rounded-full`}></div>
                <h3 className="text-2xl font-semibold text-slate-800">
                  {category.title}
                </h3>
              </div>
              
              {/* Skills Grid - Responsive */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 mb-8">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="group flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105 hover:-translate-y-1"
                    style={{ animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms` }}
                  >
                    <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                      <img src={skill.icon} className='w-12 h-12 object-contain'/>
                    </div>
                    <span className="text-xs font-medium text-slate-700 text-center group-hover:text-blue-600 transition-colors leading-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Divider line (except for last category) */}
              {categoryIndex < skillCategories.length - 1 && (
                <div className="border-b border-slate-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;