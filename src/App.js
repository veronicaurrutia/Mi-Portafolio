import './index'
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Skills from './Components/Skills'


function App() {
  return (
 <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/Navbar" element={<Navbar />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/Skills" element={<Skills />} />
  <Route path="/Projects" element={<Projects />} />

 </Routes>
  );
}

export default App;
