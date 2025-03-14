import React from 'react';
import { EmailBtn } from '../EmailBtn/EmailBtn';
import { FaGithub } from "react-icons/fa";
import { BtnLogo } from '../BtnLogo/BtnLogo';

export const MainCard = ({ image, name, title, location, about }) => {
    return (
      <div className="bg-gray-900 text-white p-6 rounded-xl shadow-md w-full max-w-lg mx-auto h-auto mt-20 mb-10">
        {/* Encabezado */}
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
          <img
            src={image}
            alt={name}
            className="h-28 w-28 sm:h-36 sm:w-36 rounded-full border-2 border-green-500"
          />
          <div className="text-center sm:text-left">
            <h2 className="text-lg sm:text-xl font-bold">{name}</h2>
            <p className="text-green-400 font-semibold">{title}</p>
            <p className="text-gray-400 text-sm">🟢 {location}</p>
          </div>
        </div>

        {/* Botones */}
        <div className='mt-5 flex flex-wrap justify-center sm:justify-start gap-2'>
          <EmailBtn />
          <BtnLogo Icon={FaGithub} link="https://github.com/Santiago0904" />
        </div>

        {/* Sobre mí */}
        <div className="mt-6">
          <h3 className="text-lg font-bold">Sobre mí</h3>
          <p className="text-gray-300 text-sm mt-2 text-center sm:text-left">{about}</p>
        </div>
      </div>
    );
};
