/* eslint-disable react/prop-types */
import PendingSvg from "../svgs/PendingSvg";
import Message from "./Message";
const PendingMessage = ({ children }) => {
  return (
    <Message className="border-amber-400 bg-amber-200">
      <PendingSvg />
      {children}
    </Message>
  );
};

export default PendingMessage;
