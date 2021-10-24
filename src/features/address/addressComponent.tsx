import React from 'react';

interface AddressDetail {
    street : string,
    town : string,
    pincode: number,
    state : string,
    addressType: string,
}
interface Address {
    name: string
    phone: number
    address : AddressDetail
}

interface Props {
    address: Address
}
const addressComponent:React.FC<Props> =(props) => {
    console.log(props.address);
    
    return (
        <div className='address col-6'>
            <p className='mb-1'><span>Name : </span> {props.address.name}</p>
            <p className='mb-1'><span>Phone : </span> {props.address.phone}</p>
            <div className='d-flex'>
                <span className='grey-color font-bold mr-1'>Address : </span>
                <address>
                    {props.address.address.street}, {props.address.address.town}
                    <br/>
                    {props.address.address.pincode}, {props.address.address.state}
                </address>
            </div>
        </div>
    )
}

export default addressComponent;