import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href='https://github.com/sarameix'>GitHub</Link>
      <Link href='https://www.linkedin.com/in/sarameixner/'>LinkedIn</Link>
      <Link href='https://vimeo.com/sarameixner'>Vimeo</Link>
    </footer>
  );
}
