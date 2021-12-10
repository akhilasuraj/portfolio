import { useState } from "react";

const Info = () => {
  const [pageEnd, setPageEnd] = useState(false);

  const handleScroll = (e) => {
    if (e.nativeEvent.wheelDelta > 0) {
      console.log("scroll up");
    } else {
      console.log("scroll down");
      setPageEnd(true);
    }
  };

  return (
    <div id="gray"
      className={`absolute bg-gray-400 h-screen w-full transform duration-1000 ease-out ${
        pageEnd ? "-translate-y-full" : ""
      }`}
      onWheel={(e) => handleScroll(e)}
    ></div>
  );
};

export default Info;
