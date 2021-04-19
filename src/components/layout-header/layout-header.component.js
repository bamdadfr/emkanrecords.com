import React from 'react'
import Image from 'next/image'
import styles from './layout-header.module.scss'

function LayoutHeaderComponent () {

    return (
        <header className={styles.container}>
            <Image
                alt="logo"
                src="/assets/header_bright.png"
                layout="intrinsic"
                width={360}
                height={128}
            />
        </header>
    )

}

export default LayoutHeaderComponent