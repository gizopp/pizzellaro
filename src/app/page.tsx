import styles from "./page.module.scss";
import Image from "next/image";
import logoImg from "/public/logoPizzellaro.svg";
import Link from "next/link";
import { redirect } from "next/navigation";
import { api } from "@/services/app";
import { cookies } from "next/headers";
import Input from "./components/input";
import Button from "./components/button";

export default async function Page() {
  async function handleLogin(formData: FormData) {
    "use server";

    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      console.log("Please fill in all fields");
      return;
    }

    try {
      const response = await api.post("/session", {
        email,
        password,
      });

      if (!response.data.token) {
        console.log("Invalid credentials");
        return;
      }

      cookies().set("session", response.data.token, {
        maxAge: 60 * 60 * 24 * 30 * 1000,
        path: "/",
        httpOnly: false,
        secure: process.env.NODE_ENV === "production",
      });
      console.log("User registered successfully!");
    } catch (err) {
      console.log("Error registering user: " + err);
      return;
    }

    redirect("/dashboard");
  }

  return (
    <>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo" />

        <section className={styles.login}>
          <form action={handleLogin}>
            <Input
              type="email"
              required
              name="email"
              placeholder="john@pizzellaro.com"
            />
            <Input
              type="password"
              required
              name="password"
              placeholder="********"
            />
            <Button name="Login" />
          </form>
          <Link href="/signup" className={styles.text}>
            Don't have an account? Sign up
          </Link>
        </section>
      </div>
    </>
  );
}
