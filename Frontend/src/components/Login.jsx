import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { Container, SignUpContainer, SignInContainer, Form, Title, Input, Button, Anchor, OverlayContainer, Overlay, LeftOverlayPanel, RightOverlayPanel, Paragraph } from './Components';
import './menu.css';
import { toast } from 'react-hot-toast'; // Import toast from react-hot-toast

const Login = () => {
    const [signIn, setSignIn] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            toast.error('Please enter all input fields.'); // Display error message as a toast
            return;
        }
        try {
            const response = await axios.post('http://localhost:4000/api/v1/login', { email, password });
            console.log(response.data);
            // Handle successful login
            // Redirect to the menu page after successful login
            navigate('/menu'); // Redirect to the menu page using useNavigate
            toast.success('Login successful!'); // Display success message as a toast
        } catch (error) {
            toast.error('Username and Password did not match.'); // Display error message as a toast
        }
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        if (!name || !email || !password) {
            toast.error('Please enter all input fields.'); // Display error message as a toast
            return;
        }
        try {
            const response = await axios.post('http://localhost:4000/api/v1/signup', { name, email, password });
            console.log(response.data);
            // Handle successful signup
            // Redirect or perform any necessary action upon successful signup
        } catch (error) {
            toast.error('Error signing up. Please try again.'); // Display error message as a toast
        }
    };

    return (
        <Container>
            <SignUpContainer signinIn={signIn}>
                <Form>
                    <Title>Create Account</Title>
                    <Input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                    <Input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Button onClick={handleSignup}>Sign Up</Button>
                </Form>
            </SignUpContainer>

            <SignInContainer signinIn={signIn}>
                <Form>
                    <Title>Sign in</Title>
                    <Input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Anchor href='/Forgot-password'>Forgot your password?</Anchor>
                    <Button onClick={handleLogin}>Sign In</Button>
                </Form>
            </SignInContainer>

            <OverlayContainer signinIn={signIn}>
                <Overlay signinIn={signIn}>
                    <LeftOverlayPanel signinIn={signIn}>
                        <Title>Welcome Back!</Title>
                        <Paragraph>
                            PLEASE LOGIN TO VIEW OUR MENU
                        </Paragraph>
                        <Button onClick={() => setSignIn(true)}>Sign In</Button>
                    </LeftOverlayPanel>
                    <RightOverlayPanel signinIn={signIn}>
                        <Title>Hello, Customer!</Title>
                        <Paragraph>
                            NEW USER? PLEASE SIGNUP TO VIEW OUR MENU
                        </Paragraph>
                        <Button onClick={() => setSignIn(false)}>Sign Up</Button>
                    </RightOverlayPanel>
                </Overlay>
            </OverlayContainer>
        </Container>
    );
}

export default Login;