import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Banner() {
    return (
        <div className="relative">
            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-50 to-transparent bottom-0 z-20" />
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval="5000">
                <div>
                    <img loading="lazy" src="" alt="" />
                    <h1> banner goes here </h1>
                </div>

                <div>
                    <img loading="lazy" src="" alt="" />
                    <h1> banner goes here </h1>
                </div>

                <div>
                    <img loading="lazy" src="" alt="" />
                <h1> banner goes here </h1>
                </div>
            </Carousel>
        </div>
    );
}
export default Banner;
