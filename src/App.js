import './App.css';
import NAVBAR from "./Components/Navbar/Navbar"
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Visiting from './Components/Visiting/Visiting';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
        <NAVBAR />
        <Home />
        <About />
        <Visiting />
        <Footer />
    </div>
  );
}

export default App;


