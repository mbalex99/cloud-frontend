import * as React from 'react';
import { Button } from 'antd';

import {
    Router,
    Route,
    Link
} from 'react-router-dom'

import "./realm-theme.less";

const reactLogo = require("./assets/img/logo.svg");

import { LandingScene } from './scenes/landing/LandingScene'
import { LoginScene } from './scenes/login/LoginScene'
import { ProjectsScene } from './scenes/projects/ProjectsScene'
import { Redirect, Switch } from 'react-router';

import { createBrowserHistory } from 'history'
const history = createBrowserHistory()

export class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={LoginScene} />
                        <Route path="/login" component={LoginScene} />
                        <Route path="/projects/:projectId?" component={ProjectsScene} />
                    </Switch>
                </Router>
            </div>
        );
    }
}
