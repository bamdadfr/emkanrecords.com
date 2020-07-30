import React, { ReactElement } from 'react'
import { ReleasesData } from './releases.data'
import { ReleasesCard } from './releases.card'

export const Releases = (): ReactElement => {

    return (
        <>
            <div className="releases-container">

                {ReleasesData.map (release => (
                    <React.Fragment key={release.url}>
                        <ReleasesCard release={release} />
                    </React.Fragment>
                ))}

            </div>
        </>
    )

}
