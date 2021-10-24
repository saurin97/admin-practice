import React from 'react';
import userImg from '../../../../assets/images/profile.jpg'

interface Props {
    img? : string
    name : string
    role : string
}

const avatar = (props : Props) => {
    return (
        <div className='col-5 profile-img-wrapper text-center'>
            <div className='profile-img text-center mb-2'>
                <img src={props.img === '' ? userImg :  props.img} alt="" className='avatar' />
            </div>
            <h4 className='mb-1'>hello, {props.name}</h4>
            <p className='mb-0'>{props.role}</p>
        </div>
    )
}

export default avatar;