import React, {useEffect, useState} from "react";
import VerticalNavBar from "./VerticalNavBar";

import axios from "axios";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function CurrencyRates() {
    const [currencyList, setCurrencyList] = useState([]);
    const [currencyNameList, setCurrencyNameList] = useState([]);
    const [currencyName, setCurrencyName] = useState("usd");

    const currencyNameUrl = 'http://localhost:8080/api/data/currency';

    useEffect(() => {
        axios.get(currencyNameUrl).then((response) => {
            setCurrencyList(response.data);
        })

    }, [])
    
    console.log(currencyNameList);

    useEffect(() => {
        setCurrencyNameList([]);
        
        currencyList.forEach(element => {
            setCurrencyNameList(oldArray => [...oldArray, element.currencyName])
        });

    }, [])

    return(
        <div className='admin_container'>
            <Row>
                <Col id="vartical_nav" xs lg={2}>
                    <VerticalNavBar/>
                </Col>

                <Col>
                    <h2>Currency Rates</h2>
                    <div id='singele_line'></div>

                    <br></br>
                    
                    <Row>
                        
                        <Col>
                            <DropdownButton id="dropdown-basic-button" title="Select Currency" >
                                {currencyNameList.map(currencyName => {
                                    return <Dropdown.Item href="#/selected-the-currency">{currencyName}</Dropdown.Item>
                                })}
                            </DropdownButton>
                        </Col>

                        <Col>
                            <DropdownButton id="dropdown-basic-button" title="Select Equals Currency">
                                <Dropdown.Item href="/admin/currency/rate/usd/euro">Action</Dropdown.Item>
                                <Dropdown.Item href="/admin/currency/rate/usd/gbp">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </DropdownButton>
                        </Col>

                        <Col xs lg={6}>
                            <h4>currency/equals currency</h4>
                        </Col>

                    </Row>
                </Col>

                <Col>
                    <h2>Add New Currency Rate</h2>
                    <div id='singele_line'></div>

                </Col>

            </Row>
        </div>
    );
}

export default CurrencyRates;