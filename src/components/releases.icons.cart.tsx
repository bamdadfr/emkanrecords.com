import React, { ReactElement } from 'react'
import { FaShoppingCart } from 'react-icons/fa'

export const ReleasesIconsCart = (props: any): ReactElement => {

    const { release } = props

    return (
        <>
            <a
                href={release.url}
                className="releases-icons-cart"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${release.artist} - ${release.name} - Buy`}
            >
                <FaShoppingCart />
            </a>
        </>
    )

}