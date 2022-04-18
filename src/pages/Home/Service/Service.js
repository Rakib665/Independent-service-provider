import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name,img} = service
    return (
        <div className='service text-center'>
           <img src={img} alt="" />
           <h2>Name: {name}</h2>
           <button>Go & Checkout</button>
        </div>
    );
};

export default Service;