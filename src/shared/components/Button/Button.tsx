import { PropsWithChildren } from "react";
import "./Button.scss";

interface ButtonProps {
  variant: "solid" | "outline";
}

const Button = ({
  variant,
  children,
}: PropsWithChildren<ButtonProps>): React.ReactElement => {
  return (
    <button className={`button button--${variant}`} type="submit">
      {children}
    </button>
  );
};

export default Button;
