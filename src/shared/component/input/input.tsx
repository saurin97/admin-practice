import React,{Fragment} from 'react'
import {Field,ErrorMessage} from 'formik';

import CustomDatePicker from '../datePicker/datePicker';

interface Props {
    name : string
    type : string
    autoCompleted? : string
    disabled? : boolean,
    hidden? : boolean
    profile? : string
    placeholder? : string
    selectList? : string[]
}

const input = (props : Props) => {
    let formItem:any = null;

    switch (props.type) {
        case 'text':
            formItem = <div className='form-item'>
                <label htmlFor={props.name} className='text-capitalize'>{props.name} :</label>
                <Field
                    name={props.name}
                    type={props.type}
                    autoComplete={props.autoCompleted}
                    disabled= {props.disabled}
                    placeholder = {props.placeholder}
                />
                <ErrorMessage name={props.name} component="span" className='error' />
            </div>
        break;

        case 'email': 
        formItem = <div className='form-item'>
                <label htmlFor={props.name} className='text-capitalize'>{props.name} :</label>
                <Field
                    name={props.name}
                    type={props.type}
                    autoComplete={props.autoCompleted}
                    disabled= {props.disabled}
                    placeholder = {props.placeholder}
                />
                <ErrorMessage name={props.name} component="span" className='error' />
            </div>
        break;
        case 'file' : 
            formItem = <>
                <label htmlFor='profile' className="avatar-wrapper">
                    <img className="profile-pic" src={props.profile} alt='' />
                </label>
                <Field
                    id= {props.name}
                    name={props.name}
                    type={props.type}
                    autoComplete={props.autoCompleted}
                    disabled= {props.disabled}
                    placeholder = {props.placeholder}
                    accept="image/*"
                    hidden
                />
            </>
        break;
        case 'select':
            formItem = <div className='form-item'>
                <label htmlFor={props.name} className='text-capitalize'>{props.name} :</label>
                <Field name={props.name} className='text-capitalize' as='select'>
                    <option value="" hidden>{props.placeholder}</option>
                    {
                        props.selectList?.map((option:string) => {
                            return <option value={option} key={option}>{option}</option>
                        })
                    }
                </Field>
                <ErrorMessage name={props.name} component="span" className='error' />
            </div>
        break;
        case 'radio': 
            formItem = <div className='form-item'>
                <p className='text-capitalize mb-1'>{props.name} :</p>
                <div className='d-flex align-items-center flex-wrap'>
                {
                    props.selectList?.map((option:string) => {
                        return <Fragment key={option}>
                            <div className='d-flex align-items-center m-0 mb-2 w--50'>
                                <Field name={props.name} id={option} className='text-capitalize' type ='radio' value={option}></Field>
                                <label htmlFor={option} className='text-capitalize d-inline-block curser-pointer mr-4'>{option}</label>
                            </div>
                        </Fragment>
                    })
                }
                <ErrorMessage name={props.name} component="span" className='error' />
                </div>
            </div>
        break;
        case 'checkbox':
            formItem = <div className='form-item'>
                <p className='text-capitalize mb-1'>{props.name} :</p>
                <div className='d-flex align-items-center'>
                {
                    props.selectList?.map((option:string) => {
                        return <Fragment key={option}>
                            <Field name={props.name} id={option} className='text-capitalize' type ='checkbox' value={option}></Field>
                            <label htmlFor={option} className='text-capitalize d-inline-block curser-pointer mr-4'>{option}</label>
                        </Fragment>
                    })
                }
                </div>
                <ErrorMessage name={props.name} component="span" className='error' />
            </div>
        break;
        case 'datePicker': 
            formItem = <div className='form-item'>
                <CustomDatePicker />
            </div>
        break;
    }
        
    return (
    <>
        {formItem}
    </>        
    )
}

export default input;