import * as React from 'react'
import { List, Layout, Row, Col, Icon, Menu } from 'antd'

const Sider = Layout.Sider
const Content = Layout.Content

export class DataScene extends React.Component<{}, {}> {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Row>
                <Col span={24}>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280, height: '100%' }}>
                        <h1>Data Browser</h1>
                        <Layout style={{ padding: '24px 0', background: '#fff' }}>
                            <Sider width={200} style={{ background: '#fff' }}>
                                <Menu
                                    mode="inline"
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    style={{ height: '100%' }}
                                >
                                    <Menu.Item key="1">ChatMessage</Menu.Item>
                                    <Menu.Item key="2">Room</Menu.Item>
                                    <Menu.Item key="3">Account</Menu.Item>
                                    <Menu.Item key="4">Users</Menu.Item>
                                    <Menu.Item key="5">Winner</Menu.Item>
                                </Menu>
                            </Sider>
                            <Content style={{ padding: '0 24px', minHeight: 280 }}>
                                Content
                            </Content>
                        </Layout>
                    </Content>
                </Col>
            </Row>
        )
    }

}