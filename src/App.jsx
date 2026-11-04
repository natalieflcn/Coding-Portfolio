import "./App.css";
import Headshot from "./sections/Headshot";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Background from "./components/decorative/Background";
import NavBar from "./components/layout/NavBar";
import Education from "./sections/Education";
import Employment from "./sections/Employment";

function App() {
  return (
    <>
      <Background />
      <NavBar />

      <div className="flex flex-col gap-5 sm:gap-7 xl:gap-10 self-center mb-10 md:w-1/2 app-container mt-6 md:mt-30">
        <div className="flex gap-5">
          <Headshot />
          <About />
        </div>
        <Education />
        <Projects />
        <Employment />
        <Skills />
        <Contact />
      </div>
    </>
  );
}

export default App;
