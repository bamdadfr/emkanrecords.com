import React from 'react'
import { render as defaultRender } from '@testing-library/react'
import ReleasesPage from '../pages/releases'

const render = () => {

    const { container } = defaultRender (
        <ReleasesPage/>,
    )

    return {
        container,
    }

}

describe ('ReleasesPage', () => {

    describe ('container', () => {

        it ('should be defined and visible', () => {

            const { container } = render ()

            expect (container).toBeInTheDocument ()

            expect (container).toBeVisible ()

        })

        it ('should not be empty', () => {

            const { container } = render ()

            expect (container).not.toBeEmptyDOMElement ()

        })

    })

})