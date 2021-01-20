import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import { App } from './components/app'

const Root = (): React.ReactElement => (
    <>
        <App />
    </>
)

ReactDOM.render (
    <Root />,
    document.getElementById ('root'),
)
