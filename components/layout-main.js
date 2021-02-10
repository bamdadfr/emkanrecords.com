import styles from './layout-main.module.scss'

export default function LayoutMain ({ children }) {

    return (
        <main className={styles.container}>
            {children}
        </main>
    )

}