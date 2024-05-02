import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container, SignUpContainer, SignInContainer, Form, Title, Input, Button, Anchor, OverlayContainer, Overlay, LeftOverlayPanel, RightOverlayPanel, Paragraph } from './Components';
import './menu.css';

const Login = () => {
    const [signIn, setSignIn] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:4000/api/v1/login", { email, password });
            console.log(response.data);
            // Handle successful login
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:4000/api/v1/signup", { name, email, password });
            console.log(response.data);
            // Handle successful signup
        } catch (error) {
            setError(error.response.data.message);
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
                    <Anchor href='#'>Forgot your password?</Anchor>
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
            {error && <p>{error}</p>}
        </Container>
    );
}

export default Login;
