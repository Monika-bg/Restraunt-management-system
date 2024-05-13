import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Title, Input, Button } from './Components'; // Import necessary components

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [showSuccessPopup, setShowSuccessPopup] = useState(false); // State to control the display of the success popup

    const handleResetPassword = async (e) => {
        e.preventDefault();
        // Validate input fields
        if (!email || !newPassword || !confirmNewPassword) {
            // Handle validation error
            return;
        }
        if (newPassword !== confirmNewPassword) {
            // Handle password mismatch error
            return;
        }
        try {
            // Send request to server to reset password
            const response = await axios.post('http://localhost:4000/api/v1/reset-password/send', { email, newPassword });
            // Handle success
            setShowSuccessPopup(true); // Display success popup
        } catch (error) {
            // Handle error
        }
    };

    return (
        <Container>
            <Form>
                <Title>Forgot Password</Title>
                <Input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input type='password' placeholder='New Password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                <Input type='password' placeholder='Confirm New Password' value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} />
                <br></br>
                <br></br>
                <Button onClick={handleResetPassword}>Reset Password</Button>
            </Form>
            {/* Success popup */}
            {showSuccessPopup && (
                <div className="success-popup">
                    <p>Password reset successful!</p>
                    {/* Add a button or link to close the popup if needed */}
                </div>
            )}
        </Container>
    );
}

export default ForgotPassword;
