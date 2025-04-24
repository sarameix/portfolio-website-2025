import Link from 'next/link';
import styles from './BlockAbout.module.scss';

export default function BlockAbout() {
  return (
    <section className={styles.about} id={'about'}>
      <h2>About Me</h2>
      <p>
        I am a software engineer with a passion for creating user-friendly applications. I have experience in both
        front-end and back-end development, and I enjoy working on projects that challenge me to learn new technologies.
        I am always looking for opportunities to grow and improve my skills, and I am excited to work on projects that
        make a positive impact on people's lives. In my free time, I enjoy hiking, photography, and exploring new
        places. I believe that a healthy work-life balance is important for creativity and productivity, and I strive to
        maintain that balance in my own life. I am a strong advocate for diversity and inclusion in the tech industry,
        and I believe that diverse teams create better products. I am committed to creating an inclusive environment
        where everyone feels valued and respected. I am always open to new opportunities and collaborations, so feel
        free to reach out if you would like to connect!
      </p>
    </section>
  );
}
