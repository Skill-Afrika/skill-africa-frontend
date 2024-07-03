import Image from "next/image";
import img1 from "./Knowledge Transfer.svg";
import img2 from './Learning.svg';
import img3 from "./Profiles.svg";
import img4 from "./Profiles (1).svg";
import img5 from "./VIP.svg";

const Service =()=>{
    return(
        <div className="px-16 flex flex-col justify-between">
            <div className="w-full flex md:flex-row flex-col md:justify-between justify-center">
                <div className="w-1/3 md:block hidden"></div>
                <div className="flex gap-6 md:w-2/3 w-full">
            <Image src={img1} className="md:block hidden"/>
           <div className="flex flex-col">
           <h1 className="md:text-3xl font-semibold text-sm">Bridging the gap, building dreams.</h1>
            <h2 className="text-xs my-4">Skill Africa helps you upskill, network, and land high-paying 
                freelance projects from anywhere in the world.</h2>
                <a className="md:text-base md:block hidden">Learn More &rarr;</a>
           </div>
            </div>
            </div>
            <div className="w-full pt-8 flex md:flex-row flex-col items-center">
                <div className="flex flex-col md:items-start items-center">
                    <h1 className="md:text-3xl font-semibold text-xs mb-4">We provides the range of services.</h1>
                    <button className="text-xs md:text-lg md:px-8 md:py-4 px-3 py-2 rounded-3xl text-white" style={{backgroundColor: "rgba(220, 95, 0, 1)"}}>Join Our Community</button>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 place-content-between md:ml-6 mr-0 font-normal">
                    <div className="max-w-md h-80 flex flex-col gap-6 rounded-3xl px-8 py-8 md:mr-6 mr-0 my-8" style={{backgroundColor: "rgba(252, 239, 230, 0.8)"}}>
                        <Image src={img2} alt="img"/>
                        <h1 className="md:text-2xl text-xs">Skill Training</h1>
                        <p className="md:text-sm text-xs">Lorem ipsum dolor sit amet consectetur. 
                        Penatibus id suscipit non ullamcorper diam. Iaculis porttitor nunc nisi cras.</p>
                    </div>
                    <div className="max-w-md h-80 flex flex-col gap-6 rounded-3xl px-8 py-8 md:mr-6 mr-0 my-8" style={{backgroundColor: "rgba(252, 239, 230, 0.8)"}}>
                        <Image src={img2} alt="img"/>
                        <h1 className="md:text-2xl text-xs">Skill Training</h1>
                        <p className="md:text-sm text-xs">Lorem ipsum dolor sit amet consectetur. 
                        Penatibus id suscipit non ullamcorper diam. Iaculis porttitor nunc nisi cras.</p>
                    </div>
                    <div className="max-w-md h-80 flex flex-col gap-6 rounded-3xl px-8 py-8 md:mr-6 mr-0 my-8" style={{backgroundColor: "rgba(252, 239, 230, 0.8)"}}>
                        <Image src={img2} alt="img"/>
                        <h1 className="md:text-2xl text-xs">Skill Training</h1>
                        <p className="md:text-sm text-xs">Lorem ipsum dolor sit amet consectetur. 
                        Penatibus id suscipit non ullamcorper diam. Iaculis porttitor nunc nisi cras.</p>
                    </div>
                    <div className="max-w-md h-80 flex flex-col gap-6 rounded-3xl px-8 py-8 md:mr-6 mr-0 my-8" style={{backgroundColor: "rgba(252, 239, 230, 0.8)"}}>
                        <Image src={img2} alt="img"/>
                        <h1 className="md:text-2xl text-xs">Skill Training</h1>
                        <p className="md:text-sm text-xs">Lorem ipsum dolor sit amet consectetur. 
                        Penatibus id suscipit non ullamcorper diam. Iaculis porttitor nunc nisi cras.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Service;