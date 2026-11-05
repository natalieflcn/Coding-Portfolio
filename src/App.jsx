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
import { useSombraMode } from "./contexts/SombraModeContext";
import FairyDustIndex from "./utils/FairyDustIndex";

function App() {
  const { sombraMode } = useSombraMode();

  return (
    <main
      data-mode={sombraMode === true ? "sombra" : "corporate"}
      className="flex flex-col "
    >
      {sombraMode && <FairyDustIndex />}
      <Background />
      <NavBar />

      <div className="flex flex-col gap-5 sm:gap-7 xl:gap-10 self-center mb-10 md:w-1/2 app-container mt-6 md:mt-30 ">
        <div
          className="grid grid-cols-1 xl:grid-cols-6 items-stretch gap-5 scroll-mt-24"
          id="about"
        >
          <div className=" xl:col-span-2 ">
            <Headshot />
          </div>
          <div className=" xl:col-span-4">
            <About />
          </div>
        </div>

        <section
          id="experience"
          className="scroll-mt-24 flex flex-col gap-5 sm:gap-7 xl:gap-10"
        >
          <Projects />
          <Education />
          <Employment />
        </section>

        <Skills />
        <Contact />
      </div>
    </main>
  );
}

export default App;
