import { Fragment } from 'react'
import Head from 'next/head'
import AnimationFade from '@/components/animation-fade'
import ReleaseBody from '@/components/release-body'
import ReleasesData from '@/data/releases'
import styles from './releases.module.scss'

export default function Releases () {

    return (
        <>
            <Head>
                <title>
                    Releases | Emkan Records
                </title>
            </Head>
            <AnimationFade>
                <h1
                    style={{ 'display': 'none' }}
                >
                    releases
                </h1>
                <div className={styles.container}>
                    {ReleasesData.map (release => (
                        <Fragment key={release.id}>
                            <ReleaseBody>
                                {release}
                            </ReleaseBody>
                        </Fragment>
                    ))}
                </div>
            </AnimationFade>
        </>
    )

}