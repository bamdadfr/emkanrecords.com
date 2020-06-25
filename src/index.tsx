import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import 'normalize.css'
import App from './components/app/app'

const Root = (): React.ReactElement => {

    return (
        <>
            <App />
        </>
    )

}

ReactDOM.render (
    <Root />,
    document.getElementById ('root'),
)

serviceWorker.register ()
