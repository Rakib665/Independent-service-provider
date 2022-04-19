import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import './Service.css'

const Service = ({ service }) => {
    const { name, img, price,description } = service

    //
    return (
        <div className='service text-center container'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <p>{description}</p>
            <Link to='/checkout'>
                <button className='bg-info checkout-btn'>Go and Checkout</button>

            </Link>

        </div> 
        
    );
};

export default Service;