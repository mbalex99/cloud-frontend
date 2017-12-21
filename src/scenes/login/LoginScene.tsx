import * as React from 'react'
import { RouteComponentProps } from 'react-router'

import { Form, Icon, Input, Button, Checkbox, Card } from 'antd';
const FormItem = Form.Item;

const LOGO_CONTAINER_STYLE = {
    padding: '18px'
}

const LOGO_STYLE = {
    height: '36px',
    width: '36px',
    float: 'left',
    marginLeft: '18px'
}

const LOGO_TITLE_STYLE = {
    float: 'left',
    marginLeft: '18px'
}

const CARD_STYLE = {
    marginTop: '40px',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '360px',
    padding: '10px'
}

const FORGOT_STYLE = {
    float: 'right',
}

const FORM_BUTTON = {
    width: '100%'
}

interface LoginState {
    mode: 'login' | 'register'
}

const logo = require('../../assets/img/logo.svg')

export class LoginScene extends React.Component<Partial<RouteComponentProps<{}>>, LoginState> {

    constructor(props) {
        super(props)
        this.state = {
            mode: 'login'
        }
    }

    handleSubmit = () => {
        this.props.history.push('/projects')
    }

    toggleModeButtonDidClick = () => {
        this.setState({
            mode: this.state.mode === 'register' ? 'login' : 'register'
        })
    }

    render() {

        const toggleLink = this.state.mode === 'register' ? (
            <a onClick={this.toggleModeButtonDidClick}>Login</a>
        ) : (<a onClick={this.toggleModeButtonDidClick}>Register a new Account!</a>)

        const mainButtonText = this.state.mode === 'register' ? 'Register Account' : 'Login'

        return (
            <div>
                <Card style={CARD_STYLE}>
                    <Form onSubmit={this.handleSubmit}>
                        <div style={LOGO_CONTAINER_STYLE}>
                            <img src={logo} style={LOGO_STYLE} />
                            <h1 style={LOGO_TITLE_STYLE} >Realm Cloud</h1>
                        </div>
                        <FormItem>
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
                        </FormItem>
                        <FormItem>
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        </FormItem>
                        <FormItem>
                            <Checkbox>Remember me</Checkbox>
                            <a style={FORGOT_STYLE} href="">Forgot password</a>
                            <Button type="primary" htmlType="submit" style={FORM_BUTTON}>
                                {mainButtonText}
                            </Button>
                            <Button style={FORM_BUTTON}>
                                <Icon type="github" />
                                Login with GitHub
                            </Button>
                            Or {toggleLink}
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}