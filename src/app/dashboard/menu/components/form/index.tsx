"use client";
import styles from "./styles.module.scss";
import { useState } from "react";
import toast from "react-hot-toast";
import { InputImage } from "@/app/components/input/inputImage";
import Input from "@/app/components/input/input";
import InputSelect from "@/app/components/input/inputSelect";
import InputTextArea from "@/app/components/input/inputTextArea";
import Button from "@/app/components/button";
import { Category } from "@/app/types/category";
import { api } from "@/services/app";
import { getCoookieClient } from "@/lib/cookieClient";
import { redirect } from "next/navigation";

interface FormProps {
  categories: Category[];
}

export function Form({ categories }: FormProps) {
  const [image, setImage] = useState<File | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleRegisterProduct = async (formData: FormData) => {
    const category = formData.get("category");
    const name = formData.get("name");
    const price = formData.get("price");
    const description = formData.get("description");

    if (!category || !name || !price || !description || !image) {
      toast.error("All fields are required!");
      return;
    }

    const productData = new FormData();

    productData.append("category_id", category);
    productData.append("name", name);
    productData.append("price", price);
    productData.append("description", description);
    productData.append("file", image);
    const token = getCoookieClient();

    await api.post("/product", productData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    toast.success("Product registered successfully");
    redirect("/dashboard");
  };

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
      <h1>New Product</h1>
      <form className={styles.form} action={handleRegisterProduct}>
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
