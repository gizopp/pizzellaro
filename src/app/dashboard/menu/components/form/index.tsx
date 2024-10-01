"use client";

import styles from "./styles.module.scss";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Input from "@/app/components/input";
import { InputImage } from "@/app/components/inputImage";

export function Form() {
  const [image, setImage] = useState<File>();

  const handleImageChange = (image: File) => {
    setImage(image);
  };

  return (
    <main className={styles.container}>
      <Toaster />
      <h1>New Product</h1>
      <form className={styles.form} action="">
        <label className={styles.labelImage}>
          <InputImage onImageChange={handleImageChange} />
          <Input
            type="email"
            required
            name="email"
            placeholder="john@pizzellaro.com"
          />
        </label>
      </form>
    </main>
  );
}
