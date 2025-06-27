import React, { useEffect, useState } from 'react';
import { FaFire } from 'react-icons/fa';

function Streak() {
  const [streak, setStreak] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const lastLogin = localStorage.getItem('lastLogin');
    const today = new Date().toDateString();

    if (lastLogin === today) {
      setMessage("You're on fire!");
    } else {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      if (lastLogin === yesterday.toDateString()) {
        const currentStreak = parseInt(localStorage.getItem('streak') || '0') + 1;
        localStorage.setItem('streak', currentStreak);
        setStreak(currentStreak);
        setMessage(` Current streak: ${currentStreak} days`);
      } else {
        localStorage.setItem('streak', 1);
        setStreak(1);
        setMessage('Streak reset. Start again!');
      }
      localStorage.setItem('lastLogin', today);
    }
  }, []);

  return (
    <div style={{ padding: '10px', textAlign: 'center' }}>
      <FaFire color="orange" size={40} />
      <p>{message}</p>
    </div>
  );
}

export default Streak; 