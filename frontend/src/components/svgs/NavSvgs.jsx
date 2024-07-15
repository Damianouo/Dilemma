import SvgWrapper from "./SvgWrapper";

/* eslint-disable react/prop-types */
export const WebIconSvg = ({ className, ...props }) => {
  return (
    <SvgWrapper className={className} {...props}>
      <svg
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

export const MenuSvg = ({ className, accordionOpen, ...props }) => {
  return (
    <SvgWrapper className={className} {...props}>
      <svg
        className="shrink-0"
        fill="currentColor"
        width="16"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="0"
          x={accordionOpen ? "2" : "0"}
          width="16"
          height="2"
          rx="1"
          className={`origin-top-left rotate-0 transition-all ease-out ${
            accordionOpen && "!rotate-45"
          }`}
        />
        <rect
          y="7"
          width="16"
          height="2"
          rx="1"
          className={`transition-all ease-out ${accordionOpen && "opacity-0"}`}
        />
        <rect
          y="14"
          x={accordionOpen ? "2" : "0"}
          width="16"
          height="2"
          rx="1"
          className={`origin-bottom-left rotate-0 transition-all ease-out ${
            accordionOpen && "!-rotate-45"
          }`}
        />
      </svg>
    </SvgWrapper>
  );
};

export const PersonSvg = ({ className, ...props }) => {
  return (
    <SvgWrapper className={className} {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgWrapper>
  );
};
