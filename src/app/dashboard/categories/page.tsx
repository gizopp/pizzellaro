"use client";
import { useRef } from "react";
import { Toaster, toast } from "react-hot-toast";
import Button from "../components/button";
import Input from "../components/input";
import styles from "./page.module.scss";
import { CategoryCreate } from "@/services/category/CategoryCreate";

export default function Categories() {
  const categoryForm = useRef<HTMLFormElement>(null);

  const handleRegisterCategory = async (formData: FormData) => {
    try {
      await CategoryCreate(String(formData.get("name")));
      toast.success("Category registered successfully!");
      categoryForm.current?.reset();
    } catch (error) {
      console.error("Error registering category:", error);
      toast.error("Failed to register category. Please try again.");
    }
  };

  return (
    <main className={styles.container}>
      <Toaster position="top-center" />
      <h1>New Category</h1>
      <form
        className={styles.form}
        action={handleRegisterCategory}
        ref={categoryForm}
      >
        <Input
          type="text"
          name="name"
          placeholder="Category Name, example: Pizzas"
          required
          style={{ marginBottom: "1rem" }}
        />
        <Button name="Register" type="submit" />
      </form>
    </main>
  );
}
