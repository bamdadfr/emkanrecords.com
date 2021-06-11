import React from 'react'
import { shallow } from 'enzyme'
import LayoutNavComponent from './layout-nav.component'

describe ('LayoutNavComponent', () => {

    const component = <LayoutNavComponent />

    it ('should mount', () => {

        expect (shallow (component).exists ()).toBe (true)
    
    })

})