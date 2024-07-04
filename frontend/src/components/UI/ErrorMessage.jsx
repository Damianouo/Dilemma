/* eslint-disable react/prop-types */
import { twMerge as tm } from "tailwind-merge";
import FailSvg from "../svgs/FailSvg";
import Message from "./Message";
const ErrorMessage = ({ children, className }) => {
  return (
    <Message className={tm("border-rose-400 bg-rose-200", className)}>
      <FailSvg />
      {children}
    </Message>
  );
};

export default ErrorMessage;
