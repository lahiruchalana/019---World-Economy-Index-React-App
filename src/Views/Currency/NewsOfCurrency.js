import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';

import CanvasJSReact from '../assets/canvasjs.react';

import axios from "axios";

import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from "react-bootstrap/Image";


function NewsOfCurrency() {
    const [currency, setCurrency] = useState([]);
    const [currencyDataArray, setCurrencyDataArray] = useState([]);
    const { currencyname, equalscurrencyname } = useParams();

    const currencyURL = `http://localhost:8080/api/data/currency/rate/all/${currencyname}/${equalscurrencyname}`;   

    const monthsShort = {
        JANUARY: 0,
        FEBRUARY: 1,
        MARCH: 2,
        APRIL: 3,
        MAY: 4,
        JUNE: 5,
        JULY: 6,
        AUGUST: 7,
        SEPTEMBER: 8,
        OCTOBER: 9,
        NOVEMBER: 10,
        DECEMBER: 11,
      };


    useEffect(() => {
        axios.get(currencyURL).then((response) => {
            setCurrency(response.data);
        })
    }, []);    

    useEffect(() => {
        setCurrencyDataArray([]);

        currency.forEach(element => {
            const currencyData = {
                x: new Date (Number(element.year), monthsShort[element.month]),
                y: element.currencyRateValue
            }

            console.log(currencyData);
            setCurrencyDataArray(oldArray => [...oldArray, currencyData]);
    
        })
    }, [currency.length]);

    console.log(currency);
    console.log(currencyDataArray);

    var CanvasJSChart = CanvasJSReact.CanvasJSChart;

    const options = {
        animationEnabled: true,
        title:{
            text: "Euro Rate"
        },
        axisX: {
            valueFormatString: "YYYY-MMM"
        },
        axisY: {
            title: "USD",
            prefix: "$"
        },
        data: [{
            yValueFormatString: "$##,###,###.###",
            xValueFormatString: "YYYY-MMMM",
            type: "spline",
            dataPoints: currencyDataArray
        }]
    };

    var button = {
        borderRadius:'0px'
    };

    return(
        <div className='container'>

            <Row>

                {/* Page Related Content Column Starts */}

                <Col>
                    <div id='column_left'>
                        <br></br>
                        <Card className='w-100'>
                            <Card.Img height={300} variant="top" src="https://cdn.pixabay.com/photo/2017/03/05/00/34/panorama-2117310__340.jpg" />
                            <Card.Body>
                                <a href="/Currency" id='title_in_card'>
                                    <Card.Title id='subscribe_title_in_card'>Be Updated With Us, Subscribe Us. Economy, Forum, Researches, Investments and Academy All in a One Place </Card.Title>
                                    <Card.Title id='subscribe_title_in_card'> - World Economy Index - </Card.Title>
                                </a>
                            </Card.Body>
                        </Card>
                    </div>

                    {/* News Content Starts */}

                    <br></br>
                    <h2>Breaking - Putin Hit A Massive Damage On Euro</h2>
                    <h6>2022_09_23, Amesterdam, Netherland - Mark Zchenn</h6>
                    <br></br>
                    <h5>The euro fell below $0.99 this morning for the first time in two decades as the energy crisis rocks the financial markets. Meanwhile, benchmark European prices jumped as much as 35 percent after Russia's state energy firm Gazprom announced its Nord Stream 1 pipeline to Germany will remain closed indefinitely. <br></br><br></br>
                        It had been shut down for three days, reportedly for maintenance work, but will remain closed for longer after Gazprom claimed it had found an oil leak in a turbine, sparking fears of further increases in energy prices around Europe. <br></br> <br></br>
                        The former chief executive of Energy UK said the Russian President has been "playing" the "economic war" and "psychological war extremely well" amid the fallout over the decision to keep the pipeline closed. <br></br>
                        Angela Knight told Times Radio yesterday: "He's actually playing the economic war extremely well, he's playing the psychological war extremely well.
                    </h5>

                    <br></br>
                    <br></br>

                    {/* Charts or Tables Starts */}

                    <CanvasJSChart options = {options}/>

                    {/* Charts or Tables Ends */}

                </Col>

                {/* Page Related Content Column Ends */}


                {/* News Column Starts */}

                <Col xs lg='3'>

                    <Col>
                        <div id='headings_carousel' >
                            <Carousel>
                                <Carousel.Item interval={3000}>
                                    <img height={150}
                                    className="d-block w-100"
                                    src="https://cdn.pixabay.com/photo/2018/08/17/18/36/refinery-3613526__340.jpg"
                                    alt="First slide"
                                    />
                                    <Carousel.Caption>
                                    <h4 id='percentage_red_style' >20.56 USD</h4>
                                    <h5 id='number_white_style'>Crude Oil</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={4000}>
                                    <img
                                    height={150}
                                    className="d-block w-100"
                                    src="https://images.pexels.com/photos/321452/pexels-photo-321452.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                    <h4 id='percentage_green_style' >56.23 USD</h4>
                                    <h5 id='number_white_style'>Gold</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={3500}>
                                    <img
                                    height={150}
                                    className="d-block w-100"
                                    src="https://st2.depositphotos.com/1050267/6671/i/950/depositphotos_66715947-stock-photo-stack-of-silver-bars-in.jpg"
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    <h4 id='percentage_red_style' >12.36 USD</h4>
                                    <h5 id='number_white_style'>Silver</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={3500}>
                                    <img
                                    height={150}
                                    className="d-block w-100"
                                    src="https://newagemetals.com/wp-content/uploads/Platinum-Bar.jpg"
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    <h4 id='percentage_green_style' >89.25 USD</h4>
                                    <h5 id='number_white_style'>Platinum</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </Col>

                    <br></br>
                    <ButtonGroup size="lg" className="mb-2 w-100">
                        <Button style={button} variant="outline-secondary">NasDaQ<div id='percentage_red_style'><div >2.1%</div></div></Button>
                        <Button style={button} variant="outline-secondary">Tokyo<div id='percentage_green_style'><div >4.21%</div></div></Button>
                    </ButtonGroup>
                    <ButtonGroup size="lg" className="mb-2 w-100">
                        <Button style={button} variant="outline-secondary">London<div id='percentage_green_style'><div >1.51%</div></div></Button>
                        <Button style={button} variant="outline-secondary">NewYork<div id='percentage_green_style'><div >1.91%</div></div></Button>
                    </ButtonGroup>

                    <Col>
                        <div id='headings_carousel' style={{marginTop: '0px'}}>
                            <Carousel>
                                <Carousel.Item interval={2000}>
                                    <img height={150}
                                    className="d-block w-100"
                                    src="https://cdn.pixabay.com/photo/2015/09/15/15/53/bank-notes-941246__340.jpg"
                                    alt="First slide"
                                    />
                                    <Carousel.Caption>
                                    <h4 id='number_white_style'>0.99 EUR</h4>
                                    <h5 id='number_white_style'>USD</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={1500}>
                                    <img
                                    height={150}
                                    className="d-block w-100"
                                    src="https://cdn.pixabay.com/photo/2017/08/21/15/55/money-2665824__340.jpg"
                                    alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                    <h4 id='number_white_style'>1.01 USD</h4>
                                    <h5 id='number_white_style'>EUR</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={2000}>
                                    <img
                                    height={150}
                                    className="d-block w-100"
                                    src="https://cdn.pixabay.com/photo/2016/02/19/11/28/british-1209730__340.jpg"
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    <h4 id='number_white_style'>1.17 USD</h4>
                                    <h5 id='number_white_style'>GBP</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={2000}>
                                    <img
                                    height={150}
                                    className="d-block w-100"
                                    src="https://cdn.pixabay.com/photo/2019/07/03/13/12/swiss-francs-4314471__340.jpg"
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    <h4 id='number_white_style'>1.05 USD</h4>
                                    <h5 id='number_white_style'>CHF</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </Col>

                    <div id='column_left'>
                        <br></br>
                        <Card className='w-100'>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/4133256/pexels-photo-4133256.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                            <Card.Body>
                                <a href="/Currency" id='title_in_card'>
                                    <Card.Title>India Becomes The Most Populous Country In The World?? <a href='/#' id='button_sub_date'>2022-09-16</a></Card.Title>
                                </a>
                            </Card.Body>
                        </Card>
                    </div>


                    <Col>
                        <div id='headings_carousel'>
                            <Carousel>
                                <Carousel.Item interval={1000}>
                                    <img height={150}
                                    className="d-block w-100"
                                    src="https://cdn.pixabay.com/photo/2016/10/16/13/06/new-york-1745089__340.jpg"
                                    alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h4>United States</h4>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={1500}>
                                    <img
                                    height={150}
                                    className="d-block w-100"
                                    src="https://cdn.pixabay.com/photo/2019/12/14/12/08/night-4694750__340.jpg"
                                    alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                    <h4>China</h4>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={1000}>
                                    <img
                                    height={150}
                                    className="d-block w-100"
                                    src="https://cdn.pixabay.com/photo/2016/01/03/00/16/big-ben-1118888__340.jpg"
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    <h4>United Kingdom</h4>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={1500}>
                                    <img
                                    height={150}
                                    className="d-block w-100"
                                    src="https://cdn.pixabay.com/photo/2020/09/14/22/27/river-5572289__340.jpg"
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    <h4>Japan</h4>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={1000}>
                                    <img
                                    height={150}
                                    className="d-block w-100"
                                    src="https://cdn.pixabay.com/photo/2020/04/08/13/24/sunset-5017360__340.jpg"
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    <h4>India</h4>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={1500}>
                                    <img
                                    height={150}
                                    className="d-block w-100"
                                    src="https://cdn.pixabay.com/photo/2016/07/30/08/13/moscow-1556561__340.jpg"
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    <h4>Russia</h4>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={1000}>
                                    <img
                                    height={150}
                                    className="d-block w-100"
                                    src="https://cdn.pixabay.com/photo/2019/08/19/15/13/eiffel-tower-4416700__340.jpg"
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    <h4>France</h4>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </Col>

                    <div id='column_center'>
                        <br></br>
                        <Button className='w-100' id='button_low_top_margin' variant="outline-secondary" size="lg">Your Country <a href='/#' id='button_sub_title_blue'>Dive In</a></Button>
                    </div>

                    <Row>
                        <Col xs lg="2">
                            <Image id='uklrain_flag_image' src="https://cdn-icons-png.flaticon.com/64/330/330540.png"></Image>
                        </Col>
                        <Col>
                            <Button className='w-100 rounded-pill border border-0' id='button_support_ukrain' variant="outline-primary" size="lg">Ukraine Need You</Button>
                        </Col>
                    </Row>

                    <div id='column_center'>
                        <br></br>
                        <Button className='w-100' id='button_low_top_margin' variant="outline-success" size="lg">Subscribe Us</Button>
                    </div>


                </Col>

                {/* News Column Ends */}

            </Row>

            {/* Footer News Starts */}

            <br></br>
            <h2>Latest News Available</h2>
            <div id='singele_line'></div>

            <Row>
                <Col>
                    <div id='column_left'>
                        <br></br>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/220365/pexels-photo-220365.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                            <Card.Body>
                                <a href="/Currency" id='title_in_card'>
                                    <Card.Title>Global Poverty Rate Increased. Lower Income People Going... <a href='/#' id='button_sub_date'>2022-09-16</a></Card.Title>
                                </a>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                
                <Col>
                    <div id='column_left'>
                        <br></br>
                        <Card className='w-100' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/745243/pexels-photo-745243.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                            <Card.Body>
                                <a href="/Currency" id='title_in_card'>
                                    <Card.Title>China Increased GDP Growth Rate In 2022. Corona Virus... <a href='/#' id='button_sub_date'>2022-09-06</a></Card.Title>
                                </a>
                            </Card.Body>
                        </Card>
                    </div>                    
                </Col>

                <Col>
                    <div id='column_left'>
                        <br></br>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/10/13/11/49/putin-2847423__340.jpg" />
                            <Card.Body>
                                <a href="/Currency" id='title_in_card'>
                                    <Card.Title>Putin Tells Xi He Understands China ‘Concerns’ on War in Ukraine... <a href='/#' id='button_sub_date'>2022-09-16</a></Card.Title>
                                </a>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                
                <Col>
                    <div id='column_left'>
                        <br></br>
                        <Card className='w-100' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/09/13/15/14/money-938269__340.jpg" />
                            <Card.Body>
                                <a href="/Currency" id='title_in_card'>
                                    <Card.Title>Offshore Yuan Drops Past 7 Per Dollar for First Time Since 2020... <a href='/#' id='button_sub_date'>2022-09-06</a></Card.Title>
                                </a>
                            </Card.Body>
                        </Card>
                    </div>                    
                </Col>
            </Row>
            {/* Footer News Ends */}


        </div>
    )
}

export default NewsOfCurrency