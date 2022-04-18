import React from 'react';
import { Link} from 'react-router-dom';
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
            <button >Go and Checkout</button>

            </Link>
            
        </div>
    );
};

export default Service;