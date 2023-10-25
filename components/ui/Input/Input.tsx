import { InputHTMLAttributes, forwardRef } from "react";
import cn from "classnames";
import styles from "./Input.module.css";

interface Props extends Omit<InputHTMLAttributes<any>, "onChange"> {
  label?: string;
  errorMessage?: string;
  customContainer?: string;
}

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { className, label, children, errorMessage, customContainer, ...rest } =
    props;
  const inputClassName = cn(
    styles.input,
    { [styles.error]: errorMessage },
    className
  );

  const customContainerClass = cn(styles.root, customContainer);
  return (
    <div className={customContainerClass}>
      {label && (
        <label htmlFor={label} className={styles.label}>
          {label}
        </label>
      )}
      <input
        id={label || "input"}
        className={inputClassName}
        ref={ref}
        {...rest}
      />
      {errorMessage && <p className={styles.error_text}>{errorMessage}</p>}
    </div>
  );
});

Input.displayName = "Input";

export default Input;
