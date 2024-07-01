import img1 from "./image 6.svg";
import Image from "next/image";



const Join =()=>{
    return(
        <div className="px-16 py-16">
            <h1 className="text-center md:text-4xl text-base font-semibold md:font-medium mb-4">Unlocking potential, building dreams: transforming lives of freelancers.</h1>
            <h2 className="text-xs md:text-2xl font-normal text-center">Join our vibrant community of African freelancers, learn new skills, 
                and land high-paying projects. Together, we're building a brighter future for freelance work in Africa.</h2>
                <div className="flex justify-between w-full md:flex-row flex-col md:pt-12 pt-6">
                    <ol className="md:w-2/4 w-full flex flex-col gap-4 mb-8">
                            <li className="md:text-xl text-xs font-normal">
                            Join our vibrant community of African freelancers, learn new skills, 
                            and land high-paying projects. Together, we're building a brighter future for freelance work in Africa.
                            </li>
                            <li className="md:text-xl text-xs font-normal">
                            Join our vibrant community of African freelancers, learn new skills, 
                            and land high-paying projects. Together, we're building a brighter future for freelance work in Africa.
                            </li>
                            <li className="md:text-xl text-xs font-normal">
                            Join our vibrant community of African freelancers, learn new skills, 
                            and land high-paying projects. Together, we're building a brighter future for freelance work in Africa.
                            </li>
                    </ol>
                    <div className="md:w-2/5 w-full">
                    <Image src={img1} alt="img1" className="w-full"/>
                    </div>
                </div>
        </div>
    )
}
export default Join;