"use client";

import styles from "./styles.module.scss";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { InputImage } from "@/app/components/inputImage";
import Input from "@/app/components/input";
import InputSelect from "@/app/components/inputSelect";

export function Form() {
  const [image, setImage] = useState<File>();

  const handleImageChange = (image: File) => {
    setImage(image);
  };

  const options = [
    { value: "1", label: "Pizzas" },
    { value: "2", label: "Drinks" },
  ];

  return (
    <main className={styles.container}>
      <Toaster />
      <h1>New Product</h1>
      <form className={styles.form} action="">
        <label className={styles.labelImage}>
          <InputImage onImageChange={handleImageChange} />
          <div className={styles.inputContainer}>
            <InputSelect name="category" options={options} value={"category"} />
            <Input
              type="text"
              name="name"
              placeholder="Product name..."
              required
            />
            <Input
              type="text"
              name="price"
              placeholder="Product price..."
              required
            />
            <Input
              type="text"
              name="description"
              placeholder="Product description..."
              required
            />
          </div>
        </label>
      </form>
    </main>
  );
}
