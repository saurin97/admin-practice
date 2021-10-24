import React from 'react';
import img from '../../assets/images/Screenshot.jpg'

const welcomeMessage = () =>(
    <div className='section-divider d-flex mt-5'>
        <div className='section-left-side'>
            <h3 className='mb-2'>Hello, Saurin</h3>
            <p className='mb-2'>Good Morning....</p>
            <p className='mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, deleniti. Vero doloremque illo</p>
        </div>
        <div className='section-right-side d-flex justify-content-center align-items-center'>
            <img src={img} alt="" />
        </div>

    </div>
)

export default welcomeMessage;