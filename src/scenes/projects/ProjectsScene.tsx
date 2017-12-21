import * as React from 'react';

import { Layout, Icon } from 'antd';
const { Header, Content, Footer } = Layout;
import {
    BrowserRouter as Router,
    Route,
    RouteComponentProps
} from 'react-router-dom'

import { Sidebar } from './components/Sidebar'
import { ListScene } from './scenes/list/ListScene';
import { DataScene } from './scenes/data/DataScene'
import { Switch } from 'react-router';

interface ProjectsState {
    collapsed: boolean
}

const TRIGGER_STYLE = {
    fontSize: '18px',
    lineHeight: '64px',
    padding: '0 24px',
    cursor: 'pointer',
    transition: 'color .3s'
}

const PROJECTS_STYLE = {
    fontSize: '18px',
    lineHeight: '64px',
    padding: '0 24px',
    cursor: 'pointer',
    transition: 'color .3s'
}

const ACCOUNT_STYLE = {
    float: 'right',
    fontSize: '18px',
    lineHeight: '64px',
    padding: '0 24px',
    cursor: 'pointer',
    transition: 'color .3s'
}

const LOGOUT_STYLE = {
    float: 'right',
    fontSize: '18px',
    lineHeight: '64px',
    padding: '0 24px',
    cursor: 'pointer',
    transition: 'color .3s'
}

export class ProjectsScene extends React.Component<Partial<RouteComponentProps<{}>>, ProjectsState> {

    constructor(props: {}) {
        super(props)
        this.state = {
            collapsed: false
        }
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    render() {

        const sidebar = this.props.location.pathname === '/projects' ? null : (<Sidebar collapsed={this.state.collapsed} />)
        const triggerIcon = this.props.location.pathname === '/projects' ? null : (<Icon
            style={TRIGGER_STYLE}
            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.toggle}
        />)

        const projectsListIcon = this.props.location.pathname === '/projects' ? null : (<Icon
            style={PROJECTS_STYLE}
            type="bars"
            onClick={this.toggle}
        />)

        return (
            <Layout style={{ height: '100vh' }}>
                {sidebar}
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        {triggerIcon}
                        {projectsListIcon}
                        <Icon
                            style={ACCOUNT_STYLE}
                            type="api"
                            onClick={this.toggle}
                        />
                        <Icon
                            style={LOGOUT_STYLE}
                            type="logout"
                            onClick={this.toggle}
                        />
                    </Header>
                    <Router>
                        <Switch>
                            <Route exact path='/projects' component={ListScene} />
                            <Route path='/projects/:projectId/data' component={DataScene} />
                        </Switch>
                    </Router>
                    <Footer style={{ textAlign: 'center' }}>
                        Realm Sync ©2017 realm.io {this.props.location.pathname}
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}