import { cn } from "../../utils/cn";
import FailSvg from "../svgs/FailSvg";
import Message from "./Message";
const ErrorMessage = ({ children, className }) => {
  return (
    <Message className={cn("border-rose-700/30 from-rose-600/30 to-rose-800/30", className)}>
      <FailSvg className="text-rose-500/50" />
      {children}
    </Message>
  );
};

export default ErrorMessage;
