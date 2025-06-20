import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className="auth-landing">
      <div className="auth-buttons">
        <button className="auth-btn" onClick={() => window.location.href = '/login'}>
          Log In
        </button>
        <button className="auth-btn" onClick={() => window.location.href = '/signup'}>
          Sign Up
        </button>
        <button className="google-btn">
          {/* <img src={googleIcon} alt="Google" /> */}
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;


/*function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('student');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulate successful login
    if (username && password) {
      setMessage('Login successful!');
      setTimeout(() => navigate('/courselogin'), 1000);
    } else {
      setMessage('Login failed. Please enter valid credentials.');
    }
  };*/




