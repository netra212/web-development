// Interface allows me to add the types of specific components.
type Variants = "primary" | "secondary";

interface ButtonProps {
  variant: Variants;
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: any;
  endIcon?: any;
  onClick: () => void;
}

const variantStyles = {
  primary: " bg-purple-600 text-white",
  secondary: "bg-purple-400 text-purple-600",
};

const sizeStyles = {
  sm: "py-1 px-2 text-sm rounded-xl",
  md: "py-2 px-4 text-md rounded-md",
  lg: "py-4 px-6 text-lg rounded-lg",
};

const defaultStyles = "rounded-md flex";

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${
        variantStyles[props.variant]
      } ${defaultStyles} ${sizeStyles}`}
    >
      {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null}
      {props.text}
      {props.endIcon}
    </button>

  );
};

<Button
  endIcon={"+"}
  variant="primary"
  size="md"
  onClick={() => {}}
  text={"text"}
  startIcon={"-"}
></Button>;
