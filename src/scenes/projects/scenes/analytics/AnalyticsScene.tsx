import * as React from 'react'
import * as faker from 'faker'
import * as _ from 'lodash'
import * as moment from 'moment'
import { List, Layout, Row, Col, Icon, Menu, Table, Checkbox } from 'antd'
import { Button } from 'antd/lib/radio';

const Sider = Layout.Sider
const Content = Layout.Content

export class UsersScene extends React.Component<{}, {}> {


    refreshInterval: NodeJS.Timer

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Row>
                <Col span={24}>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280, height: '100%' }}>
                        <h1>Analytics</h1>
                        <Table pagination={{ pageSize: 25 }} size="small" rowKey="userId" dataSource={this.state.users} columns={COLUMNS} />
                    </Content>
                </Col>
            </Row>
        )
    }

}