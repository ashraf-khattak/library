import React from "react";
import { ErrorMessage, useField, Field } from "formik";
import ErrorIcon from "@mui/icons-material/Error";
interface selectProps {
  control: string;
  label: string;
  name: string;
  options: {
    key: string;
    value: string;
  }[];
  // onSelect: (event: React.FormEvent<HTMLSelectElement>) => void,
  // options={dropdownOptions}
}
export const Select: React.FC<selectProps> = (props) => {
  // const { label, name, options, ...rest } = props;
  const [field, meta] = useField<string | undefined>(props);

  return (
    <div className="form-wrapper">
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
        <Field
          as="select"
          id={props.name}
          // name={props.name}
          // className={`form-control shadow-none ${(props.options[0].value = ""
          //   ? "is-invalid"
          //   : "invalid")}`}
          className="input-control"
          {...field}
          {...props}
        >
          {meta.touched && meta.error ? (
            <ErrorIcon className="error-color margin" />
          ) : null}
          {props.options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.key}
              </option>
            );
          })}
        </Field>
        {/* <input
        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete="off"
      /> */}
      </div>
      <ErrorMessage component="div" name={props.name} className="error secondary-title error-color error-position" />
    </div>
  );
};
