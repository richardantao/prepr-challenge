import React, { Component } from "react";
import { render } from 'react-dom';

import { Container, Row } from "reactstrap";

import Loading from "./Loading";
import List from "./List";
import MapContainer from "./MapContainer";
import axios from "axios";

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            labs: [],
        };
    };

    componentDidMount() {
        this.setState({
            isLoading: true
        });
        
        axios.get(`http://localhost:8000/api/labs`)
        .then(res => {
            this.setState({ 
                isLoading: false,
                labs: res.data
            });
        })
        .catch(err => {
            if(err.response) {
                console.log("error response")
            } else if (err.request) {
                console.log("error request")
            } else {
                console.log("some error")
            }
        });
    };

    render() {
        const { isLoading, labs } = this.state;

        return (
            <> 
                { isLoading ? <Loading/> :
                    // <Container>
                        <Row className="justify-content-center">
                            <List labs={labs}/>
                            {/* <div className="col-md-8"> */}
                                <MapContainer
                                    labs={labs}
                                />   
                            {/* </div> */}
                        </Row>
                    // </Container>
                }
            </>
        );
    };
};

if(document.getElementById("dashboard")) {
    render( <Dashboard/>, document.getElementById("dashboard"))
}

export default Dashboard;