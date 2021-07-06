import React from 'react'
import Image from 'next/image'
import styles from './layout-header.module.scss'
import headerImage from '../../../public/header/header_bright.png'

/**
 * @function
 * @name LayoutHeaderComponent
 * @description layout: header component
 * @returns {React.ReactNode} - react component
 */
export default function LayoutHeaderComponent () {

    return (
        <header className={styles.container}>
            <Image
                alt="logo"
                src={headerImage}
                layout="intrinsic"
                width={360}
                height={128}
                placeholder="blur"
            />
        </header>
    )

}