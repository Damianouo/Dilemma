/* eslint-disable react/prop-types */
import PendingSvg from "../svgs/PendingSvg";
import Message from "./Message";
const PendingMessage = ({ children }) => {
  return (
    <Message className="border-amber-400/30 from-amber-600/30 to-amber-800/30">
      <PendingSvg className="text-amber-500/50" />
      {children}
    </Message>
  );
};

export default PendingMessage;
