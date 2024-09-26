import styles from "../page.module.scss";
import Image from "next/image";
import logoImg from "/public/logo.svg";
import Link from "next/link";
import { api } from "@/services/app";
import { redirect } from "next/navigation";

export default function Signup() {
  async function handleRegister(formData: FormData) {
    "use server";

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    if (!name || !email || !password) {
      console.log("Preencha todos os campos");
      return;
    }

    try {
      await api.post("/users", {
        name,
        email,
        password,
      });

      console.log("Usuário cadastrado com sucesso!");
    } catch (err) {
      console.log("Erro ao cadastrar usuário: " + err);
    }

    redirect("/");
  }

  return (
    <>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo" />

        <section className={styles.login}>
          <h1>Criando sua conta</h1>
          <form action={handleRegister}>
            <input
              type="text"
              required
              name="name"
              placeholder="João Pizzellaro"
              className={styles.input}
            />
            <input
              type="email"
              required
              name="email"
              placeholder="joao@pizzellaro.com"
              className={styles.input}
            />
            <input
              type="password"
              required
              name="password"
              placeholder="********"
              className={styles.input}
            />
            <button type="submit">Cadastrar</button>
          </form>
          <Link href="/" className={styles.text}>
            Já possui uma conta? Faça login
          </Link>
        </section>
      </div>
    </>
  );
}
