import React from "react";
import './App.css'
import Cardapio from './pages/Cardapio'
import MeuPedido from './pages/MeuPedido'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CarrinhoProvider from './util/CarrinhoContext'


function App() {

  return (
    <>
      <CarrinhoProvider>
        <Router>
          <Routes>
            <Route path="/cardapio" element={<Cardapio />}/>
            <Route path="/meu-pedido" element={<MeuPedido />} />
          </Routes>
        </Router>
      </CarrinhoProvider>
    </>
  )
}

export default App
