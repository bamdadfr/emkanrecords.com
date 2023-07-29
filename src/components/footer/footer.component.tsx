import styles from './footer.component.module.scss';

export function FooterComponent() {
  return (
    <>
      <footer className={styles.container}>
        Made by&nbsp;
        <a
          className={styles.link}
          href="https://www.bamdadsabbagh.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bamdad Sabbagh
        </a>
      </footer>
    </>
  );
}
