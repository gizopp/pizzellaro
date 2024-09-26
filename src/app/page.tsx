import styles from "./page.module.scss";
import Image from "next/image";
import logoImg from "/public/logo.svg";
import Link from "next/link";

export default async function Page() {
  return (
    <>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo" />

        <section className={styles.login}>
          <form>
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
            <button type="submit">Acessar</button>
          </form>
          <Link href="/signup" className={styles.text}>
            Não possui uma conta? Cadastre-se
          </Link>
        </section>
      </div>
    </>
  );
}
