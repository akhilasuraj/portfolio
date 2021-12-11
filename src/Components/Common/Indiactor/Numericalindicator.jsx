import React from "react";

const Numericalindicator = ({ index }) => {
  return (
    <div>
      <span className="z-50 fixed text-lg font-monument text-gray-900 top-36 left-16">
        {index + 1}
      </span>
    </div>
  );
};

export default Numericalindicator;
