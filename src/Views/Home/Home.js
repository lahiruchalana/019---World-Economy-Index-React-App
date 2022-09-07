import React from 'react'

import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
    return(
        <div className='container'>
            <Row>
                <Col>
                    <div id='column_left'>
                        <br></br>
                        <Button variant="outline-secondary" size="lg">Secondary</Button>
                    </div>
                </Col>
                <Col>
                    <div id='column_left'>
                        <br></br>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>                    </div>
                </Col>
                <Col>
                    <div id='column_left'>
                        <br></br>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col id='column_right'>
                    <br></br>
                    <ButtonGroup size="lg" className="mb-2">
                        <Button variant="outline-secondary">NasDaQ <div id='value_text'>2.1% Up</div></Button>
                        <Button variant="outline-secondary">Crude Oil <div id='value_text'>12.4$</div></Button>
                        <Button variant="outline-secondary">Gold <div id='value_text'>20.3$</div></Button>
                    </ButtonGroup>
                    <br></br>
                    <ButtonGroup size="lg" className="mb-2">
                        <Button variant="outline-secondary">NasDaQ <div id='value_text'>2.1% Up</div></Button>
                        <Button variant="outline-secondary">Crude Oil <div id='value_text'>12.4$</div></Button>
                        <Button variant="outline-secondary">Gold <div id='value_text'>20.3$</div></Button>
                    </ButtonGroup>
                </Col>
            </Row>

            <div id='headings_carousel'>
                <Carousel>
                    <Carousel.Item interval={2000}>
                        <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2016/07/10/20/12/money-1508454_960_720.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>Latest</h3>
                        <h2>Euro in freefall: Currency PLUMMETS to 20-year low as Putin sparks chaos across Europe</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2022/08/31/23/04/sunset-7424323_960_720.jpg"
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h3>Headlines</h3>
                        <h2>Shanghai’s housing market rebounds as banks quicken loan approvals amid lower mortgage rates, spurring demand</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2017/07/02/09/10/stock-2463798_960_720.jpg"
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h3>Breaking</h3>
                        <h2>With 62% ownership of the shares, New York Community Bancorp, Inc. (NYSE:NYCB) is heavily dominated by institutional owners</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

        </div>
    )
}



export default Home