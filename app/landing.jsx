import Header from "../components/landingpage/header/header";
import Hero from "../components/landingpage/hero/hero";
import Join from "../components/landingpage/join/join";
import Service from "../components/landingpage/service/service";
import Freelance from "../components/landingpage/freelance/freelance";
import Connect from "../components/landingpage/connect";
import Mission from "../components/landingpage/mission/mission";
import Subscribe from "../components/landingpage/subscribe";
import Footer from "../components/landingpage/footer";

const Landing = () => {
  return (
    <>
      <Header />
      <Hero />
      <Join />
      <Service />
      <Freelance />
      <Mission />
      <Connect />
      <Subscribe />
      <Footer />
    </>
  );
};
export default Landing;
