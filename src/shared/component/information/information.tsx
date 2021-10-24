import React from 'react';
import img from '../../../assets/images/computer.jpg'
const information = () => (
    <div className='information text-center mt-5'>
        <img src={img} alt=""/>
        <p>This is some information. This is some information.</p>
        <button>Buy Now</button>
    </div>
)

export default information;