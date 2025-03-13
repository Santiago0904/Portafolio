import React from "react";

const projects = [
  { name: "Traductor", img: "src/assets/img/traductor.png", link: "https://santiago0904.github.io/Dictionary/" },
  { name: "Reproductor de Música", img: "src/assets/img/reproductor.jpg", link: "https://santiago0904.github.io/Audio-player/" },
  { name: "Juego de Palabras", img: "src/assets/img/juego.png", link: "https://juegopalabras.github.io/JuegoPalabrasRandom/" },
  { name: "Librería", img: "src/assets/img/libro.jpg", link: "https://github.com/Sena-Library/Sena-Library" },
];

export const ExperienceCard = () => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg w-96 mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">💼 Experiencia Profesional</h2>
      <p className="text-gray-400 text-sm text-center mb-4">
        Actualmente soy aprendiz y mi experiencia se basa en proyectos desarrollados durante mi etapa lectiva.
      </p>
      <div className="grid grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="text-center">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.img}
                alt={project.name}
                className="w-20 h-20 object-cover rounded-lg mx-auto hover:scale-105 transition-transform"
              />
            </a>
            <p className="text-sm mt-2">{project.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
