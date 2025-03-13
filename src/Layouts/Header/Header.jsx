import React, { useState} from 'react'
import { ItemNavBar } from '../../Components/ItemNavBar/ItemNavBar'
import { NavBar } from '../NavBar/NavBar'
import { Title } from '../../Components/Title/Title'

export const Header = () => {
    
    const [isOpen, setIsOpen] = useState(false);

  return (


    <header className=" top-0 left-0 z-50 flex w-full h-[5rem] bg-[#7F7F7F] items-center justify-between px-10 py-4 text-white shadow-md sticky">

    <img src='src/assets/img/logo.png' alt="" className="h-12 w-auto rounded-full border-2 border-white"/>
    
    <Title content="PORTAFOLIO" styles="text-3xl sm:text-2xl md:text-xl font-bold tracking-wide text-white text-center break-words"/>
        
    <button className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)} aria-label="Abrir menú">
          ☰
      </button>
      
      <NavBar>

              <ul className={'flex items-center space-x-8 md:flex max-md:flex-col max-md:space-x-0 max-md:space-y-4 max-md:absolute max-md:top-[4.1rem] max-md:left-0 max-md:bg-blue-950 max-md:w-full max-md:py-4 max-md:shadow-lg max-md:transition-all max-md:duration-300 ${isOpen ? "max-md:flex" : "max-md:hidden"}'}>
                  <ItemNavBar route="/" content="Home" />
                  <ItemNavBar route="/Skills" content="Habilidades tecnicas" />
                  <ItemNavBar route="/SocialAbilities" content="Habilidades sociales" />
                  <ItemNavBar route="/Studies" content="Studios" />
                  <ItemNavBar route="/ProfesionalExperience" content="Experiencia Profesional" />
              </ul>

          </NavBar>
          
          </header> 

    
  )
}

