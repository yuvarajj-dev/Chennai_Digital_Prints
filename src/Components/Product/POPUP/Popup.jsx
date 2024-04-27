import React, { useState, useEffect } from 'react';
import "./Popup.css";
import Product_val from './Popupdata';
import { gsap } from 'gsap'; // Import GSAP
import { Alert } from 'flowbite-react';

export default function Popup(props) {
  useEffect(() => {
    if (props.value) {
      // Animation for popup entry
      gsap.from("popupimg", {
        opacity: 0,
        duration: 1,
        ease: "power3.inOut"
      })
      gsap.from('.Popup', {
        opacity: 0,
        duration: 0.5,
        ease: "power3.inOut"
      });
    } else {
      // Handle the case when the popup is closed
      Alert("welcome")
    }
  }, [props.value]);

  if (props.value) {
    return (
      <div className='Popup'>
        <button onClick={() => { props.close(false) }} className='absolute right-2 sm:right-5 sm:top-2'>
          <svg
            height="25px"
            viewBox="0 0 512 512"
            width="25px"
            fill='red'
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z" />
          </svg>
        </button>
        <div className='grid lg:grid-cols-2 md:grid-cols-1 items-center'>
          {
            Product_val.map((val) => {
              console.log(props.name);
              if (val.Product_name.includes(props.name)) {
                return (
                  <div className='popupimg'>
                    <img src={val.Product_path} alt={val.Product_name} loading='lazy' />
                  </div>
                )
              } else {
                return null;
              }
            })
          }
        </div>
      </div>
    )
  } else {
    return null;
  }
}
