import * as React from 'react';

import { Layout, Icon } from 'antd';
const { Header, Content, Footer } = Layout;
import {
    BrowserRouter as Router,
    Route,
    RouteComponentProps
} from 'react-router-dom'

import { Sidebar } from './components/Sidebar'
import { ProjectsListScene } from './scenes/projects-list/ProjectsListScene';

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
        return (
            <Layout style={{ height: '100vh' }}>
                <Sidebar collapsed={this.state.collapsed} />
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            style={TRIGGER_STYLE}
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        <Router>
                            <div>
                                <Route path={`${this.props.match.url}/`} component={ProjectsListScene} />
                            </div>
                        </Router>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Realm Sync ©2017 realm.io
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}