import React, { TextareaHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface InputTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const InputTextArea: React.FC<InputTextAreaProps> = ({ label, ...props }) => {
  return (
    <div className={styles.textareaContainer}>
      {label && <label className={styles.label}>{label}</label>}
      <textarea className={styles.textarea} {...props} />
    </div>
  );
};

export default InputTextArea;