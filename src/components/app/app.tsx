import React, { ReactElement } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './app.css'
import Spring from '../animations/spring'
import TopBar from './top-bar'
import About from '../about/about'

const Releases = React.lazy (() => import ('../releases/releases'))

const Fallback = (): ReactElement => {

    return (
        <Spring payload={(
            <>
                Loading...
            </>
        )}
        />
    )

}

export default (): ReactElement => {

    return (
        <>
            <BrowserRouter>

                <Spring payload={
                    <div className="header-logo" />
                }
                />

                <div className="page">
                    <div className="container">

                        <TopBar />

                        <div className="main-container">
                            <main className="main">
                                <React.Suspense fallback={<Fallback />}>
                                    <Switch>
                                        <Route exact path="/" component={Releases} />
                                        <Route exact path="/about" component={About} />
                                    </Switch>
                                </React.Suspense>
                            </main>
                        </div>

                    </div>
                </div>

            </BrowserRouter>
        </>
    )

}
