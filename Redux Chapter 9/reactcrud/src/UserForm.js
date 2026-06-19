import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

// Imports hooks from the latest routing toolkits
import { useParams } from 'react-router-dom';

class UserForm extends Component {
    title;
    id;

    constructor(props) {
        super(props);
        // Extracts the 'id' property mapped from parameters explicitly passed down by the HOC wrapper function below
        this.id = this.props.params.id;
        this.title = 'New User';
        this.state = {
            username: '',
            email: '',
        };
        // Changes UI context layout metadata dynamically if an item index parameter exists
        if (this.id) {
            this.title = 'Edit User';
        }
    }

    // Standard lifecycle trigger used to populate update fields if in editor layout state
    componentDidMount() {
        if (this.id) {
            // Evaluates single-time object mapping parameters targeting specific record paths
            firebase.database().ref('/' + this.id)
                .on('value', snapshot => {
                    this.setState({
                        username: snapshot.val().username,
                        email: snapshot.val().email,
                    });
                });
        }
    }

    render() {
        return (
            <div>
                <h1>{this.title}</h1>
                
                {/* Formik wrapper configuration initialization block:
                  - enableReinitialize: Forces form values updates if base state parameters change post-mount.
                  - initialValues: Syncs baseline entry points with current local component state definitions.
                */}
                <Formik
                    enableReinitialize={true}
                    initialValues={{
                        username: this.state.username,
                        email: this.state.email
                    }}
                    validate={values => {
                        let errors = {};
                        
                        // --- Email Form Verification Rules ---
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        else if (values.email.length < 10) {
                            errors.email = 'Email address too short';
                        }

                        // --- Username Form Verification Rules ---
                        if (!values.username) {
                            errors.username = 'Required';
                        }
                        else if (values.username.length < 3) {
                            errors.username = 'username too short';
                        }
                        return errors;
                    }}

                    onSubmit={(values, { setSubmitting }) => {
                        // Simulating execution latency safely using temporary timeout closures
                        setTimeout(() => {
                            if (this.id) {
                                // Editor Mode: Applies partial document properties map overrides directly on target locations
                                firebase.database().ref('/' + this.id).update({
                                    username: values.username,
                                    email: values.email
                                }).then(() => window.location.href = ("/"));
                            }
                            else {
                                // Creator Mode: Generates fresh entries appending unique hash keys automatically on collection nodes
                                firebase.database().ref('/').push({
                                    username: values.username,
                                    email: values.email
                                }).then(() => window.location.href = ("/"));
                            }

                            setSubmitting(false); // Changes form submittal submission lock flags state back to base default
                        }, 400);
                    }}
                >
                    {/* Formik Render Prop function signature exposing submission status tracking values */}
                    {({ isSubmitting }) => (
                        <Form>
                            {/* Field manages data state synchronization events internally */}
                            <Field type="email" name="email" />
                            <span style={{ color: "red", fontWeight: "bold" }}>
                                {/* ErrorMessage listens internally for schema key entries matching names precisely */}
                                <ErrorMessage name="email" component="div" />
                            </span>
                            
                            <Field type="text" name="username" />
                            <span style={{ color: "red", fontWeight: "bold" }}>
                                <ErrorMessage name="username" component="div" />
                            </span>
                            
                            {/* Submission button is disabled during submit cycles to prevent double-posts */}
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div >
        )
    }
}

/*
  Higher-Order Component (HOC) Wrapper Function
  -------------------------------------------------------------------------
  Why this is needed:
  React Router Hooks like `useParams()` cannot be used inside legacy Class Components directly. 
  This functional wrapper wraps `UserForm`, extracts the URL routing parameter state via hooks, 
  and passes them down to the class instance safely as a property attribute argument mapping (`params={useParams()}`).
*/
export default (props) => (
    < UserForm
        {...props}
        params={useParams()}
    />
);