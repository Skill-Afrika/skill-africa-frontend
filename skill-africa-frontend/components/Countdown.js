// components/Countdown.js
import { useState, useEffect } from 'react';

const useCountdown = (launchDate) => {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);

      if (distance < 0) {
        clearInterval(intervalId);
        setCountdown('Launch time!');
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [launchDate]);

  return countdown;
};

export default useCountdown;
