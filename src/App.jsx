import { React } from 'react'
import { Header } from './Layouts/Header/Header'
import { Footer } from './Layouts/Footer/Footer'
import { Routes, Route} from 'react-router-dom' 
import { Home } from './Pages/Home/Home'
import { NotFound } from './Pages/NotFound/NotFound'
import { ProfesionalExperience } from './Pages/ProfesionalExperience/ProfesionalExperience'
import { Skills } from './Pages/Skills/Skills'
import { SocialAbilities } from './Pages/SocialAbilities/SocialAbilities'
import { Studies } from './Pages/Studies/Studies'


export const App = () =>{

  return(
    <>
    
    <Header/>

    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='*' element={<NotFound/>}/>
    <Route path='/ProfesionalExperience' element={<ProfesionalExperience/>}/>
    <Route path='/Skills' element={<Skills/>}/>
    <Route path='/SocialAbilities' element={<SocialAbilities/>}/>
    <Route path='/Studies' element={<Studies/>}/>
    </Routes>

    <Footer/>
    
    </>
  )

}

