import React, { ReactElement } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './app.styles.css'
import { AnimationSpring } from './animation.spring'
import { AppMenu } from './app.menu'
import { Releases } from './releases'
import { About } from './about'

const Fallback = (): ReactElement => {

    return (
        <AnimationSpring payload={(
            <>
                Loading...
            </>
        )}
        />
    )

}

export const App = (): ReactElement => {

    return (
        <>
            <BrowserRouter>

                <AnimationSpring payload={
                    <div className="header-logo" />
                }
                />

                <div className="page">
                    <div className="container">

                        <AppMenu />

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
