import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { useActiveLinkComponent } from './hooks/use-active-link-component'
import styles from './active-link.component.module.scss'

const propTypes = {
    'href': PropTypes.string.isRequired,
    'text': PropTypes.string.isRequired,
}

/**
 * @param {object} props react props
 * @param {string} props.href url
 * @param {string} props.text text
 * @returns {React.ReactElement} react component
 */
export function ActiveLinkComponent ({
    href,
    text,
}) {

    const { active } = useActiveLinkComponent (href)

    return (
        <Link href={href}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
                <button className={active ? styles.active : null} type="button">
                    {text}
                </button>
            </a>
        </Link>
    )

}

ActiveLinkComponent.propTypes = propTypes