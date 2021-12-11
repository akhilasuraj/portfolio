import Twitter from "./Icons/Twitter";
import LinkedIn from "./Icons/LinkedIn";
import Instagram from "./Icons/Instagram";

const SocialMediaIcons = () => {
  return (
    <div className="flex flex-col justify-between items-center space-y-7">
      <div className="opacity-50 cursor-pointer transform duration-500 ease-out hover:opacity-100">
        <Twitter colour="black" />
      </div>
      <div className="opacity-50 cursor-pointer transform duration-500 ease-out hover:opacity-100">
        <LinkedIn colour="black" />
      </div>
      <div className="opacity-50 cursor-pointer transform duration-500 ease-out hover:opacity-100">
        <Instagram colour="black" />
      </div>
    </div>
  );
};

export default SocialMediaIcons;
