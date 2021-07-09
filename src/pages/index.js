import React from 'react'
import Head from 'next/head'
import { FaAt } from 'react-icons/fa'
import AnimationFadeComponent from '@/components/animation-fade/animation-fade.component'
import styles from './index.module.scss'

/**
 * @function
 * @description page: index
 * @returns {React.ReactNode} - react component
 */
export default function Index () {

    return (
        <>
            <Head>
                <title>
                    About | Emkan Records
                </title>
            </Head>
            <AnimationFadeComponent>
                <h1>
                    digital record label from France.
                </h1>
                <p>
                    for more info, or any other concern<br/>
                    please email<br/>
                    <span className={styles.emailPrefix}>
                        hello
                    </span>
                    <FaAt className={styles.emailAt}/>
                    emkanrecords.com
                </p>

                <p>
                    feel free to send us your demo at
                    <br/>
                    <span className={styles.emailPrefix}>
                        demo
                    </span>
                    <FaAt className={styles.emailAt}/>
                    emkanrecords.com
                    <br/>
                    soundcloud links only
                </p>
            </AnimationFadeComponent>
        </>
    )

}