import React from 'react';
import {Formik,Form} from 'formik'
import * as Yup from 'yup';

import FormInput from '../../shared/component/input/input';

interface Props {
    addNewAddress: (formValues:any) => void
}

const addAddress:React.FC<Props> = (props) => {
    return(
        <Formik
            initialValues={{
                name : '',
                phone : '',
                street : '',
                town : '',
                pincode: '',
                state : '',
                addressType : '',
                checkbox: ''
            }}
            validationSchema = {
                Yup.object({
                    name: Yup.string()
                        .required('Please enter name'),
                    town : Yup.string()
                        .required('Please enter town'),
                    phone: Yup.string()
                        .required('Please enter phone number')
                        .matches(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, {
                            message:'phone number length must be 10.',
                        }),
                    street: Yup.string()
                        .required('Please enter Address/ House no,street,Area')
                        .min(20,'Address/ House no,street,Area must be is 20 number'),
                    pincode: Yup.string()
                        .required('please enter Pincode')
                        .matches(/^[0-9\b]+$/ , {
                            message : 'must be number'
                        })
                        .min(6,'pincode is 6 number')
                        .max(6,'pincode is 6 number'),
                    state: Yup.string()
                        .required('Please enter state'),
                    addressType: Yup.string()
                        .required('Please select one type'),
                    checkbox: Yup.string()
                        .required('please select one')

                })
            }
            onSubmit={(values,{resetForm}) => {
                const formValues = {
                    name : values.name,
                    phone : values.phone,
                    address : {
                        street : values.street,
                        town : values.town,
                        pincode: values.pincode,
                        state : values.state,
                        addressType: values.addressType,
                    },
                    checkbox : values.checkbox
                }
                props.addNewAddress(formValues)
                resetForm();
                console.log(formValues);
            }}
        >
            {formik => (
                <Form onSubmit={formik.handleSubmit} className='address-form'>
                        {/* <h4 className='text-capitalize text-center mb-3'>Add Address</h4> */}
                        <FormInput name='name' type='text' autoCompleted='off' placeholder='Name' />
                        <FormInput name='phone' type='text' autoCompleted='off'  placeholder='Phone' />
                        <FormInput name='street' type='text' autoCompleted='off' placeholder='Address/ House no,street,Area' />
                        <FormInput name='town' type='text' autoCompleted='off' placeholder='Locality/Town' />
                        <FormInput name='pincode' type='text' autoCompleted='off' placeholder='PinCode' />
                        <FormInput name='state' type='select' autoCompleted='off' placeholder='select your state' selectList={['gujarat','panjab','hariyana','west bangal','madhya pradesh']} />
                        <FormInput name='addressType' type='radio' autoCompleted='off' selectList={['home','office']} placeholder='' />
                        <FormInput name='checkbox' type='checkbox' autoCompleted='off' selectList={['checkbox1','checkbox2']} placeholder='' />
                        <FormInput name='date' type='datePicker' />
                    <div className='mt-4 mb-3 text-center'>
                        <button type='submit'>Add Address</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
};

export default addAddress;