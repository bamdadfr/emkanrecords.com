import Image from 'next/image'
import styles from './layout-header.module.scss'

export default function LayoutHeader () {

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
