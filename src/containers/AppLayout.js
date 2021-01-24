import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Templates from './routes';

export default class AppLayout extends Component {
    render() {
        return (
            <div>
                HEADER
                <Switch>
                    { Templates.map((routes, index) => (
                        <Route
                            path={routes.path}
                            exact={true}
                            render={ props => <routes.template {...props} /> }
                        />
                    ))}

                </Switch>
            </div>

        );
    }
}
