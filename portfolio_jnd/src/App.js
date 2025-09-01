import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Classes from "./components/Classes";
import Bottom from "./components/Bottom";



function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Classes/>
      <Bottom/>
    </div>
  );
}

export default App;
