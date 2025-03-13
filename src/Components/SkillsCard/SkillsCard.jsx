import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaGithub, FaGit } from "react-icons/fa";
import { SiPython, SiMongodb, SiMysql } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";


const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: FaHtml5, description: "Lenguaje de marcado para la web." },
      { name: "CSS", icon: FaCss3Alt, description: "Hojas de estilo para diseño web." },
      { name: "JavaScript", icon: FaJs, description: "Lenguaje de programación dinámico." },
      { name: "React", icon: FaReact, description: "Librería para interfaces de usuario." },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Java", icon: FaJava, description: "Lenguaje de programación versátil." },
      { name: "C#", icon: TbBrandCSharp, description: "Lenguaje para desarrollo en .NET." },
      { name: "Python", icon: SiPython, description: "Lenguaje multipropósito y de IA." },
    ],
  },
  {
    category: "Control de Versiones",
    items: [
      { name: "Git", icon: FaGit, description: "Sistema de control de versiones distribuido." },
      { name: "GitHub", icon: FaGithub, description: "Plataforma para alojamiento de código." },
    ],
  },
  {
    category: "Bases de Datos",
    items: [
      { name: "SQL", icon: SiMysql, description: "Lenguaje para bases de datos relacionales." },
      { name: "MongoDB", icon: SiMongodb, description: "Base de datos NoSQL orientada a documentos." },
    ],
  },
];

export const SkillsCard = () => {
  return (
    <div className="max-w-3xl mx-auto bg-gray-900 text-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Habilidades Técnicas</h2>
      {skills.map((section, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold text-green-400 mb-2">{section.category}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {section.items.map((skill, idx) => (
              <div key={idx} className="flex items-center space-x-2 p-2 border border-green-500 rounded-lg">
                <skill.icon className="w-6 h-6 text-green-400" />
                <div>
                  <p className="font-medium">{skill.name}</p>
                  <p className="text-xs text-gray-400">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

