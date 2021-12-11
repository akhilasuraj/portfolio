const Portfolio = ({ curentPage, setCurentPage }) => {
  const handleScroll = (e) => {
    if (e.nativeEvent.wheelDelta > 0) {
      console.log("scroll up");
      setCurentPage(0);
    } else {
      console.log("scroll down");
      setCurentPage(2);
    }
  };

  return (
    <div
      id="red"
      className={`z-30 absolute bg-white h-screen w-full transform duration-1000 ease-out ${
        curentPage > 1 ? "-translate-y-full" : ""
      }`}
      onWheel={(e) => handleScroll(e)}
    >
      <span className="flex justify-center items-center h-screen text-9xl font-monument">
        Portfolio
      </span>
    </div>
  );
};

export default Portfolio;
