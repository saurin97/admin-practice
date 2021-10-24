import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// const validate = values => {
// 	const errors = {};

// 	if (!values.firstName) {
// 		errors.firstName = 'please enter firstName'
// 	} else if (values.firstName.length > 15) {
// 		errors.firstName = 'firstName must be 15 characters of less'
// 	}

// 	if (!values.lastName) {
// 		errors.lastName = 'please enter lastName'
// 	} else if (values.lastName.length > 10) {
// 		errors.lastName = 'lastName must be 10 characters or less'
// 	}

// 	if (!values.email) {
// 		errors.email = 'please enter Email'
// 	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
// 		errors.email = 'Invalid Email address'
// 	}

// 	return errors;
// }


const signup = () => {
	return (
		<Formik
			initialValues={{firstName:'' , lastName:'', email:'',colors: ''}}
			validationSchema = {
				Yup.object({
					firstName: Yup.string()
						.max(15, 'Must be 15 characters or less')
						.required('Please enter Firstname'),
					lastName: Yup.string()
						.max(10, 'Must be 10 characters or less')
						.required('Please enter Lastname'),
					email: Yup.string()
						.email('Invalid email address')
						.required('Please enter Email'),
					colors: Yup.string()
						.required('please select one color')
				})
			}
			onSubmit={(values) => {
				alert(JSON.stringify(values, null, 2));
				console.log(values);
				
			}}
		>

			{formik => (
				<Form onSubmit={formik.handleSubmit}>
					<div className='form-item'>
						<label htmlFor='firstName'>First Name:</label>
						<Field name="firstName" type="text" autoComplete='off' />
        				<ErrorMessage name="firstName" component="span" className='error' />
					</div>	
					<div className='form-item'>
						<label htmlFor='lastName'>Last Name:</label>
						<Field name="lastName" type="text" autoComplete='off' />
        				<ErrorMessage name="lastName" component="span" className='error' />
					</div>
					<div className='form-item'>
						<label htmlFor='email'>E mail:</label>
						<Field name="email" type="email" autoComplete='off' />
        				<ErrorMessage name="email" component="span" className='error' />
					</div>
					<div className='form-item'>
						<label htmlFor='email'>Color:</label>
						<Field name="colors" as='select'>
							<option value="" hidden>select colors</option>
							<option value="red">Red</option>
							<option value="yellow">Yellow</option>
							<option value="blue">Blue</option>
						</Field>
        				<ErrorMessage name="colors" component="span" className='error' />
					</div>
					<div className='text-center'>
						<button type='submit'>Submit</button>
					</div>
				</Form>
			)}

		</Formik>
	)
}

export default signup;