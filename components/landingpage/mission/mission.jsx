import Purposes from "./purposes";

const missionVision = [
  {
    type: "vision",
    textHead: "A Transformed Africa",
    textBody:
      "Skill Afrika envisions a future where African youth are at the forefront of technological and social advancements.",
  },
  {
    type: "vision",
    textHead: "Driving Development",
    textBody:
      "We aim to see a continent where young people lead the digital economy, driving sustainable development and fostering inclusive growth.",
  },
  {
    type: "vision",
    textHead: "A Brighter Future",
    textBody:
      "Through our programs, we aspire to cultivate a generation of tech-savvy and socially conscious leaders dedicated to building a better future.",
  },
  {
    type: "mission",
    textHead: "Raising Leaders",
    textBody:
      "Skill Afrika is dedicated to raising the next generation of tech leaders, empowering them to create positive social impact on the continent.",
  },
  {
    type: "mission",
    textHead: "Empowering Youth",
    textBody:
      "Our programs equip young people with cutting-edge tech skills and leadership training, preparing them for success in the global digital economy.",
  },
  {
    type: "mission",
    textHead: "Fostering Growth",
    textBody:
      "Skill Afrika strives to create a self-sustaining cycle of innovation and growth, benefitting individuals, communities, and nations.",
  },
];

const mission = missionVision.filter((mission) => mission.type === "mission");
const vision = missionVision.filter((vision) => vision.type === "vision");

function Mission() {
  return (
    <>
      <div className='md:flex justify-between my-10'>
        <div className='md:w-1/2 mb-5 md:mb-0'>
          <div className='w-fit mx-auto px-5 py-2 mb-5 rounded-md border border-orange-500'>
            Our Mission
          </div>
          <div className='bg-white backdrop-blur-lg md:mx-10 mx-5 border rounded-md'>
            {mission.map((item, index) => {
              return (
                <div className='px-5 my-5' key={index}>
                  <div className='font-semibold text-xl'>{item.textHead}</div>
                  <div>{item.textBody}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className='md:w-1/2'>
          <div className='w-fit mx-auto px-5 py-2 mb-5 rounded-md border border-orange-500'>
            Our Vision
          </div>
          <div className='bg-white backdrop-blur-lg md:mx-10 mx-5 border'>
            {vision.map((item, index) => {
              return (
                <div className='px-5 my-5' key={index}>
                  <div className='font-semibold text-xl'>{item.textHead}</div>
                  <div>{item.textBody}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className='w-fit mx-auto px-5 py-2 rounded-md border border-orange-500'>
        What We Do
      </div>

      <Purposes />
    </>
  );
}

export default Mission;
