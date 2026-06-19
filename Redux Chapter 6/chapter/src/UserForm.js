import React, { Component } from 'react';
// Formik components help manage form state, validation, and submission without boilerplate
import { Formik, Form, Field, ErrorMessage } from 'formik';

class UserForm extends Component {
    constructor(props){
        super(props);
    }
   
    render(){
        return (
            <div>
                <h1>Any place in your App!</h1>
                
                {/* Formik wrapper component initialization:
                  - initialValues: Sets the baseline state for the form fields.
                  - validate: Client-side validation function triggered on change/blur/submit.
                  - onSubmit: Callback function triggered when the form is valid and submitted.
                */}
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={values => {
                        let errors = {};
                        
                        // --- Email Validation ---
                        if (!values.email) {
                            errors.email = 'Required';
                        } 
                        // Regex check for standard email format (e.g., user@example.com)
                        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                            // Note: Fixed a minor typo in your original regex: [AZ] -> [A-Z]
                            errors.email = 'Invalid email address';
                        }
                        else if (values.email.length < 10) {
                            errors.email = 'Email address too short';
                        }
                        
                        // --- Password Validation ---
                        if (!values.password) {
                            errors.password = 'Required';
                        }
                        else if (values.password.length < 8) {
                            errors.password = 'Password too short';
                        }
                        
                        // If the errors object is empty, Formik considers the form valid
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        // Simulating an API call with a timeout before alerting the form data
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            // Set submitting to false so the submit button re-enables
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {/* Formik utilizes the Render Prop pattern. 
                      'isSubmitting' is extracted from Formik's internal state to manage button disabling.
                    */}
                    {({ isSubmitting }) => (
                        <Form>
                            {/* 'Field' automatically hooks up onChange, onBlur, and value to Formik state */}
                            <Field type="email" name="email" />
                            
                            {/* Styled wrapper for the error message display */}
                            <span style={{ color: 'red', fontWeight: 'bold' }}>
                                {/* 'ErrorMessage' automatically checks for validation errors related to this field */}
                                <ErrorMessage name="email" component="div" />
                            </span>
                            
                            <Field type="password" name="password" />
                            <span style={{ color: 'red', fontWeight: 'bold' }}>
                                <ErrorMessage name="password" component="div" />
                            </span>
                            
                            {/* Button is disabled during submission to prevent double-posting */}
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>

            </div>
        )
    }
}

export default UserForm;