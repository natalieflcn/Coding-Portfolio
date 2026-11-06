import Panel from "../components/layout/Panel";
import Accordion from "../components/ui/Accordion";

// Level 1 - Novice
// Level 2 - Intermediate
// Level 3 - Proficient
// Level 4 - Advanced
// Level 5 - Expert

const skills = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", level: 3 },
      { name: "Java", level: 1 },
      { name: "HTML", level: 3 },
      { name: "CSS", level: 3 },
    ],
  },
  {
    category: "Front-end Frameworks",
    items: [
      { name: "React", level: 2 },
      { name: "TailwindCSS", level: 1 },
    ],
  },
  {
    category: "Back-end Runtimes and Frameworks",
    items: [
      { name: "Node.js", level: 2 },
      { name: "Mongoose", level: 1 },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", level: 2 },
      { name: "MySQL", level: 1 },
    ],
  },
  {
    category: "Cloud, CI/CD, and Packaging",
    items: [
      { name: "Namecheap", level: 2 },
      { name: "Netlify", level: 2 },
      { name: "Render", level: 1 },
      { name: "Vite", level: 2 },
    ],
  },
  {
    category: "Libraries and APIs",
    items: [
      { name: "React Router", level: 2 },
      { name: "React Hook Form", level: 2 },
      { name: "React Query", level: 2 },
      { name: "Google Maps", level: 2 },
      { name: "Geocoding", level: 1 },
      { name: "PokéAPI", level: 1 },
      { name: "Cloudinary", level: 1 },
      { name: "Resend", level: 1 },
    ],
  },
  {
    category: "Workflow",
    items: [
      { name: "VS Code", level: 3 },
      { name: "GitHub", level: 2 },
      { name: "Postman", level: 2 },
      { name: "Webpack", level: 1 },
      { name: "Babel", level: 1 },
      { name: "Figma", level: 1 },
      { name: "Procreate", level: 4 },
      { name: "Canva", level: 4 },
      { name: "Monday", level: 1 },
    ],
  },
];

function Skills() {
  return (
    <Panel title="Skills" id="skills">
      <Accordion items={skills} />
    </Panel>
  );
}

export default Skills;
