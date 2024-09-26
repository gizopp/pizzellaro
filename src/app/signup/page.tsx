import styles from "../page.module.scss";
import Image from "next/image";
import logoImg from "/public/logo.svg";
import Link from "next/link";

export default function Signup() {
  return (
    <>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo" />

        <section className={styles.login}>
          <h1>Criando sua conta</h1>
          <form>
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
