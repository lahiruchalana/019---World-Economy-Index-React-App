import React from 'react'
import { useParams } from 'react-router';

import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from "react-bootstrap/Image";

function Currency() {
    const { id } = useParams();

    var button = {
        borderRadius:'0px'
    };

    var button_low_top_margin = {
        borderRadius:'0px',
        marginTop: '-13px'
    };

    var button_styles = {
        marginTop:'10px',
        borderRadius:'0px'
    };

    var button_support_ukrain = {
        marginTop:'33px',
        borderRadius:'0px',
        marginLeft: '15px'
    };

    var uklrain_flag_image = {
        marginTop:'23px',
    };

    var percentage_green_style = {
        color: 'rgb(5, 223, 12)',
        textShadow: '1px 1px  white'
    };

    var percentage_red_style = {
        color:'red',
        textShadow: '1px 1px  white'
    };

    var number_white_style = {
        color:'white',
        textShadow: '2px 2px  black'
    };

    
    return(
        <div className='container'>

            <Row>

                {/* Page Related Content Column Starts */}

                <Col>

                </Col>

                {/* Page Related Content Column Ends */}

                {/* News Column Starts */}

                <Col>

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
                                    <h4 style={percentage_red_style}>20.56 USD</h4>
                                    <h5>Crude Oil</h5>
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
                                    <h4 style={percentage_green_style}>56.23 USD</h4>
                                    <h5>Gold</h5>
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
                                    <h4 style={percentage_red_style}>12.36 USD</h4>
                                    <h5>Silver</h5>
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
                                    <h4 style={percentage_green_style}>89.25 USD</h4>
                                    <h5>Platinum</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </Col>

                    <div id='column_left'>
                        <br></br>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/158776/euro-money-currency-the-european-158776.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                            <Card.Body>
                                <a href="/currency/1" id='title_in_card'>
                                    <Card.Title>Breaking - Putin Hit A Massive Damage On Euro</Card.Title>
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
                        <Button className='w-100' style={button_low_top_margin} id='home_buttons' variant="outline-secondary" size="lg">Your Country <a href='/#' id='button_sub_title_blue'>Dive In</a></Button>
                    </div>

                    <Row>
                        <Col xs lg="2">
                            <Image style={uklrain_flag_image} src="https://cdn.icon-icons.com/icons2/97/PNG/64/ukraine_flags_flag_17076.png"></Image>
                        </Col>
                        <Col>
                            <Button className='w-100 rounded-pill border border-0' style={button_support_ukrain} id='home_buttons' variant="outline-primary" size="lg">Ukrain Need Your Help</Button>
                        </Col>
                    </Row>


                </Col>

                {/* News Column Ends */}

            </Row>

            <h2>{id}</h2>
        </div>
    )
}

export default Currency