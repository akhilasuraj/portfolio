const Works = ({ curentPage, setCurentPage }) => {
  const handleScroll = (e) => {
    if (e.nativeEvent.wheelDelta > 0) {
      console.log("scroll up");
      setCurentPage(1);
    } else {
      console.log("scroll down");
      setCurentPage(3);
    }
  };

  return (
    <div
      id="red"
      className={`z-20 absolute bg-yellow-400 h-screen w-full transform duration-1000 ease-out ${
        curentPage > 2 ? "-translate-y-full" : ""
      }`}
      onWheel={(e) => handleScroll(e)}
    >
      <span className="flex justify-center items-center h-screen text-9xl font-monument">
        Works
      </span>
    </div>
  );
};

export default Works;
