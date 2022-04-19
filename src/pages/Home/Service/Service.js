import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import './Service.css'

const Service = ({ service }) => {
    const { name, img, price } = service

    //
    return (
        <div className='service text-center'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <Link to='/checkout'>
                <button className='bg-info checkout-btn'>Go and Checkout</button>

            </Link>

        </div> 
        // <div className='container'>
        //     <Card>
        //         <Card.Img variant="top" src={img} />
        //         <Card.Body>
        //             <Card.Title>{name}</Card.Title>
        //             <Card.Text>${price}</Card.Text>
        //             <Card.Text>
        //                 This is a wider card with supporting text below as a natural lead-in to
        //                 additional content. This content is a little bit longer.
        //             </Card.Text>
        //         </Card.Body>
        //         <Link to='/checkout'>
        //             <button  className=' d-block mx-auto text-decoration-none' >Go and Checkout</button>

        //         </Link>
        //     </Card>
        // </div>
    );
};

export default Service;