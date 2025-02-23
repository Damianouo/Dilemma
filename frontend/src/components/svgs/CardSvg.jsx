import SvgWrapper from "./SvgWrapper";

const CardSvg = ({ className, ...props }) => {
  return (
    <SvgWrapper className={className} {...props}>
      <svg
        className="rotate-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z" />
        <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z" />
      </svg>
    </SvgWrapper>
  );
};

export default CardSvg;
