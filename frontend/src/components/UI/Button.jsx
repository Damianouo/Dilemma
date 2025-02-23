import { cn } from "../../utils/cn";

const Button = ({ children, onClick, className, type = "button", ...props }) => {
  return (
    <button
      className={cn("btn hover:bg-secondary-600 bg-secondary-700 text-secondary-100", className)}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
