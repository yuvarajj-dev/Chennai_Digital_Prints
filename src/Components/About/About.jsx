import React from 'react'
import "./About.css"
export default function About() {
  return (
    <>
      <div id='About' className='about pt-14'>
        <div className='text-center'>
          <h1 className='sm:text-5xl text-3xl font-bold underline '>ABOUT US</h1>
        </div>
        <div className='about-des w-full pt-5'>
          {/* FIRSST SECTION */}
          <div className='about-we w-full md:flex md:justify-between py-5 items-center  '>
            <div className='md:w-1/2  mx-auto'>
              <img src=".\About section\digital-printing-concept-in-circle-vector-20923017.jpg" alt="we" className='digital-img' />
            </div>
            <div className='md:w-1/2'>
              <h1 className='text-center md:text-4xl text-2xl font-bold py-4 underline'>WHO WE ARE</h1>
              <p className='font-semibold md:text-xl text-justify'>Welcome to Chennai Digital Prints! Since 2006, we've been your trusted destination for all your printing needs. Our mission is simple:
                to provide the best quality products and services at affordable prices, always keeping our customers' satisfaction as our top priority.</p>
            </div>
          </div>
          {/* SECOND SECTION */}
          <div className='md:flex w-full py-5 justify-between'>
            <div className='what-text  md:w-1/2'>
              <h1 className='text-center md:text-4xl text-2xl font-bold py-4 underline'>WHAT WE DO</h1>
              <p className='font-semibold md:text-xl text-justify'>At Chennai Digital Prints, we specialize in design and printing services.
                From creating eye-catching visuals to printing them flawlessly, we handle it all. Our range of products includes:</p>
              <ul className='font-semibold md:text-xl w-32 mx-auto my-3 text-justify list-disc'>
                <li>Visiting Cards</li>
                <li>Brochures</li>
                <li>Pamphlets</li>
                <li>Photo Frames</li>
                <li>Lanyards</li>
                <li>ID Cards</li>
              </ul>
              <p className='font-semibold md:text-xl text-justify'>And much more! With top-notch materials and attention to detail, we ensure that every product meets the highest standards of quality.</p>
            </div>
            <div className="what-img md:w-1/2 py-4 md:py-0 flex justify-center ">
              <img src=".\About section\id-card-rope-967.jpg" alt="idcard" className='shadow-xl' />
            </div>
          </div>
          {/* Third Secion */}
          <div className='customer py-5'>
            <h1 className='text-center md:text-4xl text-2xl font-bold py-4 underline'>Customer Satisfaction Guaranteed</h1>
            <p className='font-semibold md:text-xl text-justify md:text-center md:w-1/2 mx-auto'>At Chennai Digital Prints, we guarantee your satisfaction. Our dedicated team is here to assist you with any questions, requests, or concerns you may have. We're committed to ensuring that every interaction with us is seamless and enjoyable, because your satisfaction is our priority.

              Experience the difference with Chennai Digital Prints – where quality, affordability, and customer satisfaction come together to fulfill all your printing needs.</p>
          </div>
          {/* Marquee space  */}
          <div className='py-5'>
            <h1 className='md:text-3xl text-xl font-bold underline text-center py-3'>OUR CLIENTS</h1>
            <div className='marqu'>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
