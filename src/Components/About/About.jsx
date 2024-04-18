import React, { useEffect } from 'react';
import "./About.css";
import gsap, { ScrollTrigger, TextPlugin } from 'gsap/all';
import SplitType from 'split-type';

gsap.registerPlugin(TextPlugin, ScrollTrigger);
export default function About() {
  window.addEventListener("scroll", () => {
    ScrollTrigger.refresh();
  })
  useEffect(() => {
    // Apply animations using ScrollTrigger
    gsap.to(".round-img", {
      scrollTrigger: {
        trigger: ".round-img",
        start: "top 85%",
        end: "bottom 85%",
        scrub: true, // Smoothly scrub through animation as you scroll
      },
      duration: 2,
      rotate: 360
    });
    gsap.fromTo(
      "#idcard",
      {
        opacity: 0, // Starting opacity
      },
      {
        opacity: 1, // Ending opacity
        scrollTrigger: {
          trigger: "#idcard",
          start: "top 85%",
          end: "bottom 80%",
          scrub: true,
        },
        duration: 2,
      }
    );

  }, []);
  useEffect(() => {
    const animetext = (selector, scrollTriggerSettings) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        const text = new SplitType(element, { type: "chars" });
        gsap.set(text.chars, { perspective: 500 });
        gsap.from(text.chars, {
          y: '110%',
          opacity: 0,
          rotationZ: '10',
          duration: 1.1,
          ease: 'back.out',
          stagger: 0.1,

          scrollTrigger: {
            trigger: element,
            ...scrollTriggerSettings,
          }
        });
      });
    };

    animetext(".head", {
      start: "bottom 100%",
      end: "top 50%",
      scrub: true,
    });
    animetext(".who", {
      start: "bottom 100%",
      end: "top 50%",
      scrub: true,
    });
    animetext(".who-text", {
      start: "bottom 90%",
      end: "top 50%",
      scrub: true,
    });
  }, []);

  return (
    <>
      <div id='About' className='about pt-14'>
        <div className='text-center '>
          <h1 className='sm:text-5xl text-3xl font-bold head '>ABOUT US</h1>
        </div>
        <div className='about-des w-full pt-5'>
          {/* FIRSST SECTION */}
          <div className='about-we w-full md:flex md:justify-between py-5 items-center  '>
            <div className='md:w-1/2  mx-auto flex justify-center '>
              <img src=".\About section\digital-printing-concept-in-circle-vector-20923017.jpg" alt="we" className='digital-img round-img w-full' />
            </div>
            <div className='md:w-1/2'>
              <h1 className='text-center md:text-4xl text-2xl font-bold py-4  who '>WHO WE ARE</h1>
              <p className='font-semibold md:text-xl  text-justify'>Welcome to Chennai Digital Prints! Since 2006, we've been your trusted destination for all your printing needs. Our mission is simple:
                to provide the best quality products and services at affordable prices, always keeping our customers' satisfaction as our top priority.</p>
            </div>
          </div>
          {/* SECOND SECTION */}
          <div className='md:flex w-full items-center py-5 justify-between'>
            <div className='what-text  order-2 md:order-1  md:w-1/2'>
              <h1 className='text-center md:text-4xl text-2xl who font-bold py-4'>WHAT WE DO</h1>
              <p className='font-semibold md:text-xl text-justify'>At Chennai Digital Prints, we specialize in design and printing services.
                From creating eye-catching visuals to printing them flawlessly, we handle it all. Our range of products includes: Visiting Cards, Brochures, Pamphlets, Photo Frames, Lanyards, ID Cards
                And much more! With top-notch materials and attention to detail, we ensure that every product meets the highest standards of quality.</p>
            </div>
            <div className="what-img order-1 md:order-2 md:w-1/2 py-4 md:py-0 flex justify-center ">
              <img src="https://cdni.iconscout.com/illustration/premium/thumb/printing-house-5756662-4816434.png" alt="idcard" id="idcard" className='' />
            </div>
          </div>
          {/* Third Secion */}
          <div className='customer py-5'>
            <h1 className='text-center md:text-4xl text-2xl font-bold py-4 who'>Customer Satisfaction Guaranteed</h1>
            <p className='font-semibold md:text-xl text-justify md:text-center md:w-1/2 mx-auto'>At Chennai Digital Prints, we guarantee your satisfaction. Our dedicated team is here to assist you with any questions, requests, or concerns you may have. We're committed to ensuring that every interaction with us is seamless and enjoyable, because your satisfaction is our priority.

              Experience the difference with Chennai Digital Prints – where quality, affordability, and customer satisfaction come together to fulfill all your printing needs.</p>
          </div>
          {/* Marquee space  */}
          <div className='py-5'>
            <h1 className='md:text-3xl text-xl font-bold who text-center py-3 '>OUR CLIENTS</h1>
            <div className='marqu'>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
