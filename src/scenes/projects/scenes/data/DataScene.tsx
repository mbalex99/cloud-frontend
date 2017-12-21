import * as React from 'react'
import * as faker from 'faker'
import * as _ from 'lodash'
import { List, Layout, Row, Col, Icon, Menu, Table, Checkbox, Input, Button } from 'antd'
import { Redirect } from 'react-router-dom'
const Sider = Layout.Sider
const Content = Layout.Content
const Search = Input.Search


interface Room {
    roomId: string
    name: string
    memberCount: number
    isPublic: boolean
    isDiscoverable: boolean
}

const COLUMNS = [
    {
        title: 'roomId',
        dataIndex: 'roomId',
        key: 'roomId'
    },
    {
        title: 'name',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'memberCount',
        dataIndex: 'memberCount',
        key: 'memberCount'
    },
    {
        title: 'isPublic',
        dataIndex: 'isPublic',
        key: 'isPublic',
        render: (value: boolean, record: Room) => {
            return <Checkbox checked={value} />
        }
    },
    {
        title: 'isDiscoverable',
        dataIndex: 'isDiscoverable',
        key: 'isDiscoverable',
        render: (value: boolean, record: Room) => {
            return <Checkbox checked={value} />
        }
    }
]

interface DataSceneState {
    rooms: Room[]
    navigate: string | undefined
}

export class DataScene extends React.Component<{}, DataSceneState> {


    refreshInterval: number

    constructor(props) {
        super(props)

        let rooms: Room[] = []

        for (let index = 0; index < 90; index++) {
            rooms.push({
                roomId: index.toString(),
                name: faker.random.word(),
                isPublic: faker.random.boolean(),
                isDiscoverable: faker.random.boolean(),
                memberCount: faker.random.number({ min: 0, max: 25 })
            })
        }

        this.state = {
            rooms: rooms,
            navigate: undefined
        }
    }

    componentWillMount() {
        this.refreshInterval = window.setInterval(() => {

            for (let index = 0; index < faker.random.number({ min: 0, max: 40 }); index++) {
                const randomIndex = faker.random.number({ min: 0, max: this.state.rooms.length - 1 })
                const copyOfRooms = [...this.state.rooms]
                copyOfRooms[randomIndex].name = faker.random.word()
                copyOfRooms[randomIndex].isDiscoverable = faker.random.boolean()
                copyOfRooms[randomIndex].isPublic = faker.random.boolean()
                this.setState({
                    rooms: copyOfRooms
                })
            }

        }, 500)
    }

    componentWillUnmount() {
        window.clearInterval(this.refreshInterval)
    }

    render() {
        const redirect = this.state.navigate ? <Redirect to="/project" /> : null

        return (
            <Row>
                {redirect}
                <Col span={24}>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280, height: '100%' }}>
                        <Button type="primary" style={{float: 'right'}} >Open in Realm Studio</Button>
                        <h1><Icon type="database" /> Data Browser</h1>
                        <Layout style={{ padding: '24px 0', background: '#fff' }}>
                            <Sider width={200} style={{ background: '#fff' }}>
                                <Menu
                                    mode="inline"
                                    defaultSelectedKeys={['2']}
                                    defaultOpenKeys={['sub1']}
                                    style={{ height: '100%' }}
                                >
                                    <Menu.Item key="1">ChatMessage</Menu.Item>
                                    <Menu.Item key="2">Room</Menu.Item>
                                    <Menu.Item key="3">Account</Menu.Item>
                                    <Menu.Item key="4">Products</Menu.Item>
                                    <Menu.Item key="5">Users</Menu.Item>
                                    <Menu.Item key="6">Winner</Menu.Item>
                                </Menu>
                            </Sider>
                            <Content style={{ padding: '0 24px', minHeight: 280 }}>
                                <Search
                                    style={{ marginTop: 16, marginBottom: 16 }}
                                    placeholder="Filter data"
                                    onSearch={value => console.log(value)}
                                    enterButton
                                />
                                <Table bordered={true} pagination={{ pageSize: 25 }} size="small" rowKey="roomId" dataSource={this.state.rooms} columns={COLUMNS} />
                            </Content>
                        </Layout>
                    </Content>
                </Col>
            </Row>
        )
    }

}