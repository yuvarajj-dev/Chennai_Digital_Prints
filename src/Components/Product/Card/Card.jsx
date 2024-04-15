import React from 'react'
import "./Card.css"
export default function Card() {
    return (
        <>
            <div className='mx-auto my-10'>
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner">
                        <div>
                            <img src=".\Visiting card\visiting.jpg" alt="card" className='card-img' />
                        </div>
                        <div className='text-center my-5'>
                            <h1 className='md:text-2xl sm:text-lg font-bold card-head'>Visiting cards</h1>
                            <div className='my-10'>
                                <button className='button'>For more...</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
