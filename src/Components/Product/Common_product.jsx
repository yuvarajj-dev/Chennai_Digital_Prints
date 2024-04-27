import React, { useState } from 'react'
import "./Product.css"
import Card from './Card/Card'
import cardlist from './Card/Carddata'
import Popup from './POPUP/Popup'


export default function Common_product() {
    const [cardvalue, Setcarddata] = useState(cardlist)
    const [value,setValue] = useState(false);
    const [name,setName] = useState("")
    function handlevalues(val1,val2){
        setValue(val1);
        setName(val2);
    }
    return (
        <>
            <div id='Product' className='Product'>
                <div className='flex justify-center my-10'>
                    <h1 className='sm:text-5xl text-center text-3xl font-bold head '>OUR PRODUCTS</h1>
                </div>
                <div className='grid xl:grid-cols-3 sm:grid-cols-2 my-10 items-center  gap-5'>
                    {
                        cardvalue.map((val) => (
                            <Card open={(value1,value2)=>{handlevalues(value1,value2)}} val={val} />
                        ))
                    }
                </div>
            </div>
            <div>
                <Popup close={(val)=>{setValue(val)}} name={name} value={value}/>
            </div>
        </>
    )
}
