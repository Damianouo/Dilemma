import { cn } from "../../utils/cn";

const Message = ({ children, className }) => {
  return (
    <p
      className={cn(
        "border-primary-500 from-primary-600 to-primary-700 text-primary-100 flex gap-2 rounded-lg border-2 bg-linear-to-b px-4 py-2 text-xl shadow-lg",
        className,
      )}
    >
      {children}
    </p>
  );
};

export default Message;
