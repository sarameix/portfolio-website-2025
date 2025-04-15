import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        Sara Meixner | Web Developer
      </main>
      <footer className={styles.footer}>
        <Link href="https://github.com/sarameix">
          GitHub
        </Link>
      </footer>
    </div>
  );
}
