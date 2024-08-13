"use client"
import Image from 'next/image';
 
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { Fade } from "react-awesome-reveal";
import Pujaimage from "../../Assets/gangamaa.jpg"

interface cardDataType {
    imgSrc: string;
    heading: string;
    subheading: string;
    link: string;
}

const Work = () => {
    return (
        <div>
            <div className='mx-auto max-w-7xl py-40 px-6' id="about-section">
                <div className='text-center mb-14'>
                    <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                        <h3 className='text-pink text-lg font-normal mb-3 ls-51 uppercase'>Features</h3>
                    </Fade>
                    <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                        <p className='text-3xl lg:text-5xl font-semibold text-lightgrey'>Get a many of interesting <br /> features.</p>
                    </Fade>
                </div>

                <div className='flex flex-col lg:flex-row gap-y-20 gap-x-10 mt-32 items-center'>
                    <Fade direction={'up'} delay={1000} cascade damping={1e-1} triggerOnce={true}>
                        <div className='flex-1 flex justify-center lg:justify-end'>
                            <Image src={Pujaimage} alt="Puja Event" layout='intrinsic' width={1500} height={1300} className='rounded-xl'/>
                        </div>
                        <div className='flex-1 text-center lg:text-left'>
                            <h3 className='text-3xl font-semibold mb-5'>We Help Simplify Your Event Management and Planning Process</h3>
                            <p className='text-lg font-normal text-black text-opacity-50 mb-10'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde aliquam consequuntur recusandae hic corrupti a repellendus, delectus sit omnis dolorum cumque in molestiae corporis quod nostrum, ad, vitae enim harum atque magni?
                            </p>
                             <p className='text-lg font-normal text-black text-opacity-50 mb-10'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde aliquam consequuntur recusandae hic corrupti a repellendus, delectus sit omnis dolorum cumque in molestiae corporis quod nostrum, ad, vitae enim harum atque magni?
                            </p>
                             <p className='text-lg font-normal text-black text-opacity-50 mb-10'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde aliquam consequuntur recusandae hic corrupti a repellendus, delectus sit omnis dolorum cumque in molestiae corporis quod nostrum, ad, vitae enim harum atque magni?
                            </p>
                            <div className='text-center'>
                               
                                <button> <a className='bg-pink text-white py-2 px-4 rounded-lg inline-flex items-center'>
                                        Book now 
                                        <ChevronRightIcon className='ml-2 h-5 w-5' />
                                    </a></button>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Work;
