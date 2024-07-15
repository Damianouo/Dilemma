/* eslint-disable react/prop-types */
const PlusMinusSvg = ({ accordionOpen }) => {
  return (
    <svg
      className="shrink-0"
      fill="currentColor"
      width="16"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        y="7"
        width="16"
        height="2"
        rx="1"
        className={`origin-center transition duration-200 ease-out ${
          accordionOpen && "!rotate-180"
        }`}
      />
      <rect
        y="7"
        width="16"
        height="2"
        rx="1"
        className={`origin-center rotate-90 transition duration-200 ease-out ${
          accordionOpen && "!rotate-180"
        }`}
      />
    </svg>
  );
};

export default PlusMinusSvg;
