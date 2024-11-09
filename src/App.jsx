import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Works from "./components/Works";
import Skills from "./components/Skills";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary ">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
    

    
        {/* <Skills/> */}
        <Works />
        
      </div>
    </BrowserRouter>
  );
}

export default App;
