import React from 'react'
import EditIcon from '../../icons/edit/edit';

interface Props {
    name? : string
    birthdate? : string
    email : string
    phone : number
    address? : any
    handleCloseModel : () => void
    handleOpenModel : () => void
}

const personalInfo = (props : Props) => {

    return (
        <div className='col-7 personal-information-wrapper'>
            <div className='edit-icon' onClick={props.handleOpenModel}>
                <EditIcon  />
            </div>
            <h3 className='section-title'>Personal Information</h3>
            <div className='personal-information'>
                <p className='mb-1'><span>Name : </span> {props.name}</p>
                <p className='mb-1'><span>Birthdate : </span> {props.birthdate}</p>
                <p className='mb-1'><span>Email : </span> {props.email}</p>
                <p className='mb-1'><span>Number : </span> {props.phone}</p>
                <div className='d-flex'>
                    <span className='grey-color font-bold mr-1'>Address : </span>
                    <address>
                        {props.address.street}
                        <br/>
                        {props.address.landmark}
                    </address>
                </div>
            </div>
       </div>
    )
}

export default personalInfo;