import React from "react";
import { Link } from "react-router-dom";
import { Container, SignUpContainer, SignInContainer, Form, Title, Input, Button, GhostButton, Anchor, OverlayContainer, Overlay, LeftOverlayPanel, RightOverlayPanel, Paragraph } from './Components';
import './menu.css';

const Login = () => {
    const [signIn, toggle] = React.useState(true);

    return (
        <Container>
            <SignUpContainer signinIn={signIn}>
                <Form>
                    <Title>Create Account</Title>
                    <Input type='text' placeholder='Name' />
                    <Input type='email' placeholder='Email' />
                    <Input type='password' placeholder='Password' />
                    <Button>Sign Up</Button>
                </Form>
            </SignUpContainer>

            <SignInContainer signinIn={signIn}>
                <Form>
                    <Title>Sign in</Title>
                    <Input type='email' placeholder='Email' />
                    <Input type='password' placeholder='Password' />
                    <Anchor href='#'>Forgot your password?</Anchor>
                    {/* Wrap the Sign In button with a Link component */}
                    <Link to="/menu">
                        <Button>Sign In</Button>
                    </Link>
                </Form>
            </SignInContainer>

            <OverlayContainer signinIn={signIn}>
                <Overlay signinIn={signIn}>
                    <LeftOverlayPanel signinIn={signIn}>
                        <Title>Welcome Back!</Title>
                        <Paragraph>
                            PLEASE LOGIN TO VIEW OUR MENU
                        </Paragraph>
                        <GhostButton onClick={() => toggle(true)}>
                            Sign In
                        </GhostButton>
                    </LeftOverlayPanel>
                    <RightOverlayPanel signinIn={signIn}>
                        <Title>Hello,Customer!</Title>
                        <Paragraph>
                            NEW USER? PLEASE SIGNUP TO VIEW OUR MENU
                        </Paragraph>
                        <GhostButton onClick={() => toggle(false)}>
                            Sign Up
                        </GhostButton>
                    </RightOverlayPanel>
                </Overlay>
            </OverlayContainer>
        </Container>
    );
}

export default Login;
