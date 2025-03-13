import React from "react";
import { FaBrain, FaClock, FaSmile, FaHandshake, FaUsers, FaBook, FaHandsHelping, FaLightbulb } from "react-icons/fa";

const skills = [
  { name: "Responsable", icon: FaClock },
  { name: "Inteligente", icon: FaBrain },
  { name: "Puntual", icon: FaClock },
  { name: "Amable", icon: FaSmile },
  { name: "Tranquilo", icon: FaUsers },
  { name: "Aprendo rápido", icon: FaBook },
  { name: "Buen ambiente", icon: FaHandshake },
  { name: "Respetuoso", icon: FaHandsHelping },
  { name: "Creativo", icon: FaLightbulb },
  { name: "Empático", icon: FaUsers },
];

 export const SocialCard = () => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg w-80 mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">Habilidades Sociales</h2>
      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center space-x-2">
            <skill.icon className="text-green-400 text-2xl" />
            <span className="text-lg">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

