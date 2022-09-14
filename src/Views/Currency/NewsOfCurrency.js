import React from 'react'
import { useParams } from 'react-router';

import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from "react-bootstrap/Image";

import CanvasJSReact from '../assets/canvasjs.react';



function NewsOfCurrency() {
    const { id } = useParams();


    // var CanvasJS = CanvasJSReact.CanvasJS;
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;

    const options = {
        animationEnabled: true,
        title:{
            text: "Monthly Sales - 2017"
        },
        axisX: {
            valueFormatString: "MMM"
        },
        axisY: {
            title: "Sales (in USD)",
            prefix: "$"
        },
        data: [{
            yValueFormatString: "$#,###",
            xValueFormatString: "MMMM",
            type: "spline",
            dataPoints: [
                { x: new Date(2017, 0), y: 25060 },
                { x: new Date(2017, 1), y: 27980 },
                { x: new Date(2017, 2), y: 42800 },
                { x: new Date(2017, 3), y: 32400 },
                { x: new Date(2017, 4), y: 35260 },
                { x: new Date(2017, 5), y: 33900 },
                { x: new Date(2017, 6), y: 40000 },
                { x: new Date(2017, 7), y: 52500 },
                { x: new Date(2017, 8), y: 32300 },
                { x: new Date(2017, 9), y: 42000 },
                { x: new Date(2017, 10), y: 37160 },
                { x: new Date(2017, 11), y: 38400 }
            ]
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
                            <Card.Img height={150} variant="top" src="https://cdn.pixabay.com/photo/2015/03/01/05/56/china-654405__340.jpg" />
                            <Card.Body>
                                <a href="/Currency" id='title_in_card'>
                                    <Card.Title id='subscribe_title_in_card'>Be Updated With Us, Subscribe Us. Economy, Forum, Researches, Investments and Academy All in a One Place </Card.Title>
                                    <Card.Title id='subscribe_title_in_card'> - World Economy Index - </Card.Title>
                                </a>
                            </Card.Body>
                        </Card>
                    </div>

                    <div id='column_left'>
                        <br></br>
                        <Card className='w-100'>
                            <Card.Img height={280} variant="top" src="https://cdn.pixabay.com/photo/2022/08/15/09/12/chongqing-7387442__340.jpg" />
                            <Card.Body>
                                <a href="/Currency" id='title_in_card'>
                                    <Card.Title id='subscribe_title_in_card'>Be Updated With Us, Subscribe Us. Economy, Forum, Researches, Investments and Academy All in a One Place </Card.Title>
                                    <Card.Title id='subscribe_title_in_card'> - World Economy Index - </Card.Title>
                                </a>
                            </Card.Body>
                        </Card>
                    </div>

                    <div id='column_left'>
                        <br></br>
                        <Card className='w-100'>
                            <Card.Img height={230} variant="top" src="https://cdn.pixabay.com/photo/2021/05/18/08/18/buildings-6262615__340.jpg" />
                            <Card.Body>
                                <a href="/Currency" id='title_in_card'>
                                    <Card.Title id='subscribe_title_in_card'>Ukraine Need Your Help !!!</Card.Title>
                                </a>
                            </Card.Body>
                        </Card>
                    </div>

                    {/* News Content Starts */}

                    <br></br>
                    <h2>Breaking - Putin Hit A Massive Damage On Euro</h2>
                    <h6>2022_09_23, Amesterdam, Netherland - Mark Zchenn</h6>
                    <br></br>
                    <h5>casbciabci</h5>

                    <br></br>
                    <br></br>

                    {/* Charts or Tables Starts */}

                    <CanvasJSChart options = {options}/>

                    {/* Charts or Tables Ends */}



                    {/* News Content Starts */}


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
                            <Image id='uklrain_flag_image' src="https://cdn.icon-icons.com/icons2/97/PNG/64/ukraine_flags_flag_17076.png"></Image>
                        </Col>
                        <Col>
                            <Button className='w-100 rounded-pill border border-0' id='button_support_ukrain' variant="outline-primary" size="lg">Ukraine Need Your Help</Button>
                        </Col>
                    </Row>


                </Col>

                {/* News Column Ends */}

            </Row>

            <h2>{id}</h2>
        </div>
    )
}

export default NewsOfCurrency