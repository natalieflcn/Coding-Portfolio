import Panel from "../components/layout/Panel";
import reserve from "../assets/images/reserve-logo.png";
import benevolent from "../assets/images/benevolent-logo.png";
import hex from "../assets/images/hex-full.png";

const experience = [
  {
    year: "2024 — 2025",
    company: "Benevolent",
    logo: benevolent,
    title: "Program Manager",
    sector: "Non-profit Organization",
    bullets: [
      "Facilitated collaboration between engineering and marketing teams to design and launch a modernized website, translating diverse requirements into a unified product that met business, design, and user experience expectations.",
      "Oversaw the end-to-end development lifecycle of the new company website, maintaining regular communication with developers to ensure feature functionality, usability, and stakeholder satisfaction.",
      "Directed daily operations with a focus on alignment to organizational goals and our overarching mission.",
    ],
  },
  {
    year: "2024 — 2025",
    company: "ReServe Inc.",
    logo: reserve,
    title: "Social Media Manager",
    sector: "Non-profit Organization",
    bullets: [
      "Facilitated collaboration between engineering and marketing teams to design and launch a modernized website, translating diverse requirements into a unified product that met business, design, and user experience expectations.",
      "Oversaw the end-to-end development lifecycle of the new company website, maintaining regular communication with developers to ensure feature functionality, usability, and stakeholder satisfaction.",
      "Directed daily operations with a focus on alignment to organizational goals and our overarching mission.",
    ],
  },
];

const Job = function ({ item }) {
  return (
    <div className=" w-full flex flex-row gap-7 not-last:border-b not-last:pb-5 py-1 not-first:pt-5 border-blue-0">
      <p className="">{item.year}</p>
      <div className="flex flex-col text-left max-w-[80%]">
        <div className="flex gap-2">
          <h3 className="text-lg leading-snug ">{item.company}</h3>
          <img src={item.logo} className="w-16 h-auto self-center" />
        </div>
        <p className="font-mono font-semibold text-red-200 text-sm">
          {item.title}
        </p>
        <p className="text-xs mt-0.75">{item.sector}</p>
        <div className="flex flex-col mt-2 gap-2">
          {item.bullets.map((bullet, i) => (
            <div className="flex gap-2" key={i}>
              <img
                src={hex}
                className="w-2 h-2 relative top-1.5 drop-shadow-[0_0_2px] drop-shadow-pink-100"
              />
              <p className="text-sm">{bullet}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function Employment() {
  return (
    <Panel title="Employment">
      {experience.map((item, i) => (
        <Job item={item} key={i} />
      ))}
    </Panel>
  );
}

export default Employment;
