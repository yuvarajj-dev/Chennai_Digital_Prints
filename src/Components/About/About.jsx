import React, { useEffect } from 'react';
import "./About.css";
import gsap, { ScrollTrigger, TextPlugin } from 'gsap/all';
import SplitType from 'split-type';
import Marquee from 'react-fast-marquee';
import CLIENTS from './Aboutdata/Aboutdata';


gsap.registerPlugin(TextPlugin, ScrollTrigger);
export default function About() {
  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);
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

  }, [
    ScrollTrigger.refresh()
  ]);
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
  }, [
    ScrollTrigger.refresh()
  ]);

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
              <p className='font-semibold md:text-xl  text-justify'>At Chennai Digital Prints, we're experts in providing exceptional printing solutions designed just for you. If it's business cards, captivating posters, or customized banners you're after, we've got everything you need. Our focus is on using the latest technology to guarantee sharp, top-quality prints every single time. From start to finish, we're dedicated to going above and beyond to make your vision a reality.</p>
            </div>
          </div>
          {/* SECOND SECTION */}
          <div className='md:flex w-full items-center py-5 justify-between'>
            <div className='what-img order-1 md:order-2 md:w-1/2 py-4 md:py-0 flex justify-center'>
              <img src="https://cdni.iconscout.com/illustration/premium/thumb/printing-house-5756662-4816434.png" alt="idcard" id="idcard" className='' />
            </div>
            <div className='what-text order-2 md:order-1 md:w-1/2'>
              <h1 className='text-center md:text-4xl text-2xl who font-bold py-4'>WHAT WE DO</h1>
              <p className='font-semibold md:text-xl text-justify'>At Chennai Digital Prints, we're not just a printing company; we're your reliable partner in turning your ideas into reality. Since 2006, we've been committed to offering outstanding printing services that go above and beyond. We prioritize quality, affordability, and making sure you're satisfied.</p>
            </div>
          </div>

          {/* Third Secion */}
          {/* <div className='customer py-5'>
            <h1 className='text-center md:text-4xl text-2xl font-bold py-4 who'></h1>
            <p className='font-semibold md:text-xl text-center md:text-center md:w-1/2 mx-auto'>At Chennai Digital Prints, your satisfaction is our top priority. We're here to assist you with any questions or concerns you may have. We aim to make every interaction easy and enjoyable. Experience the best in printing with Chennai Digital Prints.</p>
          </div> */}
          <div className='about-we w-full md:flex md:justify-between py-5 items-center  '>
            <div className='md:w-1/2  mx-auto md:flex justify-center '>
              <img src=".\About section\Review.png" alt="we" className='justdial lg:w-[40%] w-[80%] md:w-[40%] mx-auto ' />
              <img src=".\About section\Google.png" alt="we" className='justdial lg:w-[60%] w-[80%] md:w-[60%] mx-auto' />
            </div>
            <div className='md:w-1/2'>
              <h1 className='text-center md:text-4xl text-2xl font-bold py-4  who '>Customer Satisfaction Guaranteed</h1>
              <p className='font-semibold md:text-xl  text-justify'>At Chennai Digital Prints, your satisfaction is our top priority. We're here to assist you with any questions or concerns you may have. We aim to make every interaction easy and enjoyable. Experience the best in printing with Chennai Digital Prints.</p>
            </div>
          </div>
          {/* Marquee space  */}
          <div className='py-5'>
            <h1 className='md:text-3xl text-xl font-bold who text-center py-3  '>OUR CLIENTS</h1>
            <div className='marqu shadow-xl flex justify-center items-center overflow-hidden'>
              <Marquee pauseOnHover={true} speed={70}>
                {
                  CLIENTS.map((val) => (
                    <img src={val.Client_path} alt={val.Client_name} className='client-img' />
                  ))
                }
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
