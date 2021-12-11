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
      className={`z-40 absolute bg-gray-100 h-screen w-full transform duration-1000 ease-out ${
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
        <span className="uppercase font-monument text-2xl">mobile and web application</span>
        <span className="uppercase font-monument text-2xl">developper</span>
      </div>
    </div>
  );
};

export default Info;
