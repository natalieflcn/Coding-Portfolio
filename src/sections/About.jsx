import Panel from "../components/layout/Panel";

import { useEffect, useState } from "react";

const Typewriter = function () {
  const [count, setCount] = useState(0);
  const sentence = "Hey, I'm Natalie. Welcome to my website!";

  useEffect(() => {
    if (count >= sentence.length) return;

    const id = setTimeout(() => setCount((prev) => prev + 1), 60);

    return () => clearTimeout(id);
  }, [count, sentence]);

  return (
    <p className="text-left self-start font-mono tracking-wide text-sm sm:text-base lg:text-lg font-bold">
      <span>{sentence.slice(0, count)}</span>
      <span className="cursor" />

      {/* holds space for not yet typed text, preventing content from jumping */}
      <span className="invisible ">{sentence.slice(count)}</span>
    </p>
  );
};

function About() {
  return (
    <Panel title="About" className="h-full">
      <div className="flex flex-col items-center justify-self-center gap-2 xs:gap-5 p-3 text-left text-[0.7rem] leading-snug sm:text-xs lg:text-sm ">
        <Typewriter />

        <p>
          I'm a passionate full-stack developer who loves transforming an
          artistic vision into a memorable user experience.
        </p>
        <p>
          {/* My journey into programming wasn't linear. After college, I worked as
          a program manager for a non-profit, serving as the point of contact
          for our web vendors. But I realized I didn't want to just direct how
          websites were built, I wanted to create them... I transitioned back
          into programming and haven't stopped since. That background gives me a
          strong sense of user behavior and cross-functional communciation, and
          it shapes how I approach code. */}
          Although my professional background isn't exclusively in software
          engineering, I've worked closely with software development teams,
          contributed to product improvements, translated stakeholder
          requirements, and coordinated the resolution of technical issues.
          These experiences have given me an understanding of the collaboration,
          communication, and problem-solving involved in building software.
        </p>
        <p>
          I'm currently looking for junior software engineering roles and I'm
          open to freelance web projects. Let's connect!
        </p>
        <p>
          Outside of code, I make art, play pool (badly), and reminisce about
          Overwatch.{" "}
          <span className="italic">
            Sombra Mode was inspired by Sombra's character design - check it
            out!
          </span>
        </p>
      </div>
    </Panel>
  );
}

export default About;
