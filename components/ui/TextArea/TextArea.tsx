import { forwardRef, TextareaHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./TextArea.module.css";

interface Props extends Omit<TextareaHTMLAttributes<any>, "onChange"> {
  label?: string;
  errorMessage?: string;
  customContainer?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
  const { className, label, children, errorMessage, customContainer, ...rest } =
    props;
  const textareaClassName = cn(
    styles.textarea,
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
      <textarea
        id={label || "textarea"}
        className={textareaClassName}
        ref={ref}
        {...rest}
      />
      {errorMessage && <p className={styles.error_text}>{errorMessage}</p>}
    </div>
  );
});

TextArea.displayName = "TextArea";

export default TextArea;
