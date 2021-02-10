import { useRouter } from 'next/router'
import styles from '@/components/layout-nav-link.module.scss'
import Link from 'next/link'

export default function LayoutNavLink ({ href, text }) {

    const router = useRouter ()
    const activeClass = router.pathname === href ? styles.active : null

    return (
        <Link className={styles.link} href={href}>
            <a>
                <button className={activeClass} type="button">
                    {text}
                </button>
            </a>
        </Link>
    )

}

