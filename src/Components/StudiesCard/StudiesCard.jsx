import React from "react";
import { FaSchool, FaUniversity, FaLaptopCode, FaBookReader } from "react-icons/fa";

const studies = [
  { title: "Técnico en Desarrollo de Software", institution: "SENA", years: "2022-2023", icon: FaLaptopCode },
  { title: "Bachiller", institution: "Marcelino Champagnat", years: "2021-2023", icon: FaSchool },
  { title: "Nivel Teens en Inglés", institution: "Colombo Americano", years: "2019-2021", icon: FaBookReader },
  { title: "Nivel Adults en Inglés", institution: "Colombo Americano", years: "2021-2023", icon: FaBookReader },
  { title: "En curso: Tecnólogo en Análisis y Desarrollo de Software", institution: "SENA", years: "2024-2025", icon: FaUniversity },
];

export const StudiesCard = () => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg w-96 mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">📚 Estudios</h2>
      <ul className="space-y-4">
        {studies.map((study, index) => (
          <li key={index} className="flex items-center space-x-3">
            <study.icon className="text-green-400 text-3xl" />
            <div>
              <p className="text-lg font-semibold">{study.title}</p>
              <p className="text-sm text-gray-400">{study.institution} - {study.years}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

