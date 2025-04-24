import NavBar from './components/NavBar';
import BlockHero from './components/blocks/BlockHero';
import BlockWork from './components/blocks/BlockWork';
import BlockAbout from './components/blocks/BlockAbout';
import BlockContact from './components/blocks/BlockContact';
import Footer from './components/Footer';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <NavBar />
        <BlockHero />
        <BlockWork />
        <BlockAbout />
        <BlockContact />
      </main>
      <Footer />
    </div>
  );
}
