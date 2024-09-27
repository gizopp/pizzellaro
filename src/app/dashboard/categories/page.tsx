import styles from "./page.module.scss";

export default function Categories() {
  return (
    <main className={styles.container}>
      <h1>New Category</h1>
      <form className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Category Name, example: Pizzas"
          required
          className={styles.input}
        />
        <button>Register</button>
      </form>
    </main>
  );
}
