import "./App.css";
import Summary from "./sections/Summary";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Background from "./components/decorative/Background";

function App() {
  return (
    <>
      <Background />
      <div className="flex flex-col">
        <Summary />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </>
  );
}

export default App;
