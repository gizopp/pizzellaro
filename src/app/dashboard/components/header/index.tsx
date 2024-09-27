import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";
import logoImg from "/public/logoPizzellaro.svg";
import { LogOutIcon } from "lucide-react";
import { deleteCookie } from "cookies-next";
import router from "next/router";

export default function Header() {
  const handleLogout = () => {
    deleteCookie("session", { path: "/" });
    router.replace("/");
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/dashboard">
          <Image
            alt="Pizzellaro Logo"
            src={logoImg}
            width={120}
            height={75}
            priority={true}
            quality={100}
          />
        </Link>
        <nav>
          <Link href="dashboard/categories">Categories</Link>
          <Link href="dashboard/products">Menu</Link>
          <form action={handleLogout}>
            <button>
              <LogOutIcon size={24} color="#fff" />
            </button>
          </form>
        </nav>
      </div>
    </header>
  );
}
