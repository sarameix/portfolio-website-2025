import styles from './BlockHero.module.scss';

export default function BlockHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroImage}>
        <img src={'./images/cover-photo.jpg'} alt={'Sara Meixner Cover Photo'} />
        <div className={styles.overlay} />
      </div>
      <article>
        <h1>Sara Meixner</h1>
        <h2>Web Developer</h2>
      </article>
    </section>
  );
}
