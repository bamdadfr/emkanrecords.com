import React, { Fragment } from 'react'
import Head from 'next/head'
import AnimationFadeComponent from '@/components/animation-fade/animation-fade.component'
import ReleaseBodyComponent from '@/components/release-body/release-body.component'
import { ReleasesData } from '@/data/releases.data'
import styles from './releases.module.scss'

/**
 * @function
 * @description page: releases
 * @returns {React.ReactNode} - react component
 */
export default function Releases () {

    return (
        <>
            <Head>
                <title>
                    Releases | Emkan Recorsd
                </title>
                <meta property="og:description" content="releases"/>
            </Head>
            <AnimationFadeComponent>
                <h1
                    style={{ 'display': 'none' }}
                >
                    releases
                </h1>
                <div className={styles.container}>
                    {
                        ReleasesData.map (
                            (release) => (
                                <Fragment key={release.id}>
                                    <ReleaseBodyComponent>
                                        {release}
                                    </ReleaseBodyComponent>
                                </Fragment>
                            ),
                        )
                    }
                </div>
            </AnimationFadeComponent>
        </>
    )

}