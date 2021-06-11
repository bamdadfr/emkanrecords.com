import React from 'react'
import { shallow } from 'enzyme'
import LayoutMetaComponent from './layout-meta.component'

describe ('LayoutMetaComponent', () => {

    const component = <LayoutMetaComponent />

    it ('should mount', () => {

        expect (shallow (component).exists ()).toBe (true)
    
    })

})