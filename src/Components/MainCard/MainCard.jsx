import React from 'react'
import { EmailBtn } from '../EmailBtn/EmailBtn';
import { FaGithub, FaLinkedin, FaFacebookF, FaInstagram  } from "react-icons/fa";
import { BtnLogo } from '../BtnLogo/BtnLogo';

export const MainCard = ({ image, name, title, location, about }) => {
    return (
      <div className="bg-gray-900 text-white p-6 rounded-xl shadow-md w-150 mx-auto h-110 mt-40 mb-20">
        {/* Encabezado */}
        <div className="flex items-center gap-10">
          <img
            src={image}
            alt={name}
            className="h-36 w-36 rounded-full border-2 border-green-500"
          />
          <div>
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-green-400 font-semibold">{title}</p>
            <p className="text-gray-400 text-sm">🟢 {location}</p>
          </div>
        </div>
  
        <div className='mt-5 flex gap-2'>
        <EmailBtn/>
        <BtnLogo Icon={FaGithub} link="https://github.com/Santiago0904"/>
        </div>
  
        {/* Sobre mí */}
        <div className="mt-6">
          <h3 className="text-lg font-bold">Sobre mí</h3>
          <p className="text-gray-300 text-sm mt-2">{about}</p>
        </div>
      </div>
    );
  };
  
  

