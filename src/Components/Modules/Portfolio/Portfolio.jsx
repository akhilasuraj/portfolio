import { useState } from "react";

const Portfolio = () => {
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
    <div id="red"
      className={`absolute bg-red-400 h-screen w-full transform duration-1000 ease-out ${
        pageEnd ? "-translate-y-full" : ""
      }`}
      onWheel={(e) => handleScroll(e)}
    ></div>
  );
};

export default Portfolio;
