"use client";
import styles from "./styles.module.scss";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { InputImage } from "@/app/components/inputImage";
import Input from "@/app/components/input";
import InputSelect from "@/app/components/inputSelect";
import InputTextArea from "@/app/components/inputTextArea";
import Button from "@/app/components/button";
import { Category } from "@/app/types/category";

interface FormProps {
  categories: Category[];
}

export function Form({ categories }: FormProps) {
  const [image, setImage] = useState<File | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleImageChange = (image: File | null) => {
    setImage(image);
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  const categoryOptions = categories.map((category) => ({
    value: category.id,
    label: category.name,
  }));

  return (
    <main className={styles.container}>
      <Toaster />
      <h1>New Product</h1>
      <form className={styles.form} action="">
        <label className={styles.labelImage}>
          <InputImage onImageChange={handleImageChange} />
          <div className={styles.inputContainer}>
            <InputSelect
              name="category"
              options={categoryOptions}
              value={selectedCategory}
              onChange={handleCategoryChange}
              placeholder="Select a category..."
            />
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
            <InputTextArea
              name="description"
              placeholder="Product description..."
              required
            />
            <Button name="Register" />
          </div>
        </label>
      </form>
    </main>
  );
}
