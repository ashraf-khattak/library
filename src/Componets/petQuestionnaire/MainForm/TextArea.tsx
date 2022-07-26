import React from "react";
import { useField } from "formik";
import { ErrorMessage } from "formik";
import ErrorIcon from "@mui/icons-material/Error";
import Grid from "@mui/material/Grid";
import "./MainForm.scss";

interface formProps {
  label: string;
  icon?: string;
  name: string;
  placeholder?: string;
}

const TextArea: React.FC<formProps> = (props) => {
  const [field, meta] = useField<string | undefined>(props);
  return (
    <Grid item sm={12} className="form-wrapper">
      <span
        className={`secondary-title  ${
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
        <textarea className="input-control" {...field} {...props} />

        {meta.touched && meta.error ? (
          <ErrorIcon className="error-color margin" />
        ) : null}
      </div>

      {
        <ErrorMessage
          component="small"
          className="secondary-title error-color error-position error"
          name={props.name}
        />
      }
    </Grid>
  );
};

export default TextArea;
