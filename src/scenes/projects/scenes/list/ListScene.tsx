import * as React from 'react'
import { List, Layout, Row, Col, Icon, Avatar, Input, Button } from 'antd'
import * as Recharts from 'recharts'
import * as faker from 'faker'
import { LineChart, Line } from 'recharts';

const Content = Layout.Content
const Search = Input.Search
const ButtonGroup = Button.Group;

interface Project {
    projectId: string
    title: string
    notes: string
    accountType: 'Dev 1' | 'Dev 2' | 'Dev 3' | 'Pro 1' | 'Pro 2'
}

interface Doc {
    title: string
    summary: string
}

interface ListState {
    projects: Project[]
    docs: Doc[]
}

const logoSVG = require('../../../../assets/img/logo.svg')

export class ListScene extends React.Component<{}, ListState> {

    constructor(props) {
        super(props)

        const projects: Project[] = [
            {
                projectId: 'reach-1234',
                title: 'Reach Test Example',
                notes: 'Offline First Chat',
                accountType: 'Dev 2'
            },
            {
                projectId: 'workout-487373',
                title: 'Workout App',
                notes: 'Offline First Chat',
                accountType: 'Dev 2'
            },
            {
                projectId: 'react-1234',
                title: 'Enterprise POC',
                notes: 'Enterprise POC with Offline First',
                accountType: 'Dev 2'
            },
            {
                projectId: 'react-1234',
                title: 'Davita POC',
                notes: 'Enterprise POC with Offline First',
                accountType: 'Dev 2'
            },
            {
                projectId: 'react-1234',
                title: 'Enterprise POC',
                notes: 'Enterprise POC with Offline First',
                accountType: 'Dev 2'
            }
        ]

        let docs: Doc[] = []

        for (let index = 0; index < 5; index++) {
            docs.push({
                title: faker.random.words(3),
                summary: faker.lorem.sentence(2)
            })
        }

        this.state = {
            projects: projects,
            docs: docs
        }
    }

    generateChart() {
        const data = [
            { name: 'Page A', uv: faker.random.number({ min: 1000, max: 3000 }), pv: faker.random.number({ min: 1000, max: 3000 }), amt: faker.random.number({ min: 1000, max: 3000 }) },
            { name: 'Page B', uv: faker.random.number({ min: 1000, max: 3000 }), pv: faker.random.number({ min: 1000, max: 3000 }), amt: faker.random.number({ min: 1000, max: 3000 }) },
            { name: 'Page C', uv: faker.random.number({ min: 1000, max: 3000 }), pv: faker.random.number({ min: 1000, max: 3000 }), amt: faker.random.number({ min: 1000, max: 3000 }) },
            { name: 'Page D', uv: faker.random.number({ min: 1000, max: 3000 }), pv: faker.random.number({ min: 1000, max: 3000 }), amt: faker.random.number({ min: 1000, max: 3000 }) },
            { name: 'Page E', uv: faker.random.number({ min: 1000, max: 3000 }), pv: 4800, amt: faker.random.number({ min: 1000, max: 3000 }) },
            { name: 'Page F', uv: 2390, pv: 3800, amt: faker.random.number({ min: 1000, max: 3000 }) },
            { name: 'Page G', uv: 3490, pv: 4300, amt: faker.random.number({ min: 1000, max: 3000 }) },
        ];
        return (<LineChart width={200} height={50} data={data}>
            <Line type='monotone' dataKey='pv' stroke='#8884d8' strokeWidth={2} />
        </LineChart>)
    }

    render() {


        return (
            <div>
            <Row>
                <Col span={8}>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 600 }}>
                        <h1><img src={logoSVG} height={28} width={28} /> Welcome to Realm Cloud.</h1>
                        <span>
                            Build <strong>powerful</strong>, engaging real-time apps that work even when there's no internet.
                        </span>
                        <br /><br />
                        <span>
                            <a><Icon type="file-text" />View the Docs</a>
                        </span>
                        <Search
                            style={{ marginTop: 16, marginBottom: 16 }}
                            placeholder="Search for Your Project"
                            onSearch={value => console.log(value)}
                            enterButton
                        />
                        <List
                            itemLayout="horizontal"
                            dataSource={this.state.projects}
                            renderItem={(item: Project) => (
                                <a href={`/projects/${item.projectId}/data`}>
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar src={logoSVG} />}
                                        title={<a href={`/projects/${item.projectId}/data`}> {item.title}</a>}
                                        description={item.notes}
                                    />
                                    {this.generateChart()}
                                </List.Item>
                                </a>
                            )}
                        />
                    </Content>
                </Col>
                <Col span={8}>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 600 }}>
                        <h1>Create a New Project</h1>
                        <span>
                            Get started with a project quickly with our boilerplate projects.
                        </span>
                        <Icon type="plus" style={{ width: '100%', marginTop: 20, textAlign: 'center', fontSize: '50px' }} />
                        <ButtonGroup style={{ width: '100%', marginTop: 80 }}>
                            <Button type="primary" size="large" style={{ width: '33%' }}>
                                <Icon type="apple" />iOS
                            </Button>
                            <Button type="primary" size="large" style={{ width: '33%' }}>
                                <Icon type="android" />Android
                            </Button>
                            <Button type="primary" size="large" style={{ width: '33%' }}>
                                <Icon type="code" />Node
                            </Button>
                        </ButtonGroup>
                        <h2 style={{ width: '100%', marginTop: 80 }}>Or get started with Chat</h2>
                        <ButtonGroup style={{ width: '100%', marginTop: 20 }}>
                            <Button size="large" style={{ width: '33%' }}>
                                <Icon type="apple" />iOS
                            </Button>
                            <Button size="large" style={{ width: '33%' }}>
                                <Icon type="android" />Android
                            </Button>
                            <Button size="large" style={{ width: '33%' }}>
                                <Icon type="code" />Node
                            </Button>
                        </ButtonGroup>
                    </Content>
                </Col>
                <Col span={8}>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 600 }}>
                        <h1>Search our Docs</h1>
                        <span>
                            Find the resources quickly
                        </span>
                        <Search
                            style={{ marginTop: 16, marginBottom: 16 }}
                            placeholder="Search our docs and FAQ"
                            onSearch={value => console.log(value)}
                            enterButton
                        />
                        <List
                            itemLayout="horizontal"
                            dataSource={this.state.docs}
                            renderItem={(doc: Doc) => (
                                <List.Item>
                                    <List.Item.Meta
                                        title={<a>{doc.title}</a>}
                                        description={doc.summary}
                                    />
                                </List.Item>
                            )}
                        />
                    </Content>
                </Col>
            </Row>
            </div>
        )
    }

}