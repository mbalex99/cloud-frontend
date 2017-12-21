import * as React from 'react'
import * as faker from 'faker'
import * as _ from 'lodash'
import * as moment from 'moment'
import { List, Layout, Row, Col, Icon, Menu, Table, Checkbox, Tag } from 'antd'
import { Button } from 'antd/lib/radio';

const Sider = Layout.Sider
const Content = Layout.Content


interface LogLine {
    type: string
    text: string
    timestamp: Date
}

interface LogState {
    logLines: LogLine[]
}

export class LogsScene extends React.Component<{}, LogState> {

    constructor(props) {
        super(props)

        let logLines: LogLine[] = []
        for (let index = 0; index < 40; index++) {
            logLines.push({
                type: _.sample(['error', 'warning', 'info']),
                text: faker.lorem.words(20),
                timestamp: faker.date.recent()
            })
        }

        this.state = {
            logLines: logLines.sort((a, b) => { return a.timestamp.getTime() - b.timestamp.getTime() })
        }
    }
    render() {

        const logLines =  this.state.logLines.map(l => {
            let color = '#2db7f5'

            if (l.type === 'error') {
                color = '#f50'
            }

            if (l.type === 'warning') {
                color = 'orange'
            }
            const tag = <span style={ { width: 90, color: color } }>{l.type}</span>
            return (
                <span style={ {display: 'inline', textOverflow: 'ellipsis', overflow: 'hidden', width: '100%' } } >{moment(l.timestamp).format()}  {tag}  {l.text}<br/></span>
            )
        })

        return (
            <Row>
                <Col span={24}>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280, height: '100%' }}>
                        <h1><Icon type="code-o" /> Logs</h1>
                        <Content style={{ margin: '24px 16px', padding: 24, background: '#f6f6f6', minHeight: 280, height: '100%', borderRadius: 4, fontFamily: 'Source Code Pro' }}>
                        {logLines}
                        </Content>
                    </Content>
                </Col>
            </Row>
        )
    }

}