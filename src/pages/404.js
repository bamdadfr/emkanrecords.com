import React from 'react'
import { DefaultLayout } from '../layouts/default/default.layout'

/**
 * @returns {React.ReactElement} react component
 */
export default function NotFoundPage () {

    return (
        <>
            <DefaultLayout>
                <h1>
                    Page Not Found
                </h1>
            </DefaultLayout>
        </>
    )

}