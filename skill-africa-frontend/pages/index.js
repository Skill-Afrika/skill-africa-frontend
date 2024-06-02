import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 0 20px;
  background: linear-gradient(270deg, #ff7e5f, #feb47b, #ff7e5f, #6a11cb, #2575fc);
  background-size: 400% 400%;
  animation: gradientAnimation 15s ease infinite;
  overflow: hidden;

  @keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin: 0;
  color: #fff;
`;

const Subtitle = styled(motion.h2)`
  font-size: 2rem;
  margin: 20px 0;
  color: #fff;
`;

const Countdown = styled(motion.div)`
  font-size: 1.5rem;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const CountdownItem = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 10px 20px;
  border-radius: 5px;
  color: #fff;
`;

const Loader = styled(motion.div)`
  width: 40px;
  height: 40px;
  border: 4px solid #ffffff;
  border-top: 4px solid #61dafb;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-top: 20px;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const MissionDescription = styled(motion.p)`
  font-size: 1.2rem;
  margin-top: 30px;
  max-width: 600px;
  color: #fff;
  text-align: center;
`;

const ProgressBar = styled(motion.div)`
  width: 80%;
  height: 10px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  overflow: hidden;
  margin-top: 20px;
`;

const Progress = styled(motion.div)`
  height: 100%;
  background: #61dafb;
  width: 0%;
`;

const Button = styled(motion.button)`
  background-color: #61dafb;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 30px;
  &:hover {
    background-color: #fff;
    color: #61dafb;
  }
`;

const calculateTimeLeft = () => {
  const difference = +new Date("2024-12-31") - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const Index = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <CountdownItem key={interval}>
        {timeLeft[interval]} {interval}
      </CountdownItem>
    );
  });

  const calculateProgress = () => {
    const totalTime = +new Date("2024-12-31") - +new Date("2024-01-01");
    const timePassed = +new Date() - +new Date("2024-01-01");
    return (timePassed / totalTime) * 100;
  };

  return (
    <Container>
      <Title
        initial={{ y: -250, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, delay: 0.5 }}
        whileHover={{ y: -10, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Skill Afrika
      </Title>
      <Subtitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 1.5 }}
      >
        Coming Soon
      </Subtitle>
      <Loader
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, duration: 1.0 }}
      />
      {isClient && (
        <Countdown
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 1.5 }}
        >
          {timerComponents.length ? timerComponents : <span>Its Here!</span>}
        </Countdown>
      )}
      <MissionDescription
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1.5 }}
      >
        Skill Afrika serves as a catalyst for youth development and national growth by providing 
        valuable skills and opportunities to young Africans, empowering them to contribute 
        positively to their communities and the continents future.
      </MissionDescription>
      <ProgressBar>
        <Progress
        initial={{ width: 0 }}
        animate={{ width: `${calculateProgress()}%` }}
        transition={{ duration: 2 }}
      />
    </ProgressBar>
    <Button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3.0, duration: 1.5 }}
      onClick={() => alert('Thank you for your interest!')}
    >
      Get Notified
    </Button>
  </Container>
);
};

export default Index;

        
         