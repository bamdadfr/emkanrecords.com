import React from 'react'
import { render as defaultRender } from '@testing-library/react'
import { ReleaseComponent } from './release.component'

const render = () => {

    const image = {
        'src': 'src',
        'width': 370,
        'height': 370,
    }

    const { container } = defaultRender (
        <ReleaseComponent
            artist="artist"
            id={0}
            name="name"
            url="url"
            image={image}
        />,
    )

    return {
        container,
    }

}

describe ('ReleaseComponent', () => {

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