"use client";
import React, { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.scss";
import { useFormStatus } from "react-dom";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
}

const Button: React.FC<ButtonProps> = ({ name }) => {
  const { pending } = useFormStatus();

  return (
    <button className={styles.button} type="submit" disabled={pending}>
      {pending ? "..." : name}
    </button>
  );
};

export default Button;
