import styles from './layout-footer.module.scss'

export default function LayoutFooter () {

    return (
        <footer className={styles.container}>
            Made by&nbsp;
            <a
                href="https://bamdadsabbagh.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                Bamdad Sabbagh
            </a>
        </footer>

    )

}
