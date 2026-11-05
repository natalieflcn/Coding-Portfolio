import Panel from "../components/layout/Panel";
import reserve from "../assets/images/reserve-logo.webp";
import benevolent from "../assets/images/benevolent-logo.webp";
import hex from "../assets/images/hex-full.png";

const experience = [
  {
    year: "2024 — 2025",
    company: "Benevolent",
    logo: benevolent,
    title: "Program Manager",
    sector: "Non-profit Organization",
    bullets: [
      "Bridged communication between business stakeholders and an offshore software development team, translating organizational needs into actionable project requirements.",
      "Collaborated with the vendor's project manager to coordinate development workflows, monitor milestones, review deliverables, and ensure alignment with product expectations.",
      "Reviewed website mockups, approved development drafts, and produced digital assets and user documentation to support website modernization and transition.",
    ],
  },
  {
    year: "2024 — 2025",
    company: "ReServe Inc.",
    logo: reserve,
    title: "Social Media Manager",
    sector: "Non-profit Organization",
    bullets: [
      "Identified, documented, and prioritized software defects within the organization's web portal, maintaining a bug-tracking log and coordinating resolution with the external development team.",
      "Collaborated with developers to communicate new feature requests, report usability issues, and monitor implementation of platform improvements.",
      "Created user guides and technical documentation to help staff and participants navigate the organization's web platform.",
      "Developed data-driven digital content and marketing materials to strengthen brand visibility and audience engagement.",
    ],
  },
];

const Job = function ({ item }) {
  return (
    <div className=" w-full p-2 xs:p-3 flex flex-col md:flex-row gap-1 lg:gap-7 not-last:border-b not-last:pb-5  not-first:pt-5 border-blue-0  ">
      <p className="text-[0.7rem] text-left md:text-sm ">{item.year}</p>
      <div className="flex flex-col text-left flex-1 ">
        <div className="flex xs:gap-2">
          <h3 className=" text-base sm:text-lg md:text-xl leading-snug ">
            {item.company}
          </h3>
          <img
            src={item.logo}
            className="w-16 h-auto self-center hidden xs:block"
          />
        </div>
        <p className="font-mono font-semibold text-red-200 text-[0.7rem] leading-tight sm:text-xs md:text-sm">
          {item.title}
        </p>
        <p className="hidden xs:block  md:text-xs mt-0.75">{item.sector}</p>
        <div className="flex flex-col mt-2 gap-2">
          {item.bullets.map((bullet, i) => (
            <div className="flex gap-2" key={i}>
              <img
                src={hex}
                className="hidden xs:block w-2 h-2 relative top-1.5 "
              />
              <p className="text-[0.7rem]  leading-tight md:text-xs lg:text-sm">
                {bullet}
              </p>
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
