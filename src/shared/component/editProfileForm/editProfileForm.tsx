import React from 'react';
import { Formik,Form } from 'formik';
import * as Yup from 'yup';

import FormInput from '../input/input';

interface PersonalInfo {
    name : string
    role : string
    birthDate : string
    phone : number
    email : string,
    profile : any
}

interface Props {
    personalInfo : PersonalInfo
    changePersonalInfo : (values:any) => void
    handleOnChangeProfile : (filePath : any) => void
}


const editProfile = (props: Props) => {
    let filePath = props.personalInfo.profile.img;
    return (
        <div className='edit-profile'>
            <Formik
                initialValues={{
                    fullName: props.personalInfo.name,
                    birthDate:props.personalInfo.birthDate,
                    email:props.personalInfo.email,
                    phone:props.personalInfo.phone,
                    profile: {}
                }}
                validationSchema = {
                    Yup.object({
                        fullName: Yup.string()
                            .required('Please enter FullName'),
                        email : Yup.string()
                            .email('Invalid email address')
                            .required('Please enter Email'),
                        phone: Yup.string()
                            .required('Please enter phone number')
                            .matches(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, {
                                message:'phone number length must be 10.',
                        }),
                    })
                }
                onSubmit={(values) => {
                    const formValues = {
                        fullName : values.fullName,
                        email : values.email,
                        phone : values.phone,
                        birthDate : values.birthDate,
                        profile : filePath
                    }
                    props.changePersonalInfo(formValues);
                }}
		    >

			{formik => (
				<Form onSubmit={formik.handleSubmit}>
					<div className='row'>
                        <div className='col-6'>
                                <label htmlFor='profile' className="avatar-wrapper">
                                <img className="profile-pic" src={filePath} alt='' />
                            </label>
                            <input
                                id= 'profile'
                                name='profile'
                                type='file'
                                autoComplete='no'
                                accept="image/*"
                                // value=''
                                onChange={event => { 
                                    const file = event.target.files && event.target.files[0];
                                    filePath =  window.URL.createObjectURL(file); 
                                    props.handleOnChangeProfile(filePath)
                                    formik.setFieldValue('profile',event.target.files)
                                }}
                                hidden
                            />
                        </div>
                        <div className='col-6'>
                            <FormInput name='fullName' type='text' autoCompleted='off' />
                            <FormInput name='birthDate' type='text' autoCompleted='off' disabled = {true}/>
                        </div>
                        <div className='col-6'>
                            <FormInput name='email' type='email' autoCompleted='off' />
                        </div>
                        <div className='col-6'>
                            <FormInput name='phone' type='text' autoCompleted='off' />
                        </div>
                        <div className='col-12 mt-2 mb-2 text-center'>
                            <button type='submit'>Update</button>
                        </div>
                    </div>
				</Form>
			)}

		</Formik>
        </div>
    )
}

export default editProfile;