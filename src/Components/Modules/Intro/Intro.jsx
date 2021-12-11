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
      className={`z-40 absolute bg-gray-400 h-screen w-full transform duration-1000 ease-out ${
        curentPage > 0 ? "-translate-y-full" : ""
      }`}
      onWheel={(e) => handleScroll(e)}
    >
      <span className="flex justify-center items-center h-screen text-9xl font-monument">
        Intro
      </span>
    </div>
  );
};

export default Info;
