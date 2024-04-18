import './App.css';
import NAVBAR from "./Components/Navbar/Navbar"
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Common_product from './Components/Product/Common_product';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(_ScrollTrigger)
function App() {
    window.addEventListener("load",()=>{
      ScrollTrigger.refresh();
    })
 
  return (
    <div id="app" className="App">
      <NAVBAR />
      <Home />
      <About />
      <Common_product />
      <Footer />
    </div>
  );
}

export default App;


