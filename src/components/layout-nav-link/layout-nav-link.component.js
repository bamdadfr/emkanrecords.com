import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './layout-nav-link.module.scss'

const propTypes = {
    'href': PropTypes.string.isRequired,
    'text': PropTypes.string.isRequired,
}

/**
 * @function
 * @name LayoutNavLinkComponent
 * @description layout: nav link component
 * @param {*} props - react component props
 * @param {string} props.href - URL to check if active
 * @param {string} props.text - text of <a>
 * @returns {React.ReactNode} - react component
 */
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

LayoutNavLinkComponent.propTypes = propTypes