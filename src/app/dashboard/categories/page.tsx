import Button from "../components/button";
import Input from "../components/input";
import styles from "./page.module.scss";

export default function Categories() {
  return (
    <main className={styles.container}>
      <h1>New Category</h1>
      <form className={styles.form}>
        <Input
          type="text"
          name="name"
          placeholder="Category Name, example: Pizzas"
          required
        />
        <Button>Register</Button>
      </form>
    </main>
  );
}
