import React, { Component } from "react";
import Helmet from "react-helmet";

import { Container, Row, Col, Form, Alert, FormGroup, Label, Input, Button } from "reactstrap";

import axios from "axios";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            message: null
        };
    };

    componentDidUpdate(prevProps, prevState) {

    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    };

    handleSubmit = e => {
        e.preventDefault();

        const { email, password } = this.state;

        axios.post(`/`, { email, password });
    };

    render() {
        const { email, password, message } = this.state; 

        return (
            <>
                <Helmet>
                    <meta/>
                    <meta/>
                    <title>Prepr Challenge | Login</title>
                </Helmet>
                <main role="main">
                    <Container>
                        <Row>
                            <Col>
                                <Form onSubmit={this.handleSubmit}>
                                    { message === "" ? <Alert>{message}</Alert> 
                                    : message ? <Alert>{message}</Alert> 
                                    : null }
                                    <FormGroup>
                                        <Label for="email">Email</Label>
                                        <Input
                                            name="email"
                                            type="email"
                                            value={email}
                                            onChange={this.handleChange}
                                            required
                                        />

                                        <Label for="password">Password</Label>
                                        <Input
                                            name="password"
                                            type="password"
                                            value={password}
                                            onChange={this.handleChange}
                                            required
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Button type="submit">
                                            Login
                                        </Button>
                                    </FormGroup>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </main>
            </>
        );
    };
};