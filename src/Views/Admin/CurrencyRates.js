import React, {useEffect, useState} from "react";
import VerticalNavBar from "./VerticalNavBar";
import { useParams } from 'react-router';

import axios from "axios";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Table from 'react-bootstrap/Table';


function CurrencyRates() {
    const { currencyname, equalscurrencyname } = useParams(); 
    const [currencyList, setCurrencyList] = useState([]);
    const [currencyNameList, setCurrencyNameList] = useState([]);
    const [currencyName, setCurrencyName] = useState(currencyname);
    const [equalsCurrencyName, setEqualsCurrencyName] = useState(equalscurrencyname);
    const [currencyRateList, setCurrencyRateList] = useState([]);


    useEffect(() => {
        const currencyNameUrl = `http://localhost:8080/api/data/currency`;

        axios.get(currencyNameUrl).then((response) => {
            setCurrencyList(response.data);
        })

    }, [])
    
    console.log(currencyName + "/" + equalsCurrencyName);
    console.log(currencyNameList);

    useEffect(() => {
        setCurrencyNameList([]);
        
        currencyList.forEach(element => {
            setCurrencyNameList(oldArray => [...oldArray, element.currencyName])
        });

    }, [])    

    useEffect(() => {
        const currencyRateURL = `http://localhost:8080/api/data/currency/rate/all/${currencyName}/${equalsCurrencyName}`;

        axios.get(currencyRateURL).then((response) => {
            setCurrencyRateList(response.data);
        })

    }, [currencyName, equalsCurrencyName])

    console.log(currencyRateList);

    return(
        <div className='admin_container'>
            <Row>
                <Col id="vartical_nav" xs lg={2}>
                    <VerticalNavBar/>
                </Col>

                <Col xs lg={4}>
                    <h2>Currency Rates</h2>
                    <div id='singele_line'></div>

                    <br></br>
                    
                    <Row>
                        
                        <Col id="column_center">
                            <DropdownButton id="dropdown-basic-button" title="Select Currency" >
                                {currencyNameList.map(currencyName => {
                                    return <Dropdown.Item onClick={() => setCurrencyName(currencyName)}>{currencyName}</Dropdown.Item>
                                })}
                            </DropdownButton>
                        </Col>

                        <Col id="column_center">
                            <DropdownButton id="dropdown-basic-button" title="Select Equals Currency">
                                {currencyNameList.map(currencyName => {
                                    return <Dropdown.Item onClick={() => setEqualsCurrencyName(currencyName)}>{currencyName}</Dropdown.Item>
                                })}
                            </DropdownButton>
                        </Col>

                    </Row>

                    <br></br>
                    <h5 id="column_center">1 {currencyName.toUpperCase()} equals to {equalsCurrencyName.toUpperCase()} rates in table</h5>

                    <div id='thin_singele_line'></div>
                    <br></br>

                    {/* table starts */}

                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                            <th>Id</th>
                            <th>Rates</th>
                            <th>Delete</th>
                            <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>

                    {/* table ends */}

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