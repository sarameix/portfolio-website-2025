import Link from 'next/link';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={`${styles.section} ${styles.hero}`}>
          <div className={styles.heroImage}>
            <img src={'./images/cover-photo.jpg'} alt={'Sara Meixner Cover Photo'} />
            <div className={styles.overlay} />
          </div>
          <h1>Sara Meixner | Web Developer</h1>
        </section>
      </main>
      <footer className={styles.footer}>
        <Link href='https://github.com/sarameix'>GitHub</Link>
      </footer>
    </div>
  );
}
