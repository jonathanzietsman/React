import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

function UserForm() {
    // Declarations of state pairs capturing field input metrics dynamically
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    // Independent validation state containers capturing runtime error copy
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    // Submit intercepts default browser page-reload loops to evaluate credentials locally
    const handleSubmit = event => {
        event.preventDefault(); // HALT standard HTTP post request cycling
        
        // --- EMAIL VALIDATION ENGINE ---
        var emailValid = false;
        if (email.length === 0) {
            setEmailError("Email is required"); 
        }
        else if (email.length < 6) {
            setEmailError("Email should be minimum 6 characters");
        }
        else if (email.indexOf(' ') >= 0) {
            setEmailError('Email cannot contain spaces');
        }
        else {
            setEmailError(""); // Clear errors if user hits pass benchmarks
            emailValid = true;
        }

        // --- PASSWORD VALIDATION ENGINE ---
        var passwordValid = false;
        if (password.length === 0) {
            setPasswordError("Password is required");
        }
        else if (password.length < 6) {
            setPasswordError("Password should be minimum 6 characters");
        }
        else if (password.indexOf(' ') >= 0) {
            setPasswordError('Password cannot contain spaces');
        }
        else {
            setPasswordError(""); // Clear errors if user hits pass benchmarks
            passwordValid = true;
        }

        // --- SUCCESS TRIGGER SUBMISSION HANDLING ---
        if (emailValid && passwordValid) {
            alert('Email: ' + email + '\nPassword: ' + password);
            
            // Flush controlled fields state to restore empty form parameters natively
            setEmail("");
            setPassword("");
        }
    }

    return (
        <div>
            {/* Standard React-Bootstrap form container linking logic handlers directly */}
            <Form onSubmit={handleSubmit}>
                
                {/* Email Form Grouping segment */}
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        onChange={event => setEmail(event.target.value)} // Binds input keystrokes straight to state
                        value={email} // Controlled input component design pattern ensures consistency
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                
                {/* Short-circuit conditional rendering logic displaying error UI banners only on true conditions */}
                {emailError.length > 0 &&
                    <Alert variant="danger">{emailError}</Alert>}

                {/* Password Form Grouping segment */}
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        onChange={event => setPassword(event.target.value)} // Tracks dynamic keystroke values changes
                        value={password}
                    />
                </Form.Group>
                
                {/* Short-circuit conditional validation alert displaying password runtime errors */}
                {passwordError.length > 0 &&
                    <Alert variant="danger">{passwordError}</Alert>}

                {/* Submit action button */}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            
            <br />
            {/* Debugging helpers output loops mirroring changes instantly for visibility */}
            Email entered: {email}
            <br />
            Password entered: {password}
        </div>
    );
}

export default UserForm;