import React, { SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./styles.module.scss";

interface Option {
  value: string;
  label: string;
}

interface InputSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: Option[];
  placeholder?: string;
}

const InputSelect: React.FC<InputSelectProps> = ({
  label,
  options,
  placeholder = "Select an option...",
  value,
  ...props
}) => {
  return (
    <div className={styles.inputContainer}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.selectWrapper}>
        <select
          className={styles.select}
          {...props}
          value={value}
          data-placeholder={value === ""}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className={styles.icon} size={20} />
      </div>
    </div>
  );
};

export default InputSelect;
