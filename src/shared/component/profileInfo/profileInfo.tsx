import React from 'react';
import Avatar from './avatar/avatar';
import PersonalInfo from './personalInfo/personalInfo';

interface PersonalInfoInterface {
    name : string
    role : string
    birthDate : string
    phone : number
    email : string,
    profile : any
}

interface Props {
    handleCloseModel : () => void
    handleOpenModel : () => void
    personalInfo : PersonalInfoInterface
}

const profileInfo = (props:Props) => {
    return (
        <div className='profile-info'>
            <div className='row'>
                <Avatar
                    img= {props.personalInfo.profile.img}
                    name = {props.personalInfo.name}
                    role = {props.personalInfo.role}
                />
                <PersonalInfo
                    name={props.personalInfo.name}
                    birthdate = {props.personalInfo.birthDate}
                    email = {props.personalInfo.email}
                    phone = {props.personalInfo.phone}
                    address = {{
                        street : 'A-504 Shapath Hexa, S.G. Highway,',
                        landmark : 'Ahmedabad, Gujarat 380060',
                    }}
                    handleCloseModel = {props.handleCloseModel}
                    handleOpenModel = {props.handleOpenModel}
                />
            </div>
        </div>
    )
}

export default profileInfo;