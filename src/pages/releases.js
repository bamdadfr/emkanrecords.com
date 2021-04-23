import React, { Fragment } from 'react'
import AnimationFadeComponent from '@/components/animation-fade/animation-fade.component'
import ReleaseBodyComponent from '@/components/release-body/release-body.component'
import { ReleasesData } from '@/data/releases.data'
import { Helmet } from 'react-helmet'
import styles from './releases.module.scss'

export default function Releases () {

    return (
        <>
            <Helmet
                title="Releases | Emkan Records"
                meta={[
                    {
                        'property': 'og:title',
                        'content': 'Releases',
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