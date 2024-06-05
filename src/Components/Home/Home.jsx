import React, { useEffect } from 'react';
import "./Home.css";
import gsap from 'gsap/all';
import SplitType from 'split-type';
//hello world
export default function Home() {
    useEffect(() => {
        const homeanime = (selector) => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                const text = new SplitType(element, { type: "chars" });
                gsap.from(text.chars, {
                    y: '110%',
                    opacity: 0,
                    rotationZ: '10',
                    duration: 1,
                    ease: 'power1.inOut',
                    stagger: 0.1,
                });
            });
        };
        homeanime(".head-text")
    })
    return (
        <>
            <div id="Home" className='swiper '>
                <div className='w-full'>
                    <div className='hero-text md:text-6xl sm:text-5xl text-4xl w-full relative font-bold text-center '>
                        <div className='hero-text-div w-full relative'>
                            <h1 className='head-text'>Chennai Digital Prints</h1>
                            <p className='lg:text-4xl md:text-xl text-lg head-text py-2 '>DIGITAL PRESS - A UNIT OF CHENNAI XEROX</p>
                        </div>
                    </div>
                    <div className='hero-image h-full flex justify-center items-end relative  '>
                        <div className='hero-img-div'>
                            <img src=".\Home\Backgound.jpg" alt="printing" className='h-full w-full' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
