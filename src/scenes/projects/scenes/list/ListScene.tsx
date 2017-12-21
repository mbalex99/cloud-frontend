import * as React from 'react'
import { List, Layout, Row, Col, Icon } from 'antd'
const Content = Layout.Content

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
                            <a><Icon type="file-text"/>View the Docs</a>
                            <a><Icon type="file-text"/>View the Docs</a>
                        </span>
                        <List
                            itemLayout="horizontal"
                            dataSource={this.state.projects}
                            renderItem={(item: Project) => (
                                <List.Item>
                                    <List.Item.Meta
                                        title={<a href={`/projects/${item.projectId}/data`}>{item.title}</a>}
                                        description={item.notes}
                                    />
                                </List.Item>
                            )}
                        />
                    </Content>
                </Col>
            </Row>
        )
    }

}