const Circle = ({ size, colour }) => {
  return (
    <div className={`w-${size} h-${size} rounded-full bg-${colour}`}></div>
  );
};

export default Circle;
