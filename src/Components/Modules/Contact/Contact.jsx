const Contact = ({ curentPage, setCurentPage }) => {
  const handleScroll = (e) => {
    if (e.nativeEvent.wheelDelta > 0) {
      console.log("scroll up");
      setCurentPage(3);
    } else {
      console.log("scroll down");
    }
  };

  return (
    <div
      id="red"
      className={`z-0 absolute bg-blue-400 h-screen w-full transform duration-1000 ease-out ${
        curentPage > 4 ? "-translate-y-full" : ""
      }`}
      onWheel={(e) => handleScroll(e)}
    >
      <span className="flex justify-center items-center h-screen text-9xl font-monument">
        Contact
      </span>
    </div>
  );
};

export default Contact;
