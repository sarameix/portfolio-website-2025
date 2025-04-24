import Link from 'next/link';
import styles from './NavBar.module.scss';

export default function NavBar() {
  return (
    <section className={styles.navBar}>
      <Link className={styles.logo} href={'#'} />
      <article className={styles.navLinks}>
        <Link href='#work'>Work</Link>
        <Link href='#about'>About</Link>
        <Link href='#contact'>Contact</Link>
      </article>
    </section>
  );
}
