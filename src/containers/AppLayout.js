import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Templates from './routes';
import Header from './../components/Header';

export default class AppLayout extends Component {
    render() {
        return (
            <div id="main-wrapper">

                <div clasName="content-wrapper">
                    <Header />
                    <Switch>
                        { Templates.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={true}
                                render={ props => <route.template { ...props } /> }
                            />
                        ))}

                    </Switch>
                </div>
            </div>
        );
    }
}
