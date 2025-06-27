import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="auth-landing">
      <div className="auth-buttons">
        <button className="auth-btn" onClick={() => window.location.href = '/login'}>
          Start
        </button>
      </div>
    </div>
  );
};

export default Login;







