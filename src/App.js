import './App.css';
import NAVBAR from "./Components/Navbar/Navbar"
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Visiting from './Components/Visiting/Visiting';
import Footer from './Components/Footer/Footer';
import { useEffect,useState } from 'react';
import gsap from 'gsap/all';
function App() {
  return (
    <div id="app"  className="App">
      <NAVBAR />
      <Home />
      <About />
      {/* <Footer /> */}
    </div>
  );
}

export default App;


