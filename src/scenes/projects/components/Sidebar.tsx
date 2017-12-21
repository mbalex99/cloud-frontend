import * as React from 'react'
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;


const LOGO_STYLE = {
    height: '32px',
    background: 'rgba(255,255,255,.2)',
    margin: '16px'
}

interface SidebarProps {
    collapsed: boolean
}

export class Sidebar extends React.Component<Partial<SidebarProps>, {}> {

    render() {
        return (
            <Sider
                trigger={null}
                collapsible={true}
                collapsed={this.props.collapsed}
            >
                <div style={LOGO_STYLE} />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="2">
                        <Icon type="video-camera" />
                        <span>Data</span>
                    </Menu.Item>
                    <Menu.Item key="user">
                        <Icon type="user" />
                        <span>Users</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="upload" />
                        <span>nav 3</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}