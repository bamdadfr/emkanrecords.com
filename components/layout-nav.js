import LayoutNavLink from '@/components/layout-nav-link'
import styles from './layout-nav.module.scss'

export default function LayoutNav () {

    return (
        <nav className={styles.container}>
            <LayoutNavLink href="/" text="About"/>
            <LayoutNavLink href="/releases" text="Releases"/>
        </nav>
    )

}
