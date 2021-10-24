import React from 'react';


interface Props {
    name : string,
    logo: string,
    director : string,
    totalEmployee : number,
    address : any
}
const companyInfo = (props:Props) => {
    // let street : string | null = props.address.street
    // let landmark : string | null = 
    // for (const key in props.address) {
        
    // }
    const logoClass = 'basic-info mb-5 ' + props.name;
    return (
        <div className= {logoClass}>
            <img src={props.logo} alt="" />
            <div className='d-flex align-items-center director-name mb-1'>
            {/* <h4 className='mb-2'> */}
                <span>Director name: </span>
                <span> {props.director}</span>
            {/* </h4> */}

            </div>
            <span>Number of Employee: <strong>{props.totalEmployee}</strong></span>
            <br/>
            <div className='d-flex mt-2'>
                <span>Address:</span>
                <address className='mb-0'>
                    {props.address.street}
                        <br/>
                    {props.address.landmark}
                </address>
            </div>
        </div>
    )
}

export default companyInfo;