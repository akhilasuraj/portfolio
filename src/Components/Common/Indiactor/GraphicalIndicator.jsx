const GraphicalIndicator = ({ curentPage, setCurentPage }) => {
  const pages = ["Intro", "Portfolio", "Works", "Experience", "Contact"];
  return (
    <div className="flex flex-col space-y-7">
      {pages.map((page, index) => {
        return (
          <div key={page}>
            <div
              className={`w-3 h-3 rounded-full ${
                curentPage == index ? "bg-yellow-600" : "bg-gray-300"
              } transform duration-300 ease-out hover:scale-150 cursor-pointer`}
              onClick={() => setCurentPage(index)}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default GraphicalIndicator;
