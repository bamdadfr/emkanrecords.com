import React, { Fragment } from 'react'
import AnimationFadeComponent from '@/components/animation-fade/animation-fade.component'
import ReleaseBodyComponent from '@/components/release-body/release-body.component'
import { ReleasesData } from '@/data/releases.data'
import { Helmet } from 'react-helmet'
import { MetaData } from '@/data/meta.data'
import styles from './releases.module.scss'

/**
 * @function
 * @description page: releases
 * @returns {React.ReactNode} - react component
 */
export default function Releases () {

    return (
        <>
            <Helmet
                title="Releases | Emkan Records"
                meta={[
                    ...MetaData,
                    {
                        'property': 'og:description',
                        'content': 'releases',
                    },
                ]}
            />
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