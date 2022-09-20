import React from "react";

import Carousel from 'react-bootstrap/Carousel';


function CarouselComponent() {

    return(
        <div>
            <div id='headings_carousel' href='/#'>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img height={250}
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2015/12/01/15/43/black-1072366__340.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <h4 >Get In Touch With Updates</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img height={250}
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2015/12/01/15/43/black-1072366__340.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <h4>Create Latest News</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img height={250}
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2015/12/01/15/43/black-1072366__340.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <h4>Update Data</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img height={250}
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2015/12/01/15/43/black-1072366__340.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <h4>Comparison And Review Of Countries</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img height={250}
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2015/12/01/15/43/black-1072366__340.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <h4>Researches</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img height={250}
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2015/12/01/15/43/black-1072366__340.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <h4>Academy</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img height={250}
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2015/12/01/15/43/black-1072366__340.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <h4>Investments</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img height={250}
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2015/12/01/15/43/black-1072366__340.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <h4>Forum</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default CarouselComponent;