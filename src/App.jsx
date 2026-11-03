import "./App.css";
import Summary from "./sections/Summary";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Background from "./components/decorative/Background";
import Header from "./components/layout/Header";

function App() {
  return (
    <>
      <Background />
      <Header />
      <div className="flex flex-col self-center  app-container md:w-1/2">
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
