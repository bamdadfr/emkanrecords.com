import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './layout-nav-link.module.scss'

export default function LayoutNavLink ({ href, text }) {

    const router = useRouter ()
    const activeClass = router.pathname === href ? styles.active : null

    return (
        <Link href={href}>
            <a>
                <button className={activeClass} type="button">
                    {text}
                </button>
            </a>
        </Link>
    )

}

