import Panel from "../components/layout/Panel";
import Accordion from "../components/ui/Accordion";

const skills = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", level: 3 },
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
    category: "Back-end and Runtimes",
    items: [{ name: "Node.js", level: 2 }],
  },
  {
    category: "Databases",
    items: [{ name: "MongoDB", level: 2 }],
  },
  {
    category: "CI/CD and Packaging",
    items: [
      { name: "Netlify", level: 2 },
      { name: "Render", level: 1 },
    ],
  },
  {
    category: "Libraries and APIs",
    items: [
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
      { name: "VS Code", level: 2 },
      { name: "GitHub", level: 1 },
      { name: "Procreate", level: 1 },
      { name: "Figma", level: 1 },
    ],
  },
];

function Skills() {
  return (
    <div>
      <Panel title="Skills">
        <Accordion items={skills} />
      </Panel>
    </div>
  );
}

export default Skills;
