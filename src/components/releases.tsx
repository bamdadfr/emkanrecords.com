import React, { ReactElement, Fragment } from 'react'
import { ReleasesData } from './releases.data'
import { ReleasesImage } from './releases.image'
import { ReleasesIcons } from './releases.icons'
import { ReleasesText } from './releases.text'

export const Releases = (): ReactElement => (
    <>
        <div className="releases-container">

            {ReleasesData.map (release => (
                <Fragment key={release.url}>
                    <div className="releases-item">
                        <ReleasesImage release={release} />
                        <ReleasesText release= {release} />
                        <ReleasesIcons release={release} />
                    </div>
                </Fragment>
            ))}

        </div>
    </>
)
