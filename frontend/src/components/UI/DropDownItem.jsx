import { cn } from "../../utils/cn";

const DropDownItem = ({ children, className, state }) => {
  return (
    <ul
      className={cn(
        "absolute top-full z-50 rounded-md p-2 text-left transition-all",
        state ? "opacity-100" : "pointer-events-none -translate-y-4 opacity-0",
        className,
      )}
    >
      {children}
    </ul>
  );
};

export default DropDownItem;
