/* eslint-disable react/prop-types */
import { twMerge as tm } from "tailwind-merge";

const Message = ({ children, className }) => {
  return (
    <p
      className={tm(
        "flex gap-2 rounded-lg border-2 border-blue-400 bg-blue-200 px-4 py-2  text-xl text-black shadow-lg",
        className,
      )}
    >
      {children}
    </p>
  );
};

export default Message;
