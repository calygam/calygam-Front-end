import { useState } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header                  from "./components/Header/Header"
import InitialPage             from "./pages/InitialPage/InitialPage"
import FooterAssesment         from "./components/FooterAssessment/FooterAssesment"
import ComponentToggleContext  from "./context/ComponentToggleContext"
import LoginPage               from "./pages/LoginPage/LoginPage.jsx"
import RegisterPage            from "./pages/RegisterPage/RegisterPage.jsx"
import TrailPage               from "./pages/TrailPage/TrailPage.jsx"
import QuizPage                from './pages/QuizPage/QuizPage.jsx'
import HomePage                from './pages/HomePage/HomePage.jsx'
import AboutLeassonPage        from './pages/AboutLeassonPage/AboutLeassonPage.jsx'
import Search                  from "./assets/img/searchIcon.png"
import usePhotoMockData        from "./hooks/UserMockHook/UserMockHook.js"
import { MockUserDataContext } from "./context/MockUserDataContext/MockUserDataContext.jsx"


import CalygamProviders from "./providers/CalygamProviders/CalygamProviders.jsx"

function TccFront() {


  return (
    <div>

      <BrowserRouter>
      
        <main >
        <CalygamProviders>
          <Routes>
            <Route path="/" element={<InitialPage />} />
            <Route path="/cursos" element={<div>Chama component de curso</div>} />
            <Route path="/ProcessoSeletivo" element={<div>Chama component de ProcessoSeletivo</div>} />
            <Route path="/FaleConosco" element={<div>Chama component de Fale Conosco</div>} />
            <Route path="/Login" element={<LoginPage/>} />
            <Route path="/Register" element={<RegisterPage/>} />
            <Route path="/Trail" element={<TrailPage/>}/>
            <Route path="/Quiz" element={<QuizPage/>}/>
            <Route path="/AboutLeasson" element={<AboutLeassonPage/>}/>
            <Route path="/home" element={<HomePage/>}/>
          </Routes>
          </CalygamProviders>
        </main>
      
   

      </BrowserRouter>      
    
     {/*Caio:<- O Component Footer do projeto encontra-se em outros setores :)*/}      

    </div>
  )
}

export default TccFront