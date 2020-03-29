import React, { Component } from "react";
import Helmet from "react-helmet";

import { Container, Col, Row, Alert, Form, FormGroup, Button, Label, Input } from "reactstrap";
import axios from "axios";

export class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            password: "",
            message: null
        };
    };

    componentDidUpdate(prevProps, prevState) {

    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();

        const { name, email, password } = this.state;

        user = {
            name,
            email,
            password
        };

        axios.post(``, user)
        .then(res => {
            const { } = res.data;

            this.setState({ });
        })
        .catch(err => {
            this.setState({ });
        });
    };
    
    render() {
        const { name, email, password, message } = this.state;

        return (
            <>
                <Helmet>
                    <meta name="description" content="Demonstrating Prep Challenge's Register"/>
                    <meta name="keywords" content="User, Prepr, Register"/>
                    <title>Prepr Challenge | Register</title>
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
                                        <Label for="name">Name</Label>
                                        <Input
                                            name="name"
                                            type="text" 
                                            value={name}
                                            onChange={this.handleChange}
                                            required
                                        />

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
                                            Register
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