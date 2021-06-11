import React from 'react'
import { shallow } from 'enzyme'
import LayoutComponent from './layout.component'

describe ('LayoutComponent', () => {

    const component = <LayoutComponent><span>child</span></LayoutComponent>

    it ('should mount', () => {

        expect (shallow (component).exists ()).toBe (true)

    })

})