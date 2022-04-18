import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const navigate = useNavigate()
    const {name,img,price} = service
    const handleCheckOut = () =>{
        navigate('/checkout')
    }
    return (
        <div className='service text-center'>
           <img src={img} alt="" />
           <h2>{name}</h2>
           <p>Price: ${price}</p>
           <button onClick={handleCheckOut}>Go & Checkout</button>
        </div>
    );
};

export default Service;