import * as React from 'react'
import { Layout, Menu, Icon } from 'antd';
import { RouteComponentProps } from 'react-router';
const { Sider } = Layout;


const LOGO_STYLE = {
    height: '32px',
    background: 'rgba(255,255,255,.2)',
    margin: '16px'
}

const PROJECT_NAME_STYLE = {
    fontSize: '16px',
    color: 'white',
    height: '32px',
    margin: '16px'
}

interface SidebarProps extends Partial<RouteComponentProps<{}>> {
    collapsed: boolean
}

export class Sidebar extends React.Component<SidebarProps, {}> {

    render() {
        return (
            <Sider
                trigger={null}
                collapsible={true}
                collapsed={this.props.collapsed}>
                <div style={LOGO_STYLE} />
                <h1 style={PROJECT_NAME_STYLE}>Example Project</h1>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['database']}>
                    <Menu.Item key="database">
                        <Icon type="database" />
                        <span>Data</span>
                    </Menu.Item>
                    <Menu.Item key="user">
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
                    <Menu.Item key="stats">
                        <Icon type="dot-chart" />
                        <span>Analytics</span>
                    </Menu.Item>
                    <Menu.Item key="logs">
                        <Icon type="code-o" />
                        <span>Logs</span>
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