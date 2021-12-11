const Experience = ({ curentPage, setCurentPage }) => {
  const handleScroll = (e) => {
    if (e.nativeEvent.wheelDelta > 0) {
      console.log("scroll up");
      setCurentPage(2);
    } else {
      console.log("scroll down");
      setCurentPage(4);
    }
  };

  return (
    <div
      id="red"
      className={`z-10 absolute bg-green-400 h-screen w-full transform duration-1000 ease-out ${
        curentPage > 3 ? "-translate-y-full" : ""
      }`}
      onWheel={(e) => handleScroll(e)}
    >
      <span className="flex justify-center items-center h-screen text-9xl font-monument">
        Experience
      </span>
    </div>
  );
};

export default Experience;
