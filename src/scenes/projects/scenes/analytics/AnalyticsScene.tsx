import * as React from 'react'
import * as faker from 'faker'
import * as _ from 'lodash'
import * as moment from 'moment'
import { List, Layout, Row, Col, Icon, Menu, Table, Checkbox } from 'antd'
import { Button } from 'antd/lib/radio';

import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, AreaChart, } from 'recharts'

const Sider = Layout.Sider
const Content = Layout.Content

export class AnalyticsScene extends React.Component<{}, {}> {

    constructor(props) {
        super(props)
    }

    generateDailyCharts() {
        const data = [
            { name: 'Page A', uv: faker.random.number({ min: 300, max: 5100 }), pv: faker.random.number({ min: 300, max: 5100 }), amt: faker.random.number({ min: 300, max: 5100 }) },
            { name: 'Page B', uv: faker.random.number({ min: 300, max: 5100 }), pv: faker.random.number({ min: 300, max: 5100 }), amt: faker.random.number({ min: 300, max: 5100 }) },
            { name: 'Page C', uv: faker.random.number({ min: 300, max: 5100 }), pv: faker.random.number({ min: 300, max: 5100 }), amt: faker.random.number({ min: 300, max: 5100 }) },
            { name: 'Page D', uv: faker.random.number({ min: 300, max: 5100 }), pv: faker.random.number({ min: 300, max: 5100 }), amt: faker.random.number({ min: 300, max: 5100 }) },
            { name: 'Page E', uv: faker.random.number({ min: 300, max: 5100 }), pv: faker.random.number({ min: 300, max: 5100 }), amt: faker.random.number({ min: 300, max: 5100 }) },
            { name: 'Page F', uv: faker.random.number({ min: 300, max: 5100 }), pv: faker.random.number({ min: 300, max: 5100 }), amt: faker.random.number({ min: 300, max: 5100 }) },
            { name: 'Page G', uv: faker.random.number({ min: 300, max: 5100 }), pv: faker.random.number({ min: 300, max: 5100 }), amt: faker.random.number({ min: 300, max: 5100 }) },
        ];
        return (
            <ResponsiveContainer>
                <LineChart data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
                    <Line type="monotone" dataKey="amt" stroke="#CF000F" strokeDasharray="3 4 5 2" />
                </LineChart>
            </ResponsiveContainer>
        );
    }

    generateSolidCharts() {
        const data = [
            { name: 'Page A', uv: faker.random.number({ min: 300, max: 5100 }), pv: faker.random.number({ min: 300, max: 5100 }), amt: faker.random.number({ min: 300, max: 5100 }) },
            { name: 'Page B', uv: faker.random.number({ min: 300, max: 5100 }), pv: faker.random.number({ min: 300, max: 5100 }), amt: faker.random.number({ min: 300, max: 5100 }) },
            { name: 'Page C', uv: faker.random.number({ min: 300, max: 5100 }), pv: faker.random.number({ min: 300, max: 5100 }), amt: faker.random.number({ min: 300, max: 5100 }) },
            { name: 'Page D', uv: faker.random.number({ min: 300, max: 5100 }), pv: faker.random.number({ min: 300, max: 5100 }), amt: faker.random.number({ min: 300, max: 5100 }) },
            { name: 'Page E', uv: faker.random.number({ min: 300, max: 5100 }), pv: faker.random.number({ min: 300, max: 5100 }), amt: faker.random.number({ min: 300, max: 5100 }) },
            { name: 'Page F', uv: faker.random.number({ min: 300, max: 5100 }), pv: faker.random.number({ min: 300, max: 5100 }), amt: faker.random.number({ min: 300, max: 5100 }) },
            { name: 'Page G', uv: faker.random.number({ min: 300, max: 5100 }), pv: faker.random.number({ min: 300, max: 5100 }), amt: faker.random.number({ min: 300, max: 5100 }) },
        ];
        return (
            <ResponsiveContainer>
                <LineChart width={500} height={300} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        );
    }

