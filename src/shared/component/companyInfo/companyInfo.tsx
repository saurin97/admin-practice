import React from 'react'

import user from '../../../assets/images/company.png'
const companyProfile = () =>  (
    <div className='company-profile d-flex align-items-center'>
        <img src={user} alt=""/>
        <div>
            <h5><strong>ScaleTech</strong></h5>
            <a href="/">facebook.com/scaletech</a>
        </div>
    </div>
)

export default companyProfile;