import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const Auth = ({ isLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (isLogin) {
        // Login
        response = await axios.post('http://localhost:4000/api/login', { email, password });
      } else {
        // Signup
        response = await axios.post('http://localhost:4000/api/signup', { name, email, password });
      }
      // Handle successful login/signup
      toast.success(response.data.message);
    } catch (error) {
      // Handle login/signup error
      toast.error(error.response.data.message);
    }
  };

  return (
    <div>
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleAuth}>
        {!isLogin && (
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        )}
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      {isLogin ? (
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      ) : (
        <p>Already have an account? <Link to="/login">Login</Link></p>
      )}
    </div>
  );
};

export default Auth;
