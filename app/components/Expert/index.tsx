"use client";
import Slider from "react-slick";
import React, { Component } from "react";
 
import { Fade } from "react-awesome-reveal";
import 'slick-carousel/slick/slick.css';
import Image, { StaticImageData } from "next/image";
import 'slick-carousel/slick/slick-theme.css';
import image1 from "../../Assets/Member1.jpeg";
import image2 from "../../Assets/Member1.jpeg";
import image3 from "../../Assets/Member1.jpeg";
import image4 from "../../Assets/profile photo.jpg";
import image6 from "../../Assets/profile photo.jpg";
// import image5 from "../../Assets/png-home-1.png";
 

// CAROUSEL DATA
interface DataType {
    profession: string;
    name: string;
    imgSrc: StaticImageData  // Use StaticImageData for image sources
}

const postData: DataType[] = [
    {
        profession: 'profession',
        name: 'Shoo Thar Mien',
        imgSrc: image1,
    },
    {
        profession: 'profession',
        name: 'Shoo Thar Mien',
        imgSrc: image2,
    },
    {
        profession: 'profession',
        name: 'Shoo Thar Mien',
        imgSrc: image3,
    },
    {
        profession: 'profession',
        name: 'Shoo Thar Mien',
        imgSrc: image4,
    },
    
    {
        profession: 'profession',
        name: 'Shoo Thar Mien',
        imgSrc: image6,
    },
]

// CAROUSEL SETTINGS
export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 4000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        return (
            <div className="py-10 sm:py-20 bg-darkpink">
                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8'>
                    <div className="text-center">
                        <Fade direction={'up'} delay={400} cascade damping={0.1} triggerOnce={true}>
                            <h2 className='text-pink text-lg font-normal mb-3 tracking-widest uppercase ls-51'>TEAM MEMBER&apos;S</h2>
                        </Fade>
                        <Fade direction={'up'} delay={800} cascade damping={0.1} triggerOnce={true}>
                            <h3 className="text-3xl lg:text-5xl font-semibold text-black">
                                Let&apos;s Meet Our Team Member&apos;s.
                            </h3>
                        </Fade>
                    </div>

                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>
                                <div className='m-3 py-14 my-10 text-center'>
                                    <div className="relative">
                                        <Image src={items.imgSrc} alt={items.name} width={362} height={262} className="inline-block m-auto" />
                                    </div>
                                    <h3 className='text-2xl font-semibold text-lightblack'>{items.name}</h3>
                                    <h4 className='text-lg font-normal text-lightblack pt-4 pb-2 opacity-50'>{items.profession}</h4>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}
