"use client";
import Button from "../components/button";
import Input from "../components/input";
import styles from "./page.module.scss";
import { CategoryCreate } from "@/services/category/CategoryCreate";

export default function Categories() {
  const handleRegisterCategory = async (formData: FormData) => {
    try {
      const response = await CategoryCreate(String(formData.get("name")));
    } catch (error) {
      console.error("Error registering category:", error);
    }
  };

  return (
    <main className={styles.container}>
      <h1>New Category</h1>
      <form className={styles.form} action={handleRegisterCategory}>
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
