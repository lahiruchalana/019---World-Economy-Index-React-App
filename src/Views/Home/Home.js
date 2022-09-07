import React from 'react'

import Carousel from 'react-bootstrap/Carousel';

import 'bootstrap/dist/css/bootstrap.css';

// import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return(
        <div className='container'>

            <div id='headings_carousel'>
                <Carousel>
                    <Carousel.Item interval={1000}>
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
                    <Carousel.Item interval={1000}>
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