import Panel from "../components/layout/Panel";
import pokedex from "../assets/videos/natys-pokedex.mp4";
import diapr from "../assets/videos/diapr.mp4";

const projects = [
  {
    video: pokedex,
    title: "Naty's Pokédex",
    techStack: ["HTML", "CSS", "JavaScript"],
    description:
      "Naty's Pokédex is a web-based application built using HTML, CSS, and vanilla JavaScript that mimics the functionality of a classic Pokédex. It interacts with the PokéAPI to fetch and display Pokémon data, allowing users to explore, search, and manage their favorite Pokémon in an engaging way.",
    link: "https://natys-pokedex.netlify.app/",
  },
  {
    video: diapr,
    title: "Debí ir a Puerto Rico",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    description:
      "Drawing inspiration from Bad Bunny's latest album (dtmf), Debí ir a Puerto Rico is a gamified tourism app designed to help people experience the best parts of Puerto Rico. Explorers can find the best way to experience the island while Ambassadors curate personal explorations promoting local businesses and their favorite parts of the island.",
    link: "https://diapr.org/",
  },
];
const Project = function ({ project }) {
  return (
    <div className="flex w-full text-start p-2 pt-3 ">
      <div className="flex flex-col gap-2 lg:flex-row lg:gap-5">
        <a href={project.link} className="lg:w-[50%]  w-full shrink-0">
          <video
            autoPlay
            loop
            muted
            src={project.video}
            className="border-2 border-blue-0 w-full"
          />
        </a>

        <div className="flex flex-col gap-2  lg:text-start lg:gap-1">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <h3 className="font-heading text-sm xs:text-base sm:text-lg lg:text-xl xl:text-2xl hover:text-blue-0 hover:text-shadow-blue-100 hover:text-shadow-[0_0_4px_--color-light-100] active:text-blue-0 active:text-shadow-blue-100 active:text-shadow-[0_0_4px_--color-light-100] ">
              {project.title}
            </h3>
          </a>
          <div className="flex flex-wrap lg:justify-start gap-1 sm:gap-3 lg:text-start">
            {project.techStack.map((language, i) => (
              <span key={i} className="flex   gap-2 xs:gap-3">
                <strong className="font-mono text-red-200 text-[0.5rem] md:text-xs xl:text-sm">
                  {language}
                </strong>
                <strong>{i !== project.techStack.length - 1 && "|"} </strong>
              </span>
            ))}
          </div>
          <p className="text-[0.7rem] leading-snug md:text-xs xl:text-sm">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
};
function Projects() {
  return (
    <Panel title="Projects">
      <div className="flex flex-col gap-2 xs:gap-5">
        {projects.map((project, i) => (
          <Project project={project} key={i} />
        ))}
      </div>
    </Panel>
  );
}

export default Projects;
