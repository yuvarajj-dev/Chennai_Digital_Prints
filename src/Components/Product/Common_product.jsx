import React from 'react'
import "./Product.css"
import Card from './Card/Card'

export default function Common_product() {
    return (
        <>
            <div className='Product'>
               <div className='flex justify-center my-10'>
                    <h1 className='sm:text-5xl text-center text-3xl font-bold head '>OUR PRODUCTS</h1>
               </div>
               <div className='grid xl:grid-cols-3 sm:grid-cols-2 my-10 gap-5'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
               </div>
            </div>
        </>
    )
}
