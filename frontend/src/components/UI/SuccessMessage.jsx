import SuccessSvg from "../svgs/SuccessSvg";
import Message from "./Message";

const SuccessMessage = ({ children }) => {
  return (
    <Message className="border-emerald-500/30 from-emerald-600/30 to-emerald-800/30">
      <SuccessSvg className="text-emerald-400/50" />
      {children}
    </Message>
  );
};

export default SuccessMessage;
