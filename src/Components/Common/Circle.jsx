const Circle = ({ size, colour, styles = "" }) => {
  return (
    <div
      className={`w-${size} h-${size} rounded-full bg-${colour} ${styles}`}
    ></div>
  );
};

export default Circle;
