import React, { SelectHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface Option {
  value: string;
  label: string;
}

interface InputSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: Option[];
}

const InputSelect: React.FC<InputSelectProps> = ({
  label,
  options,
  ...props
}) => {
  return (
    <div className={styles.inputContainer}>
      {label && <label className={styles.label}>{label}</label>}
      <select className={styles.select} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputSelect;
