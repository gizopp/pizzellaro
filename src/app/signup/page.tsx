import styles from "../page.module.scss";
import Image from "next/image";
import logoImg from "/public/logoPizzellaro.svg";
import Link from "next/link";
import { api } from "@/services/app";
import { redirect } from "next/navigation";
import Input from "../components/input/input";
import Button from "../components/button";
import toast from "react-hot-toast";

export default function Signup() {
  async function handleRegister(formData: FormData) {
    "use server";

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    if (!name || !email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      await api.post("/users", {
        name,
        email,
        password,
      });

      toast.success("User registered successfully!");
    } catch (err) {
      console.error("Error registering user: " + err);
      return;
    }

    redirect("/");
  }

  return (
    <>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo" />

        <section className={styles.login}>
          <h1>Create your account</h1>
          <form action={handleRegister}>
            <Input
              type="text"
              required
              name="name"
              placeholder="John Pizzellaro"
            />
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
            <Button name="Register" />
          </form>
          <Link href="/" className={styles.text}>
            Already have an account? Log in
          </Link>
        </section>
      </div>
    </>
  );
}
