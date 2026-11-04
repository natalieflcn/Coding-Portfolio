import Panel from "../components/layout/Panel";

const certificates = [
  {
    title: "The Complete JavaScript Course 2025: From Zero to Expert!",
    date: "Apr 2025",
    skills: ["JavaScript"],
  },
  {
    title: "JavaScript Data Structures & Algorithms",
    date: "May 2025",
    skills: ["JavaScript"],
  },
  {
    title: "The Ultimate React Course 2025: React, Next.js, Redux & More",
    date: "Aug 2025",
    skills: ["React.js", "Redux.js", "Next.js"],
  },
  {
    title: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
    date: "Nov 2025",
    skills: ["Node.js", "Express.js", "MongoDB", "Mongoose ODM"],
  },
];

const courses = [
  "Programming Methods I",
  "Programming Methods II",
  "Data Structures & Algorithms",
  "Database Systems",
  "Software Engineering",
  "Introduction to Networks",
  "Discrete Mathematics",
];

const Certificate = function ({ item }) {
  return (
    <div className="flex flex-col leading-snug border-t-blue-0 border-t mb-1.5 pt-1">
      <h3 className="text-md font-bold">{item.title}</h3>
      <p className="text-[0.7rem]">Udemy</p>
      <p className="text-[0.7rem]">{`Issued ${item.date}`}</p>
      <div className="flex gap-2 mt-1">
        {item.skills.map((skill, i) => (
          <span
            className="font-mono text-red-200 text-[0.7rem] border-red-100 border px-1.5 py-0.5 rounded-lg"
            key={i}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

function Education() {
  return (
    <Panel title="Education">
      <div className="flex flex-col text-start pt-3 gap-4">
        <div className="border-blue-0 border-2 rounded-xs bg-dark-300/60 p-3">
          <h3 className="text-blue-100 font-heading text-lg">
            Higher Education
          </h3>
          <p className=" text-md">
            <strong>Bachelor of Science</strong> in Computer Science
          </p>
          <p className="text-sm">Lehman CUNY College | NY, USA</p>
          <div className="flex flex-wrap gap-2 mt-1.5 gap-y-1.5 leading-relaxed">
            {courses.map((course, i) => (
              <span
                className="font-mono text-red-200 text-[0.7rem] border-red-100 border px-1.5  rounded-lg"
                key={i}
              >
                {course}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col px-3 gap-1">
          <h3 className="font-heading text-blue-100  text-lg">Certificates</h3>
          {certificates.map((item, i) => (
            <Certificate item={item} key={i} />
          ))}
        </div>
      </div>
    </Panel>
  );
}

export default Education;
