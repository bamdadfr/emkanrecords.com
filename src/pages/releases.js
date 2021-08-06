import React, { Fragment } from 'react'
import { MetaComponent } from '../components/meta/meta.component'
import { ReleaseComponent } from '../components/release/release.component'
import { ReleasesData } from '../app/data/releases.data'
import styles from './releases.module.scss'
import { DefaultLayout } from '../layouts/default/default.layout'

/**
 * @returns {React.ReactElement} react component
 */
export default function Releases () {

    return (
        <>
            <MetaComponent title="Releases | Emkan Records"/>
            <DefaultLayout customMeta>
                <h1 style={{ 'display': 'none' }}>
                    releases
                </h1>
                <div className={styles.container}>
                    {ReleasesData.map ((release) => (
                        <Fragment key={release.id}>
                            <ReleaseComponent
                                id={release.id}
                                artist={release.artist}
                                name={release.name}
                                url={release.url}
                                image={release.image}
                            />
                        </Fragment>
                    ))}
                </div>
            </DefaultLayout>
        </>
    )

}