const Circle = ({ size, colour, hoverScale }) => {
  return (
    <div className={`w-${size} h-${size} rounded-full bg-${colour}`}></div>
  );
};

export default Circle;
