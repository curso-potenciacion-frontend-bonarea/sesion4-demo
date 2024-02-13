import { PropsWithChildren } from "react";
import "./Form.scss";

interface FormProps {
  variant?: "inline" | "vertical";
}

const Form = ({
  variant = "vertical",
  children,
}: PropsWithChildren<FormProps>): React.ReactElement => {
  return <form className={`form form--${variant}`}>{children}</form>;
};

export default Form;
