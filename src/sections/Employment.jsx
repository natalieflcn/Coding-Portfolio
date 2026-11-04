import Panel from "../components/layout/Panel";
import reserve from "../assets/images/reserve-logo.png";
import benevolent from "../assets/images/benevolent-logo.png";

const experience = [
  {
    year: "2024 — 2025",
    company: "Benevolent",
    logo: benevolent,
    title: "Program Manager",
    sector: "Non-profit Organization",
    bullets: ["", "", ""],
  },
  {
    year: "2024 — 2025",
    company: "ReServe Inc.",
    logo: reserve,
    title: "Social Media Manager",
    sector: "Non-profit Organization",
    bullets: ["", "", ""],
  },
];

const Job = function ({ item }) {
  return (
    <div className=" w-full flex flex-row gap-7 not-last:border-b not-last:pb-5 not-first:pt-5 border-blue-0">
      <p className="">{item.year}</p>
      <div className="flex flex-col text-left ">
        <div className="flex gap-2">
          <h3 className="text-lg leading-snug ">{item.company}</h3>
          <img src={item.logo} className="w-16 h-auto self-center" />
        </div>
        <p className="font-mono font-semibold text-red-200 text-sm">
          {item.title}
        </p>
        <p className="text-xs mt-0.75">{item.sector}</p>
        <div>
          {item.bullets.map((bullet) => (
            <p>{bullet}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

function Employment() {
  return (
    <Panel title="Employment">
      {experience.map((item) => (
        <Job item={item} />
      ))}
    </Panel>
  );
}

export default Employment;
