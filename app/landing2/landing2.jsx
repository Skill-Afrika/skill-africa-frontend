<<<<<<< HEAD
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
=======
import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import Join from "../../components/join/join";
import Service from "../../components/service/service";
import Freelance from "../../components/freelancer/freelance";
import Connect from "../../components/connect/connect";
import Subscribe from "../../components/subscribe/subscribe";
import Footer from "../../components/footer/footer";

const Landing = ()=>{
    return(
        <>
        <Header/>
        <Hero/>
        <Join/>
        <Service/>
        <Freelance/>
        <Connect/>
        <Subscribe/>
        <Footer/>
        </>
    )
}
export default Landing;
>>>>>>> 802f8cd552c7d3211169bd55046c68d2679b648c
