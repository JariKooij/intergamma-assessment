import { cn } from "@/utils/cn";

interface IButtonProps extends React.ComponentProps<"button"> {
  variant?: "primary" | "secondary";
  size?: "default" | "icon";
}

const Button = ({
  variant = "primary",
  size = "default",
  className,
  children,
  ...props
}: IButtonProps) => {
  return (
    <button
      className={cn(
        "h-10 shrink-0 cursor-pointer rounded-md border-2 px-3 py-1.5 transition-all hover:opacity-90 [&_svg:not([class*='size-'])]:size-4",
        {
          "bg-primary border-primary text-white": variant === "primary",
          "hover:bg-secondary border-secondary": variant === "secondary",
          "px-2.5": size === "icon",
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
