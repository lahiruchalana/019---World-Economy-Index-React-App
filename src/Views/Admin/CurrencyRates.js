import React from "react";
import VerticalNavBar from "./VerticalNavBar";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CurrencyRates() {

    return(
        <div>
            <Row>
                <Col id="vartical_nav" xs lg={2}>
                    <VerticalNavBar/>
                </Col>
                <Col>
                    <h2>admin currency rates</h2>
                </Col>
            </Row>
        </div>
    );
}

export default CurrencyRates;