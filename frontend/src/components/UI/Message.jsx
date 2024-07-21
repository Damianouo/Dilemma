/* eslint-disable react/prop-types */
import { twMerge as tm } from "tailwind-merge";

const Message = ({ children, className }) => {
  return (
    <p
      className={tm(
        "flex gap-2 rounded-lg border-2 border-primary-500 bg-gradient-to-b from-primary-600 to-primary-700 px-4 py-2 text-xl text-primary-100 shadow-lg",
        className,
      )}
    >
      {children}
    </p>
  );
};

export default Message;
