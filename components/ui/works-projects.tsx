import { ProjectDetails } from "@/types/types";
import Image from "next/image";
import { OutlinedButton } from "./outlined-button";
import Link from "next/link";
import ButtonClick from "../form/button";

export default function WorksProjects({
  project,
}: {
  project: ProjectDetails;
}) {
  const tools = project?.tools.split(",").map((tool) => tool.trim());

  return (
    <div className='w-[32%]'>
      {/* <Image src='/images/project.svg' width='1000' height='1000' alt='project cover'   /> */}
      <div className='w-full py-20 border text-center'>+ Add cover image</div>
      <div className='text-lg font-medium my-2'>
        {project.name} - {project.description}
      </div>
      <div className='flex flex-wrap gap-2 text-sm'>
        {tools.map((tool, index) => (
          <OutlinedButton key={index}>{tool}</OutlinedButton>
        ))}
      </div>
      <Link href={project.url} target='_blank'>
        <ButtonClick className='bg-orange-500 hover:bg-orange-400 rounded-full mt-3 px-5 text-base'>
          Visit site
        </ButtonClick>
      </Link>
    </div>
  );
}
