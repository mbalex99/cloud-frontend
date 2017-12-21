import * as React from 'react'
import { List, Layout, Row, Col, Icon, Avatar, Input } from 'antd'
import * as Recharts from 'recharts'
import * as faker from 'faker'
import { LineChart, Line } from 'recharts';

const Content = Layout.Content
const Search = Input.Search

interface Project {
    projectId: string
    title: string
    notes: string
    accountType: 'Dev 1' | 'Dev 2' | 'Dev 3' | 'Pro 1' | 'Pro 2'
}

interface ListState {
    projects: Project[]
}

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

        this.state = {
            projects: projects
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
            <Row>
                <Col span={8}>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        <h1>Welcome to Realm Cloud.</h1>
                        <span>
                            Build <strong>powerful</strong>, engaging real-time apps that work even when there's no internet.
                        </span>
                        <br /><br />
                        <span>
                            <a><Icon type="file-text" />View the Docs</a>
                        </span>
                        <Search
                            style={ { marginTop: 16, marginBottom: 16 } }
                            placeholder="Search for Your Project"
                            onSearch={value => console.log(value)}
                            enterButton
                        />
                        <List
                            itemLayout="horizontal"
                            dataSource={this.state.projects}
                            renderItem={(item: Project) => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                        title={<a href={`/projects/${item.projectId}/data`}> {item.title}</a>}
                                        description={item.notes}
                                    />
                                    {this.generateChart()}
                                </List.Item>
                            )}
                        />
                    </Content>
                </Col>
            </Row>
        )
    }

}