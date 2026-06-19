import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

/**
 * UserForm Component: Collects user credentials while conducting 
 * real-time input-length and space-character constraints verification before submission.
 */
function UserForm() {
    // State values handling inputs
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    // State values handling error string feedback messages
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    /**
     * Submission Validation Engine
     */
    const handleSubmit = event => {
        event.preventDefault(); // Inhibits natural page refreshes to protect current state integrity
        
        // --- Email Field Interrogation ---
        var emailValid = false;
        if (email.length === 0) {
            setEmailError("Email is required"); 
        }
        else if (email.length < 6) {
            setEmailError("Email should be minimum 6 characters");
        }
        // Checks if whitespace characters exist inside the payload string
        else if (email.indexOf(' ') >= 0) {
            setEmailError('Email cannot contain spaces');
        }
        else {
            setEmailError(""); // Wipe slate clear when valid criteria is passed
            emailValid = true;
        }

        // --- Password Field Interrogation ---
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
            setPasswordError("");
            passwordValid = true;
        }

        // --- Resolution Gate ---
        // Runs only if both logic gates register true flags
        if (emailValid && passwordValid) {
            alert('Email: ' + email + '\nPassword: ' + password);
            // Form clear operations tracking back to local state adjustments
            setEmail("");
            setPassword("");
        }
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                {/* Email inputs tracking block */}
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        onChange={event => setEmail(event.target.value)} 
                        value={email} 
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                
                {/* Error Banner render conditional check */}
                {emailError.length > 0 &&
                    <Alert variant="danger">{emailError}</Alert>}

                {/* Password inputs tracking block */}
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        onChange={event => setPassword(event.target.value)} 
                        value={password} 
                    />
                </Form.Group>
                
                {passwordError.length > 0 &&
                    <Alert variant="danger">{passwordError}</Alert>}

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            
            <br />
            {/* Live mirror diagnostic log feedback on layout UI */}
            Email entered: {email}
            <br />
            Password entered: {password}
        </div>
    );
}

export default UserForm;