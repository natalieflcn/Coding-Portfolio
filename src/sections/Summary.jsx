import Panel from "../components/layout/Panel";
import Headshot from "../assets/images/headshot.jpeg";

const Avatar = function () {
  return <img src={Headshot} className="w-45 headshot-frame  p-1" />;
};

function Summary() {
  return (
    <div>
      <Panel title="Summary">
        <div className="flex p-3 gap-2 flex-col sm:flex-row text-[0.7rem] items-center sm:gap-8 ">
          <Avatar />
          <div className=" flex flex-col gap-2 leading-tight justify-center text-[0.7rem] xs:text-xs sm:text-left  md:text-sm ">
            <h3 className="font-heading text-sm xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-shadow-xl text-shadow-dark-300">
              Natalie Falcon
            </h3>
            <p className="lg:text-md xl:text-lg">Full Stack Developer</p>
            <p>
              <strong>Bachelor of Science</strong> in Computer Science
            </p>
            <p>New York, New York</p>
          </div>
        </div>
      </Panel>
    </div>
  );
}

export default Summary;