    generateMixedCharts() {
        const data = [{ name: 'Page A', uv: 590, pv: 800, amt: 1400 },
        { name: 'Page B', uv: faker.random.number({ min: 300, max: 500 }), pv: faker.random.number({ min: 300, max: 500 }), amt: faker.random.number({ min: 300, max: 500 }) },
        { name: 'Page C', uv: faker.random.number({ min: 300, max: 500 }), pv: faker.random.number({ min: 300, max: 500 }), amt: faker.random.number({ min: 300, max: 500 }) },
        { name: 'Page D', uv: faker.random.number({ min: 300, max: 500 }), pv: faker.random.number({ min: 300, max: 500 }), amt: faker.random.number({ min: 300, max: 500 }) },
        { name: 'Page E', uv: faker.random.number({ min: 300, max: 500 }), pv: faker.random.number({ min: 300, max: 500 }), amt: faker.random.number({ min: 300, max: 500 }) },
        { name: 'Page F', uv: faker.random.number({ min: 300, max: 500 }), pv: faker.random.number({ min: 300, max: 500 }), amt: faker.random.number({ min: 300, max: 500 }) }];


        return (
            <ResponsiveContainer>
                <ComposedChart width={600} height={400} data={data}
                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke='#f5f5f5' />
                    <Area type='monotone' dataKey='amt' fill='#8884d8' stroke='#8884d8' />
                    <Bar dataKey='pv' barSize={20} fill='#413ea0' />
                    <Line type='monotone' dataKey='uv' stroke='#ff7300' />
                </ComposedChart>
            </ResponsiveContainer>
        )
    }

    generateMixedChartsData() {
        const data = [{ name: 'Page A', uv: 590, pv: 800, amt: 1400 },
        { name: 'Page B', uv: faker.random.number({ min: 300, max: 500 }), pv: faker.random.number({ min: 300, max: 500 }), amt: faker.random.number({ min: 300, max: 500 }) },
        { name: 'Page C', uv: faker.random.number({ min: 300, max: 500 }), pv: faker.random.number({ min: 300, max: 500 }), amt: faker.random.number({ min: 300, max: 500 }) },
        { name: 'Page D', uv: faker.random.number({ min: 300, max: 500 }), pv: faker.random.number({ min: 300, max: 500 }), amt: faker.random.number({ min: 300, max: 500 }) },
        { name: 'Page E', uv: faker.random.number({ min: 300, max: 500 }), pv: faker.random.number({ min: 300, max: 500 }), amt: faker.random.number({ min: 300, max: 500 }) },
        { name: 'Page F', uv: faker.random.number({ min: 300, max: 500 }), pv: faker.random.number({ min: 300, max: 500 }), amt: faker.random.number({ min: 300, max: 500 }) }];


        return (
            <ResponsiveContainer>
                <ComposedChart width={600} height={400} data={data}
                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke='#f5f5f5' />
                    <Area type='monotone' dataKey='amt' fill='#87D37C' stroke='#87D37C' />
                    <Bar dataKey='pv' barSize={20} fill='#F58F84' />
                    <Line type='monotone' dataKey='uv' stroke='#F62459' />
                </ComposedChart>
            </ResponsiveContainer>
        )
    }


    render() {
        return (
            <div>
                <Row>
                    <Col span={24}>
                        <Content style={{ margin: '24px 0 0 24px' }}>
                            <h1>Analytics</h1>
                        </Content>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', height: 400 }}>
                            <h2>Daily Users</h2>
                            <div style={{ top: 100, bottom: 36, left: 24, right: 24, position: 'absolute' }}>
                                {this.generateDailyCharts()}
                            </div>
                        </Content>
                    </Col>
                    <Col span={8}>
                        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', height: 400 }}>
                            <h2>Monthly Users</h2>
                            <div style={{ top: 100, bottom: 36, left: 24, right: 24, position: 'absolute' }}>
                                {this.generateDailyCharts()}
                            </div>
                        </Content>
                    </Col>
                    <Col span={8}>
                        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', height: 400 }}>
                            <h2>Analytics</h2>
                            <Content>
                                <div style={{ top: 100, bottom: 36, left: 24, right: 24, position: 'absolute' }}>
                                    {this.generateMixedCharts()}
                                </div>
                            </Content>
                        </Content>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', height: 400 }}>
                            <h2>Data Usage</h2>
                            <div style={{ top: 100, bottom: 36, left: 24, right: 24, position: 'absolute' }}>
                                {this.generateMixedChartsData()}
                            </div>
                        </Content>
                    </Col>
                    <Col span={8}>
                        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', height: 400 }}>
                            <h2>Total Revenue $USD</h2>
                            <div style={{ top: 100, bottom: 36, left: 24, right: 24, position: 'absolute' }}>
                                {this.generateDailyCharts()}
                            </div>
                        </Content>
                    </Col>
                    <Col span={8}>
                        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', height: 400 }}>
                            <h2>Engagements per User</h2>
                            <Content>
                                <div style={{ top: 100, bottom: 36, left: 24, right: 24, position: 'absolute' }}>
                                    {this.generateSolidCharts()}
                                </div>
                            </Content>
                        </Content>
                    </Col>
                </Row>
            </div>
        )
    }

}