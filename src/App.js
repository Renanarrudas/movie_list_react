import './App.css';
import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/Home/Home';
import Update from './components/Update/Update';
import Add from './components/Add/Add';
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./NotFound";


function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Navbar />
        <Routes>
          {/* Path para indicar o caminho | element retorna o elemento deste caminho | exact para informar que esse é o caminho raiz da aplicação */}
          <Route path="/" element={<Home />} exact/> 
          <Route path="add" element={<Add />} />
          <Route path="update/:id" element={<Update />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
