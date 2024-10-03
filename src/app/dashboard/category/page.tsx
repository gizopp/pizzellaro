"use client";
import { useRef } from "react";
import { toast } from "react-hot-toast";
import Button from "../../components/button";
import Input from "../../components/input/input";
import styles from "./page.module.scss";
import { CategoryCreate } from "@/app/api/category/CategoryCreate";
import { redirect } from "next/navigation";

export default function Categories() {
  const categoryForm = useRef<HTMLFormElement>(null);

  const handleRegisterCategory = async (formData: FormData) => {
    try {
      await CategoryCreate(String(formData.get("name")));
      toast.success("Category registered successfully!");
      redirect("/dashboard");
    } catch (error) {
      console.error("Error registering category:", error);
    }
  };

  return (
    <main className={styles.container}>
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
