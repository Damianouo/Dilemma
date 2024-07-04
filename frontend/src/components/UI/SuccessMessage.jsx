/* eslint-disable react/prop-types */
import SuccessSvg from "../svgs/SuccessSvg";
import Message from "./Message";

const SuccessMessage = ({ children }) => {
  return (
    <Message className="border-emerald-400 bg-emerald-200">
      <SuccessSvg />
      {children}
    </Message>
  );
};

export default SuccessMessage;
