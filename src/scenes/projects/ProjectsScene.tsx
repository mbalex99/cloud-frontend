import * as React from 'react';

import { Layout, Icon } from 'antd';
const { Header, Content, Footer } = Layout;
import {
    BrowserRouter as Router,
    Route,
    RouteComponentProps,
    Redirect
} from 'react-router-dom'

import { Sidebar } from './components/Sidebar'
import { ListScene } from './scenes/list/ListScene';
import { DataScene } from './scenes/data/DataScene'
import { UsersScene } from './scenes/users/UsersScene'
import { LogsScene } from './scenes/logs/LogsScene';
import { Switch } from 'react-router';

interface ProjectsState {
    collapsed: boolean
    navigate: string
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
            collapsed: false,
            navigate: undefined
        }
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    goBackToLogin = () => {
        this.props.history.push('/login')
    }

    goToProjectsButtonDidClick = () => {
        this.props.history.push('/projects')
    }

    render() {

        const sidebar = this.props.location.pathname === '/projects' ? null : (<Sidebar collapsed={this.state.collapsed} projectId={this.props.match.params["projectId"]} history={this.props.history} />)
        const triggerIcon = this.props.location.pathname === '/projects' ? null : (<Icon
            style={TRIGGER_STYLE}
            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.toggle}
        />)

        const projectsListIcon = this.props.location.pathname === '/projects' ? null : (<Icon
            style={PROJECTS_STYLE}
            type="bars"
            onClick={this.goToProjectsButtonDidClick}
        />)

        const redirect = this.state.navigate ? <Redirect to={this.state.navigate} /> : null

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
                            onClick={this.goBackToLogin}
                        />
                    </Header>
                    <Switch>
                        <Route exact={true} path='/projects' component={ListScene} />
                        <Route path='/projects/:projectId/data' component={DataScene} />
                        <Route path='/projects/:projectId/users' component={UsersScene} />
                        <Route path='/projects/:projectId/logs' component={LogsScene} />
                    </Switch>
                    <Footer style={{ textAlign: 'center' }}>
                        Realm Sync ©2017 realm.io {this.props.location.pathname}
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}