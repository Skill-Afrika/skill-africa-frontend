import Connect from "../../components/landingpage/connect";
import Footer from "../../components/landingpage/footer";
import Freelancer from "../../components/landingpage/freelance/freelance";
import Header from "../../components/landingpage/header";
import Hero from "../../components/landingpage/hero/hero";
import Service from "../../components/landingpage/service/service";
import Subscribe from "../../components/landingpage/subscribe";

const Landing = () => {
  return (
    <>
      <Header />
      <Hero />
      <Service />
      <Freelancer />
      <Connect />
      <Subscribe />
      <Footer />
    </>
  );
};
export default Landing;
