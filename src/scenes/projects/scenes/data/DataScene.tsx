import * as React from 'react'
import { List, Layout, Row, Col, Icon } from 'antd'
const Content = Layout.Content


export class DataScene extends React.Component<{}, {}> {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Row>
                <Col span={8}>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        <h1>Oh</h1>
                    </Content>
                </Col>
            </Row>
        )
    }

}