import Link from 'next/link';
import styles from './BlockWork.module.scss';

export default function BlockWork() {
  const workData = [
    {
      name: 'Leftover',
      description:
        'Leftover is a website that helps users keep track of food in their pantry and view recipes based on what they have. The front-end was created using React, and the back-end was created with .NET.',
      image: '/images/leftover_thumbnail.png',
      className: styles.leftover,
      siteLink: '/',
      frontEndLink: '/',
      backEndLink: '/',
    },
    {
      name: 'Potluck',
      description:
        'Potluck is a website for home cooks to post detailed recipes to share with their friends and family. Both the front-end and back-end were created using Express.',
      image: '/images/potluck_thumbnail.png',
      className: styles.potluck,
      siteLink: '/',
      repoLink: '/',
    },
    {
      name: 'TV Tracker',
      description:
        'T.V. Tracker. is website for people to track their progress on T.V. shows they are watching. The front-end was created using React, and the back-end was created with MongoDB.',
      image: '/images/tvtracker_thumbnail.png',
      className: styles.tvtracker,
      siteLink: '/',
      frontEndLink: '/',
      backEndLink: '/',
    },
  ];

  return (
    <section className={styles.work} id={'work'}>
      <h2>My Work</h2>
      <div className={styles.workContainer}>
        {workData.map((work, index) => (
          <article key={index} className={work?.className}>
            <img src={work?.image} alt={`${work?.name} Thumbnail`} />
            <h3>{work?.name}</h3>
            <p>{work?.description}</p>
            <div className={styles.links}>
              {work?.siteLink && (
                <Link href={work?.siteLink} target='_blank' rel='noopener noreferrer'>
                  Live Site
                </Link>
              )}
              {work?.frontEndLink && (
                <Link href={work?.frontEndLink} target='_blank' rel='noopener noreferrer'>
                  Front-End Repo
                </Link>
              )}
              {work?.backEndLink && (
                <Link href={work?.backEndLink} target='_blank' rel='noopener noreferrer'>
                  Back-End Repo
                </Link>
              )}
              {work?.repoLink && (
                <Link href={work?.repoLink} target='_blank' rel='noopener noreferrer'>
                  Project Repo
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
