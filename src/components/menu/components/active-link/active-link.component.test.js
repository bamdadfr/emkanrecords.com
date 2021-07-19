import React from 'react'
import { render } from '@testing-library/react'
import { ActiveLinkComponent } from './active-link.component'

jest.mock ('next/router', () => ({

    useRouter () {

        return {
            'route': '/',
            'pathname': '/match',
            'query': '',
            'asPath': '',
        }

    },
}))

describe ('ActiveLinkComponent', () => {

    describe ('container', () => {

        it ('should be in the document', () => {

            const { container } = render (<ActiveLinkComponent href="http://localhost/mylink" text="my text"/>)

            expect (container).toBeInTheDocument ()

        })

        it ('should be visible', () => {

            const { container } = render (<ActiveLinkComponent href="http://localhost/mylink" text="my text"/>)

            expect (container).toBeVisible ()

        })

    })

    describe ('button', () => {

        it ('should apply an active class', () => {
        })

    })

})