import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { useRouter } from 'next/router'
import Link from 'next/link';
const Container = styled.div`
  position: relative;
  height: 100vh;
  overflow-x: hidden;
  background-color: #151515;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin: 0;
  color: #fff;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 2rem;
  margin: 20px 0;
  color: #fff;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const Countdown = styled(motion.div)`
  font-size: 1.5rem;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const CountdownItem = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 10px 20px;
  border-radius: 5px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 8px 16px;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
  }
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

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 10px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0 5px;
  }
`;

const ProgressBar = styled(motion.div)`
  width: 80%;
  height: 10px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  overflow: hidden;
  margin-top: 20px;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
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

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 0.8rem;
  }
`;

const SVGContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
`;



const calculateTimeLeft = () => {
  const difference = +new Date("2024-12-31") - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (6000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (6000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 6000 / 60) % 60),
      seconds: Math.floor((difference / 6000) % 60),
    };
  }

  return timeLeft;
};

const Index = () => {
  const router = useRouter();

  const goToLandingPage = () => {
    router.push('/landing');
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsClient(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  
    // Hide the loading screen after a short delay
    setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust the delay as needed
  
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
    <ParallaxProvider>
      <Container>
        <Parallax y={[-30, 30]} tagOuter="figure">
          <SVGContainer>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#61dafb"
                fillOpacity="1"
                d="M0,128L48,138.7C96,149,192,171,288,170.7C384,171,480,149,576,133.3C672,117,768,107,864,101.3C960,96,1056,96,1152,96C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </svg>
          </SVGContainer>
        </Parallax>
        <ContentContainer>
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
              {timerComponents.length ? timerComponents : <span>Time&apos;s up!</span>}
            </Countdown>
          )}
          <MissionDescription
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 1.5 }}
          >
            Skill Afrika serves as a catalyst for youth development and national growth by providing 
            valuable skills and opportunities to young Africans, empowering them to contribute 
            positively to their communities and the continent&apos;s future.
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
            onClick={goToLandingPage}
          >
            Stay Tuned
          </Button>

          <Link href="/landing" passHref legacyBehavior>
            <a className="bg-blue-600 text-white px-4 py-2 rounded">Go to Skill Afrika</a>
          </Link>
          
        </ContentContainer>
      </Container>
    </ParallaxProvider>
  );
};

export default Index;
