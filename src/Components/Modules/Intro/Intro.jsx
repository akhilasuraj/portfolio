import ProfileImage from "../../../Assets/Images/sideCropped.png";
import Circle from "../../Common/Circle.jsx";
import GetStartedButton from "./GetStartedButton";

const Info = ({ curentPage, setCurentPage }) => {
  const handleScroll = (e) => {
    if (e.nativeEvent.wheelDelta > 0) {
      console.log("scroll up");
    } else {
      console.log("scroll down");
      setCurentPage(1);
    }
  };

  return (
    <div
      id="gray"
      className={`z-40 absolute overflow-hidden bg-gray-100 h-screen w-full transform duration-1000 ease-out ${
        curentPage > 0 ? "-translate-y-full" : ""
      }`}
      onWheel={(e) => handleScroll(e)}
    >
      <div className="flex flex-col ml-44 mt-36">
        <span className="text-7xl text-mainFontColour font-monument uppercase">
          Akhila
        </span>
        <span className="text-7xl text-mainFontColour font-monument uppercase">
          Abesinghe
        </span>
      </div>
      <div className="ml-44 mt-10 flex flex-col">
        <span className="uppercase font-monument text-2xl">
          mobile and web application
        </span>
        <span className="uppercase font-monument text-2xl">developper</span>
      </div>
      <div className="ml-44 mt-10">
        <span className="text-xl font-dm text-gray-500">
          I'm Akhila, a web and mobile application developper lives in Sri
          Lanka.
        </span>
      </div>
      <div className="absolute bottom-0 right-72 hidden">
        <img src={ProfileImage} alt="" />
      </div>
      <div className="absolute right-0 -bottom-36">
        <Circle size={96} colour={"red-400"} styles={"transform scale-150"} />
      </div>
      <div className="absolute left-0 top-80 transform -translate-x-20">
        <Circle size={44} colour={"mainFontColour"} />
      </div>
      <div className="ml-44 mt-10">
      <GetStartedButton />
      </div>
    </div>
  );
};

export default Info;
