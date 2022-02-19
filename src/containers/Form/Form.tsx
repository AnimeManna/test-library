import React from "react";
import ValidationService from "../../service";
import { FormInterface } from "./interface";

export const Form: React.FC<FormInterface> = (props) => {
  const Validation = new ValidationService(props.params);
  return <div>{props.children}</div>;
};
