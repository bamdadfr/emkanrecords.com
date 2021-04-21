import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './layout-nav-link.module.scss'

export default function LayoutNavLinkComponent ({ href, text }) {

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

LayoutNavLinkComponent.propTypes = {
    'href': PropTypes.string.isRequired,
    'text': PropTypes.string.isRequired,
}