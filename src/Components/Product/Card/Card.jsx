import React, { useEffect } from 'react'
import "./Card.css"
import gsap from 'gsap';
import {Image} from "primereact/image"
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);
export default function Card(props) {

    const Handleanime = () => {
        const titles = gsap.utils.toArray(".card-main");
        const imgs = gsap.utils.toArray('.card');

        titles.forEach((title, i) => {
            const imgTl = gsap.timeline({
                scrollTrigger: {
                    trigger: title,
                    scrub: true,
                    start: 'top 95%',
                    end: 'bottom 20%'
                }
            });
            const img = imgs[i];
            imgTl
                .fromTo(img, { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 0.9 })
                .to(img, { opacity: 0, scale: 1, duration: 0.1 }); // fade out
        });
    }
    useEffect(() => {
        Handleanime();
    }, []);

    return (
        <>
            <div className='mx-auto my-10 card-main'>
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner">
                        <div>
                            <img src={props.val.img_url} alt="card" className='card-img' />
                        </div>
                        <div className='text-center my-2'>
                            <h1 className='md:text-2xl sm:text-lg font-bold card-head'>{props.val.name}</h1>
                            <div className='my-5'>
                                <button className='button'>For more...</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
