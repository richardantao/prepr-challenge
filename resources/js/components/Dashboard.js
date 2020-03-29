import React, { Component } from "react";
import Helmet from "react-helmet";

import { Col, Row } from "reactstrap";

import Loading from "./Loading";
import Nav from "./Nav";
import List from "./List";
import Maps from "./Maps";
import axios from "axios";

export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAutheticated: false,
            isLoading: false,
            labs: [],
        };
    };

    componentDidMount() {
        this.setState({
            isLoading: true
        });
    };

    componentDidUpdate(prevProps, prevState) {
        const { labs } = this.state;

        if(labs != prevState.labs) {
            this.setState({
                isLoading: false
            });
        };
    };
    
    render() {
        const { isLoading } = this.state;

        return (
            <>
                <Helmet>
                    <meta name="description" content="User's Dashboard"/>
                    <meta name="keywords" content="Maps, List, Search, Labs, Prepr"/>
                    <title></title>
                </Helmet>
                { isLoading ? <Loading/> :
                    <main role="main">
                    <Row>
                        <Col>
                            <Row>
                                <Col>
                                    <Nav/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <List/>
                                </Col>
                                <Col>
                                    <Maps/>                            
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </main>
                }
            </>
        );
    };
};