import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
