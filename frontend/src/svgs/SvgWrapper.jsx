/* eslint-disable react/prop-types */
const SvgWrapper = ({
  size = "h-4 w-4",
  customStyles = "",
  children,
  ...props
}) => {
  return (
    <span {...props} className={`flex ${size} ${customStyles}`}>
      {children}
    </span>
  );
};

export default SvgWrapper;
