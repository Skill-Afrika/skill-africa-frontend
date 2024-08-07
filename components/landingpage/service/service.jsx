import Image from "next/image";
import img1 from "./Knowledge Transfer.svg";
import img2 from "./Learning.svg";
// import img3 from "./Profiles.svg";
// import img4 from "./Profiles (1).svg";
// import img5 from "./VIP.svg";

const Service = () => {
  return (
    <div className="px-10 flex flex-col justify-between">
      <div className="w-full flex md:flex-row flex-col md:justify-between justify-center">
        <div className="w-1/3 md:block hidden"></div>
        <div className="flex gap-6 md:w-2/3 w-full">
          <Image src={img1} className="md:block hidden" />
          <div className="flex flex-col">
            <h1 className="md:text-3xl font-semibold text-sm text-center md:text-left">
              Bridging the gap, building dreams.
            </h1>
            <h2 className="text-xs my-4">
              Skill Africa helps you upskill, network, and land high-paying
              freelance projects from anywhere in the world.
            </h2>
            <a className="md:text-base md:block hidden">Learn More &rarr;</a>
          </div>
        </div>
      </div>
      <div className="w-full pt-8 flex md:flex-row flex-col items-center">
        <div className="flex flex-col md:items-start items-center">
          <h1 className="md:text-3xl font-semibold text-xs mb-4 text-center md:text-left">
            We provides the range of services.
          </h1>
          <button
            className="text-xs md:text-lg md:px-8 md:py-6 py-3 px-4 rounded-3xl text-white"
            style={{ backgroundColor: "rgba(220, 95, 0, 1)" }}
          >
            Join Our Community
          </button>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 place-content-between md:ml-6 mr-0 font-normal">
          <div
            className="max-w-md max-h-96 flex flex-col justify-between rounded-3xl px-5 py-4 md:mr-6 mr-0 my-8"
            style={{ backgroundColor: "rgba(252, 239, 230, 0.8)" }}
          >
            <Image src={img2} alt="img" />
            <h1 className="md:text-xl lg:text-2xl text-xs">Skill Training</h1>
            <p className="md:text-sm text-xs">
              We train and mentor freelancers equipping you with the skills
              needed to succeed in a knowledge - driven economy. Learn and earn
              with practical real life projects that helps you build a
              compelling portfolio.
            </p>
          </div>
          <div
            className="max-w-md max-h-96 flex flex-col justify-between rounded-3xl px-5 py-4 md:mr-6 mr-0 my-8"
            style={{ backgroundColor: "rgba(252, 239, 230, 0.8)" }}
          >
            <Image src={img2} alt="img" />
            <h1 className="md:text-2xl text-xs">Mentorship</h1>
            <p className="md:text-sm text-xs">
              Our mentorship program connects you with experienced professionals
              ready to help you navigate your career journey. Our mentors are
              dedicated to helping you upskill and achieve your career goals
              with personalized guidance.
            </p>
          </div>
          <div
            className="max-w-md max-h-96 flex flex-col justify-between rounded-3xl px-5 py-4 md:mr-6 mr-0 my-8"
            style={{ backgroundColor: "rgba(252, 239, 230, 0.8)" }}
          >
            <Image src={img2} alt="img" />
            <h1 className="md:text-2xl text-xs">Career Placement</h1>
            <p className="md:text-sm text-xs">
              Learn how to land your first Fiverr gig, send effective cold
              emails and secure international opportunities. We provide job
              advertisements, recommendations and a list of the most frequently
              asked questions to ensure you are prepared for any opportunity.
            </p>
          </div>
          <div
            className="max-w-md max-h-96 flex flex-col justify-between rounded-3xl px-5 py-4 md:mr-6 mr-0 my-8"
            style={{ backgroundColor: "rgba(252, 239, 230, 0.8)" }}
          >
            <Image src={img2} alt="img" />
            <h1 className="md:text-2xl text-xs">Premium Resources</h1>
            <p className="md:text-sm text-xs">
              Enhance your learning with our premium resources, including free
              access to Udemy courses and daily links to top educational tools.
              Join our community and learn in-demand tech skills with
              affordable, installment payment options.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Service;
