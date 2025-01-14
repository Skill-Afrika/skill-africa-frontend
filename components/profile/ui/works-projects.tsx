import { CirclePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useAddProjects, useGetProjects } from "@/app/api/get-profile";
import { ProjectDetails } from "@/types/types";
import WorksProjects from "@/components/ui/works-projects";
import Loader from "@/components/ui/loader";
import { ThreeDots } from "react-loader-spinner";
import { enqueueSnackbar } from "notistack";

export default function WorksPro() {
  const { data: session } = useSession();
  const user = session?.user?.user;
  const { data, isLoading } = useGetProjects(user?.uuid);
  const projectsData = data?.results;

  if (isLoading) {
    return <Loader className='h-40' />;
  }

  if (!projectsData?.length) {
    return (
      <div className='flex flex-col gap-10 my-20'>
        <p className='text-3xl text-center'>You have no project yet</p>
        <DialogItem className='flex-col items-center mx-auto p-20' />
      </div>
    );
  }

  return (
    <div className='flex flex-wrap gap-[2%] gap-y-5 my-5'>
      <DialogItem className='md:w-[32%] w-[49%] h-32' />
      {projectsData.map((project: ProjectDetails) => (
        <WorksProjects key={project.id} project={project} />
      ))}
    </div>
  );
}

// Dialog Item UI used above
export function DialogItem({ className }: { className?: string }) {
  const { data: session } = useSession();
  const user = session?.user?.user;
  const { mutate, isPending, isSuccess } = useAddProjects();

  const [error, setError] = useState(false);
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

    if (!title || !url || !skills || !tools || !desc) {
      setError(true);
      return;
    }

    const projectDetails = {
      name: title,
      description: desc,
      url,
      skills,
      tools,
    };

    mutate({ id: user?.uuid, projectDetails });

    if (isSuccess) {
      enqueueSnackbar("Profile Added", { variant: "success" });
      setFormData({ title: "", url: "", skills: "", tools: "", desc: "" });
      setError(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className={`${className} flex flex-col md:flex-row items-center justify-center font-semibold bg-orange-500 text-orange-500 bg-opacity-10 gap-2 cursor-pointer`}>
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
                placeholder='e.g. E-commerce web design of XYZ company'
              />
              {error && !title && (
                <div className='text-xs text-red-500 col-span-4'>
                  Please enter the project title
                </div>
              )}
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
                  placeholder='e.g. Visual design'
                />
                {error && !skills && (
                  <div className='text-xs text-red-500 col-span-4'>
                    Please enter skills used
                  </div>
                )}
              </div>
              <div className='col-span-2'>
                <Label htmlFor='tools'>Tools used</Label>
                <Input
                  id='tools'
                  name='tools'
                  value={tools}
                  onChange={handleChange}
                  className='col-span-4'
                  placeholder='e.g. Figma'
                />
                {error && !tools && (
                  <div className='text-xs text-red-500 col-span-4'>
                    Please enter the tools used
                  </div>
                )}
              </div>
            </div>
            <div className='mt-5 grid grid-cols-4 items-center gap-2'>
              <Label htmlFor='url'>URL</Label>
              <Input
                id='url'
                name='url'
                value={url}
                onChange={handleChange}
                className='col-span-4'
                placeholder='e.g. https://flutterwave.com'
              />
              {error && !url && (
                <div className='text-xs text-red-500 col-span-4'>
                  Please enter the project URL
                </div>
              )}
            </div>
            <div className='mt-5 grid grid-cols-4 items-center gap-2'>
              <Label htmlFor='desc' className='col-span-4'>
                Project Description
              </Label>
              <textarea
                id='desc'
                name='desc'
                value={desc}
                onChange={handleChange}
                className='col-span-4 flex h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                placeholder='A detailed description about the project you worked on'
              />
              {error && !desc && (
                <div className='text-xs text-red-500 col-span-4'>
                  Please enter the project description
                </div>
              )}
            </div>
          </div>
          <DialogFooter>
            <DialogClose className='border border-orange-500 bg-white text-orange-500 hover:bg-orange-100 px-3 py-2 text-sm font-medium rounded-md mt-3 md:mt-0'>
              Close
            </DialogClose>
            <Button
              type='submit'
              disabled={isPending}
              className='bg-orange-500 hover:bg-orange-400'>
              {isPending ? (
                <ThreeDots
                  visible={true}
                  height='20'
                  width='20'
                  color='#ffffff'
                  radius='9'
                  ariaLabel='three-dots-loading'
                />
              ) : (
                "Add Project"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
