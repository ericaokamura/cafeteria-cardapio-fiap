import React from "react";
import './App.css'
import Cardapio from './pages/Cardapio'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/cardapio" element={<Cardapio />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
