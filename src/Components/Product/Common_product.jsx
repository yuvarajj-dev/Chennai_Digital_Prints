import React from 'react'
import "./Product.css"

export default function Common_product() {
    return (
        <>
            <div className='Product'>
                <div className='md:text-4xl text-2xl text-center pt-10 font-bold underline'>
                    <h1>Visiting Cards</h1>
                </div>
                <div className='product-img-div shadow-2xl my-10'>
                    <img src=".\Visiting card\businesscard1.jpg" alt="visting" />
                </div>
                <div className='product-text md:text-center text-justify '>
                    <p className='md:text-2xl font-bold'>A visiting card, also known as a business card, serves as a compact and
                        convenient way to share essential contact information and make a lasting
                        impression.</p>
                    <p className='md:text-2xl  py-3 font-semibold'>This is type of Visiting Card We provide:</p>
                    <ul className='w-64 md:text-xl py-2 font-semibold mx-auto  md:text-start list-disc'>
                        <li>Standard Business Cards</li>
                        <li>Mini Business Cards</li>
                        <li>Square Business Cards</li>
                        <li>Folded Business Cards</li>
                        <li>Die-Cut Business Cards</li>
                        <li>Embossed Business Cards</li>
                        <li>Metal Business Cards</li>
                        <li>Transparent Business Cards</li>
                        <li>Eco-Friendly Business Cards</li>
                        <li>Magnetic Business Cards</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
