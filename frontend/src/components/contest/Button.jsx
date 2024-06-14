/* eslint-disable react/prop-types */
const Button = ({
  children,
  handleClick,
  bgColor = "bg-red-200",
  customStyles = "",
}) => {
  return (
    <button
      className={`padding flex items-center justify-center gap-1 rounded-lg  text-base text-black
       ${bgColor} ${customStyles}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
