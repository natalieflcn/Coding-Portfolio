import Panel from "../components/layout/Panel";
import HeadshotPhoto from "../assets/images/headshot.webp";
import natySprite from "../assets/images/naty-sprite.webp";
import { useSombraMode } from "../contexts/SombraModeContext";

const Avatar = function () {
  return (
    <img
      src={HeadshotPhoto}
      className="w-40 xl:w-full  frame-blue-gradient  p-1"
    />
  );
};

function Headshot() {
  const { sombraMode } = useSombraMode();

  return (
    <Panel showTab={false} className="h-full panel-scan ">
      <div className="flex flex-col items-center lg:flex-row px-2 py-3  gap-3 lg:gap-8 xl:flex-col   xl:text-center xl:gap-3 lg:text-left ">
        <Avatar />
        <div className=" flex  flex-col gap-1 xl:gap-3 leading-tight justify-items-between text-[0.7rem] xs:text-xs md:text-sm h-full">
          <h3 className="font-heading text-sm  sm:text-xl md:text-2xl lg:text-3xl  text-shadow-xl text-shadow-dark-300">
            Natalie Falcon
          </h3>
          <p className="font-mono font-bold  lg:text-base xl:text-lg leading-tight">
            <span className="text-red-200">Full Stack Developer</span>
          </p>
          <p>New York, New York</p>
        </div>

        {sombraMode && (
          <img
            src={natySprite}
            className="w-15 sm:w-20 xl:w-25 xl:self-center xl:justify-self-end"
          />
        )}
      </div>
    </Panel>
  );
}

export default Headshot;
