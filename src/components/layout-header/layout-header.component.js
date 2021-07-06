import React from 'react'
import Image from 'next/image'
import styles from './layout-header.module.scss'

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
                src="/header/header_bright.png"
                layout="intrinsic"
                width={360}
                height={128}
            />
        </header>
    )

}