import Circle from "../Circle";

const GraphicalIndicator = ({ index, curentPage, setCurentPage }) => {
  const pages = ["Intro", "Portfolio", "Works", "Experience", "Contact"];
  return (
    <div className="flex flex-col space-y-6">
      {pages.map((page, i) => {
        return (
          <div key={page}>
            <Circle size={3} colour="gray-300" />
          </div>
        );
      })}
    </div>
  );
};

export default GraphicalIndicator;
