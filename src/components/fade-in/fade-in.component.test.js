import React from 'react'
import { render, screen } from '@testing-library/react'
import { FadeInComponent } from './fade-in.component'

const string = 'this is the content of my test'
const Children = () => <span aria-label="children">{string}</span>

describe ('FadeInComponent', () => {

    describe ('container', () => {

        it ('should be in the document', () => {

            const { container } = render (<FadeInComponent><Children/></FadeInComponent>)

            expect (container).toBeInTheDocument ()

        })

        it ('should be visible', () => {

            const { container } = render (<FadeInComponent><Children/></FadeInComponent>)

            expect (container).toBeVisible ()

        })

        it ('should not be empty', () => {

            const { container } = render (<FadeInComponent><Children/></FadeInComponent>)

            expect (container).not.toBeEmptyDOMElement ()

        })

    })

    describe ('children', () => {

        it ('should display the string content', () => {

            render (<FadeInComponent><Children/></FadeInComponent>)

            const children = screen.getByLabelText ('children')

            expect (children).toHaveTextContent (string)

        })
    
    })

})