import React from "react";
import { useField } from "formik";
import { ErrorMessage } from "formik";
import ErrorIcon from "@mui/icons-material/Error";

import "./MainForm.scss";

interface formProps {
  label: string;
  icon?: string;
  name: string;
  type?: string;
  endIcon?: string;
  readOnly?: boolean;
  InputProps?: any;
}

const FormField: React.FC<formProps> = (props) => {
  let classOfLogo = "margin grey-color";
  const [field, meta] = useField<string | undefined>(props);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <div className="form-wrapper">
      <span
      id='labelInput'
        className={`secondary-title ${
          meta.touched && meta.error ? "error-color" : ""
        } `}
      >
        {props.label}
      </span>
      <div
        className={`input-container ${
          meta.touched && meta.error ? "error-border" : ""
        } `}
      >
        <input
          // type={inputType}
          className="input-control"
          {...field}
          {...props}
        />

        {meta.touched && meta.error ? (
          <ErrorIcon className="error-color margin" />
        ) : null}
      </div>

      {
        <ErrorMessage
          component="small"
          className="secondary-title error-color error-position"
          name={props.name}
        />
      }
    </div>
  );
};

export default FormField;
