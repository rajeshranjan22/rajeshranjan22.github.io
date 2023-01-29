import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
// import SocialLinks from "./components/SocialLinks";
import Statistics from "./components/Statistics";
// import {useEffect} from "react";
// import AOS from "aos";
 
function App() {

  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Statistics/>
      <Contact />
      {/* <SocialLinks /> */}
      
    </div>
  );
}

export default App;