import Panel from "../components/layout/Panel";
import Headshot from "./Headshot";

function About() {
  return (
    <Panel title="About" className="h-full">
      {/* <Headshot /> */}
      <div className="flex flex-col items-center justify-self-center gap-5 p-3 text-center text-[0.7rem] leading-snug sm:text-xs lg:text-sm ">
        <p className="text-sm sm:text-md lg:text-lg font-bold sm:pt-0">
          Hey, I'm Natalie. Welcome to my website!
        </p>
        <p>
          I'm a passionate fullstack developer with a B.S. in Computer Science.
          I've been honing my skills to build interactive, dynamic web
          applications because I love bridging the gap between clean code and a
          personalized user experience.
        </p>
        {/* <p>
            My journey in software development wasn't linear. After graduating
            college, I became a program manager for a non-profit, serving as the
            point of communciation for our web vendors. After a year, I realized
            I didn't want to direct how websites should be constructed, I wanted
            to build those digital experiences. I transitioned back into
            programming and have been coding ever since. My background gives me
            a unique perspective on user behavior, something, and
            cross-functional communciation, which all translates into how I
            approach code.
          </p> */}
        <p>
          I'm currently looking for junior software engineering roles and I'm
          open to freelance web projects. Let's connect!
        </p>
        <p>
          When I'm not coding, you can find me making art, playing pool (badly),
          or reminiscing about Overwatch (this website was inspired by Sombra's
          character design).
        </p>
      </div>
    </Panel>
  );
}

export default About;
