import './App.css';
import NAVBAR from "./Components/Navbar/Navbar"
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import { useEffect,useState } from 'react';
import gsap from 'gsap/all';
import Common_product from './Components/Product/Common_product';
function App() {
  return (
    <div id="app"  className="App">
      <NAVBAR />
      <Home />
      <About />
      <Common_product/>
      {/* <Footer /> */}
    </div>
  );
}

export default App;


