import type { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary" | "signout";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
  fullWidth?: boolean;
  loading?: boolean;
  className?: string;
  isDashboard?: boolean;
}

const variantStyles = {
  primary: "bg-primary hover:bg-primary-dark text-white",
  secondary: "bg-secondary text-secbuttontext hover:bg-secondary-dark",
  signout: "bg-red-500 text-white hover:bg-red-600",
};

const defaultStyles =
  "py-2 px-4 rounded-md font-normal flex items-center justify-center";

export function Button({
  variant,
  text,
  startIcon,
  endIcon,
  onClick,
  fullWidth = false,
  loading = false,
  className = "",
  isDashboard = false,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${defaultStyles} ${variantStyles[variant]} ${
        fullWidth ? "w-full" : ""
      } ${loading ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
      disabled={loading}
    >
      {startIcon && (
        <span className={`${text ? "md:mr-2" : ""}`}>{startIcon}</span>
      )}
      <span className={`${isDashboard ? "hidden md:inline" : ""}`}>{text}</span>
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </button>
  );
}
