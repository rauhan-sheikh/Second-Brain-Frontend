import type { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
  fullWidth?: boolean;
  loading?: boolean;
}

const variantStyles = {
  primary: "bg-primary hover:bg-primary-dark text-white",
  secondary: "bg-secondary text-secbuttontext hover:bg-secondary-dark",
};

const defaultStyles =
  "py-2 px-4 rounded-md font-light flex items-center justify-center";

export function Button({
  variant,
  text,
  startIcon,
  endIcon,
  onClick,
  fullWidth = false,
  loading = false,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${defaultStyles} ${variantStyles[variant]} ${
        fullWidth ? "w-full" : ""
      } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
      disabled={loading}
    >
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {text}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </button>
  );
}
