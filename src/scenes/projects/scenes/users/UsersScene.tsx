import * as React from 'react'
import * as faker from 'faker'
import * as _ from 'lodash'
import * as moment from 'moment'
import { List, Layout, Row, Col, Icon, Menu, Table, Checkbox, Input } from 'antd'
import { Button } from 'antd/lib/radio';

const Sider = Layout.Sider
const Content = Layout.Content
const Search = Input.Search

interface User {
    userId: string
    username: string
    lastLoginDate: Date,
    provider: string
}

const COLUMNS = [
    {
        title: 'userId',
        dataIndex: 'userId',
        key: 'userId'
    },
    {
        title: 'lastLoginDate',
        dataIndex: 'lastLoginDate',
        key: 'lastLoginDate',
        render: (date: Date) => {
            return <span>{moment(date).format('MMMM Do YYYY, h:mm:ss a')}</span>
        }
    },
    {
        title: 'username',
        dataIndex: 'username',
        key: 'username'
    },
    {
        title: 'provider',
        dataIndex: 'provider',
        key: 'provider'
    },
    {
        title: 'edit',
        render: () => {
            return <Icon type="edit" />
        }
    }
]

interface UsersSceneState {
    users: User[]
}

export class UsersScene extends React.Component<{}, UsersSceneState> {


    refreshInterval: NodeJS.Timer

    constructor(props) {
        super(props)

        let users: User[] = []

        for (let index = 0; index < 90; index++) {
            users.push({
                userId: faker.random.uuid(),
                username: faker.internet.userName(),
                lastLoginDate: faker.date.recent(),
                provider: _.sample(['facebook', 'username', 'anonymous'])
            })
        }

        this.state = {
            users: users
        }
    }
    render() {
        return (
            <Row>
                <Col span={24}>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280, height: '100%' }}>
                        <h1><Icon type="user" /> Users</h1>
                        <Search
                            style={{ marginTop: 16, marginBottom: 16 }}
                            placeholder="Filter data"
                            onSearch={value => console.log(value)}
                            enterButton
                        />
                        <Table pagination={{ pageSize: 25 }} size="small" rowKey="userId" dataSource={this.state.users} columns={COLUMNS} />
                    </Content>
                </Col>
            </Row>
        )
    }

}