import * as React from 'react';
import { Button } from 'antd';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import "./realm-theme.less";

const reactLogo = require("./assets/img/logo.svg");

import { LandingScene } from './scenes/landing/LandingScene'
import { LoginScene } from './scenes/login/LoginScene'
import { ProjectsScene } from './scenes/projects/ProjectsScene'

export interface AppProps {
}

export class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Route exact path="/" component={LoginScene} />
                        <Route path="/login" component={LoginScene} />
                        <Route path="/projects" component={ProjectsScene} />
                    </div>
                </Router>
            </div>
        );
    }
}
