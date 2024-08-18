"use client";
import Slider from "react-slick";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Fade } from "react-awesome-reveal";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image";

// CAROUSEL COMPONENT
export default function MultipleItems() {
    const [postData, setPostData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://mmngrm2h3i.execute-api.ap-south-1.amazonaws.com/gangaArti/get_ourTeam");
                setPostData(response.data['body-json']['body']['Items']);
                console.log("Response", response.data['body-json']['body']['Items'])
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

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
        <div className="py-10 sm:py-20 bg-gray-100">
            <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8'>
                <div className="text-center mb-10">
                    <Fade direction={'up'} delay={400} cascade damping={0.1} triggerOnce={true}>
                        <h2 className='text-pink-600 text-lg font-medium mb-3 tracking-widest uppercase'>
                            TEAM MEMBERS
                        </h2>
                    </Fade>
                    <Fade direction={'up'} delay={800} cascade damping={0.1} triggerOnce={true}>
                        <h3 className="text-3xl lg:text-5xl font-semibold text-black">
                            Let's Meet Our Team Members
                        </h3>
                    </Fade>
                </div>

                <Slider {...settings}>
                    {postData.map((item, i) => (
                        <div key={i}>
                            <div className='m-3 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300'>
                                <div className="relative mb-4">
                                    <Image 
                                        src={item.photo} 
                                        alt={item.name} 
                                        width={362} 
                                        height={262} 
                                        className="w-full h-64 object-contain rounded-t-lg" 
                                    />
                                </div>
                                <h3 className='text-2xl font-semibold text-gray-800'>
                                    {item.name}
                                </h3>
                                <h4 className='text-lg font-normal text-gray-600 pt-2'>
                                    {item.profession}
                                </h4>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
