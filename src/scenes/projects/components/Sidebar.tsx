import * as React from 'react'
import { Layout, Menu, Icon } from 'antd';
import { RouteComponentProps, Redirect } from 'react-router';
import { History } from 'history'
import { ClickParam } from 'antd/lib/menu';
const { Sider } = Layout;


const LOGO_CONTAINER_STYLE = {
    height: '32px',
    margin: '16px'
}

const LOGO_TITLE = {
    color: 'white',
    fontSize: '22px',
    paddingLeft: '8px',
    fontWeight: 500 as 500,
    float: 'right'
}

const PROJECT_NAME_STYLE = {
    fontSize: '16px',
    color: 'white',
    height: '32px',
    marginTop: '50px',
    marginLeft: '16px'
}

interface SidebarProps {
    collapsed: boolean
    projectId: string
    history: History
}

const logo = require('../../../assets/img/logo.svg')

export class Sidebar extends React.Component<SidebarProps> {

    constructor(props) {
        super(props)
    }

    navigateTo = (param: ClickParam) => {
        const projectId = this.props.projectId
        switch (param.key) {
            case 'data':
                this.props.history.push(`/projects/${this.props.projectId}/data`)
                break
            case 'users':
                this.props.history.push(`/projects/${this.props.projectId}/users`)
                break
            case 'auth':
                this.props.history.push(`/projects/${this.props.projectId}/auth`)
                break
            case 'logs':
                this.props.history.push(`/projects/${this.props.projectId}/logs`)
                break
            case 'analytics':
                this.props.history.push(`/projects/${this.props.projectId}/analytics`)
                break
            default:
                break;
        }
    }

    render() {

        return (
            <Sider
                trigger={null}
                collapsible={true}
                collapsed={this.props.collapsed}>
                <div style={LOGO_CONTAINER_STYLE}>
                    <img src={logo} width={32} height={32} />
                    <span style={LOGO_TITLE}>Realm Cloud</span>
                </div>
                <h1 style={PROJECT_NAME_STYLE}>Example Project</h1>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['database']} onClick={this.navigateTo}>
                    <Menu.Item key="data">
                        <Icon type="database" />
                        <span>Data</span>
                    </Menu.Item>
                    <Menu.Item key="users">
                        <Icon type="user" />
                        <span>Users</span>
                    </Menu.Item>
                    <Menu.Item key="auth">
                        <Icon type="login" />
                        <span>Authentication</span>
                    </Menu.Item>
                    <Menu.Item key="login">
                        <Icon type="lock" />
                        <span>Permissions</span>
                    </Menu.Item>
                    <Menu.Item key="analytics">
                        <Icon type="dot-chart" />
                        <span>Analytics</span>
                    </Menu.Item>
                    <Menu.Item key="logs">
                        <Icon type="code-o" />
                        <span>Logs</span>
                    </Menu.Item>
                    <Menu.Item key="settings">
                        <Icon type="edit" />
                        <span>Functions</span>
                    </Menu.Item>
                    <Menu.Item key="settings">
                        <Icon type="edit" />
                        <span>Settings</span>
                    </Menu.Item>
                    <Menu.Item key="help" style={{ bottom: 0, position: 'absolute' }}>
                        <Icon type="question-circle-o" />
                        <span>Help</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}