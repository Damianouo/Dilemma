import { cn } from "../../utils/cn";

const DropDown = ({ children, className, onClick }) => {
  return (
    <div
      className={cn("relative flex cursor-pointer items-center justify-center", className)}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default DropDown;
