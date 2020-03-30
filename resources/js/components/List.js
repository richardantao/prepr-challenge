import React from "react";

import { Row, Col } from "reactstrap";

import Search from "./Search";

export default ({ labs }) => {
    
    return (
        <div className="col-md-8">
            <Row>
                <Search/>
            </Row>
            <Row>
                <Col>
                    { !labs ? 
                        <div>No labs</div>
                    : labs.map(({ id, title, address }) => {
                        return ( 
                            <div className="card" key={id}>
                                <div className="card-header">{title}</div>
                                <div className="card-body">{address}</div>
                            </div>
                        )
                    })}
                </Col>
            </Row>
        </div>
    );
};