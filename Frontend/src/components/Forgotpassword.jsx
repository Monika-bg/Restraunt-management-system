// ForgotPassword.js

import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Title, Input, Button } from './Components'; // Import necessary components

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

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
            const response = await axios.post('http://localhost:4000/api/v1/reset-password', { email, newPassword });
            // Handle success
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
        </Container>
    );
}

export default ForgotPassword;
