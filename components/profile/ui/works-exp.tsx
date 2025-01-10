import { CirclePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChangeEvent, FormEvent, useState } from "react";
import { useSession } from "next-auth/react";
import { useAddProjects, useGetProjects } from "@/app/api/get-profile";
import { ProjectDetails } from "@/types/types";
import WorksProjects from "@/components/ui/works-projects";

export default function WorksExp() {
  const { data: session } = useSession();
  const user = session?.user?.user;
  const { data } = useGetProjects(user?.uuid);
  const projectsData = data?.results;

  console.log(projectsData);

  if (projectsData?.length === 0) {
    return (
      <div className='flex flex-col gap-10 my-20'>
        <p className='text-3xl text-center'>You have no project yet</p>
        <DialogItem className='flex-col items-center mx-auto p-20' />
      </div>
    );
  }

  return (
    <div className='flex flex-wrap gap-5 my-5'>
      <DialogItem className='w-[32%] h-32' />
      {projectsData?.map((project: ProjectDetails) => {
        return <WorksProjects key={project.id} project={project} />;
      })}
    </div>
  );
}

export function DialogItem({ className }: { className?: string }) {
  const { data: session } = useSession();
  const user = session?.user?.user;
  const { mutate } = useAddProjects();

  const [formData, setFormData] = useState({
    title: "",
    url: "",
    skills: "",
    tools: "",
    desc: "",
  });

  const { title, url, skills, tools, desc } = formData;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData);

    const projectDetails = {
      name: title,
      description: desc,
      url,
      skills,
      tools,
    };

    mutate({ id: user?.uuid, projectDetails });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className={`${className} flex items-center justify-center font-semibold bg-orange-500 text-orange-500 bg-opacity-10 gap-2 cursor-pointer`}>
          <CirclePlus />
          Add Project
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Project</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-2'>
              <Label htmlFor='title'>Project Title</Label>
              <Input
                id='title'
                name='title'
                value={title}
                onChange={handleChange}
                className='col-span-4'
                placeholder='e.g e-commerce web design of XYZ company'
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-3'>
              <div className='col-span-2'>
                <Label htmlFor='skills'>Skills</Label>
                <Input
                  id='skills'
                  name='skills'
                  value={skills}
                  onChange={handleChange}
                  className='col-span-4'
                  placeholder='e.g Visual design'
                />
              </div>
              <div className='col-span-2'>
                <Label htmlFor='tools'>Tools used</Label>
                <Input
                  id='tools'
                  name='tools'
                  value={tools}
                  onChange={handleChange}
                  className='col-span-4'
                  placeholder='e.g Figma'
                />
              </div>
            </div>
            <div className='mt-5 grid grid-cols-4 items-center gap-2'>
              <Label htmlFor='title'>URL</Label>
              <Input
                id='url'
                name='url'
                value={url}
                onChange={handleChange}
                className='col-span-4'
                placeholder='e.g Flutterwave'
              />
            </div>
            <div className='mt-5 grid grid-cols-4 items-center gap-2'>
              <Label htmlFor='desc'>Project Description</Label>
              <textarea
                id='desc'
                name='desc'
                value={desc}
                onChange={handleChange}
                className='col-span-4 flex h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                placeholder='A detailed descriptin about the project you worked on'
              />
            </div>
          </div>
          <DialogFooter>
            <Button type='submit' className='bg-orange-500 hover:bg-orange-400'>
              Add Project
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
