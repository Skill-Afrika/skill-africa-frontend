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
import { useAddExperience, useGetExperiences } from "@/app/api/get-profile";
import { experienceDetails } from "@/types/types";
import Loader from "@/components/ui/loader";
import { ThreeDots } from "react-loader-spinner";
import { enqueueSnackbar } from "notistack";
import { Checkbox, FormControlLabel } from "@mui/material";
import WorksExperience from "@/components/ui/works-experience";

export default function Experience() {
  const { data: session } = useSession();
  const user = session?.user?.user;
  const { data, isLoading } = useGetExperiences(user?.uuid);
  const workExperiences = data?.results;

  console.log(workExperiences);

  if (isLoading) {
    return <Loader className='h-40' />;
  }

  if (!workExperiences?.length) {
    return (
      <div className='flex flex-col gap-10 my-20'>
        <p className='text-3xl text-center'>
          You have not added any experience yet
        </p>
        <DialogItem className='flex-col items-center mx-auto p-20' />
      </div>
    );
  }

  return (
    <div className='my-5'>
      <DialogItem size={16} className='w-fit px-3 py-1 mb-4 rounded-full bg-white border border-orange-500 font-light text-sm' />
      {workExperiences.map((project: experienceDetails) => (
        <WorksExperience key={project.id} project={project} />
      ))}
    </div>
  );
}

// Dialog Item UI used above
export function DialogItem({ className, size }: { className?: string, size?: number }) {
  const { data: session } = useSession();
  const user = session?.user?.user;
  const { mutate, isPending, isSuccess } = useAddExperience();

  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    url: "",
    location: "",
    startDate: "",
    endDate: "",
    desc: "",
    currentRole: false,
  });

  const {
    title,
    company,
    url,
    location,
    startDate,
    endDate,
    desc,
    currentRole,
  } = formData;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !company || !url || !location || !startDate || !desc) {
      setError(true);
      return;
    }

    const experienceDetails = {
      job_title: title,
      description: desc,
      company,
      company_url: url,
      location,
      start_date: startDate,
      end_date: endDate,
      current_role: currentRole,
    };

    console.log(experienceDetails);

    mutate({ id: user?.uuid, experienceDetails });

    if (isSuccess) {
      enqueueSnackbar("Experience Added", { variant: "success" });
      setFormData({
        ...formData,
        title: "",
        url: "",
        company: "",
        location: "",
        desc: "",
      });

      setError(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className={`${className} flex flex-col md:flex-row items-center justify-center font-semibold bg-orange-500 text-orange-500 bg-opacity-10 gap-2 cursor-pointer`}>
          <CirclePlus size={size} />
          Add Experience
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Experience</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className='grid gap-4 py-2'>
            <div className='grid grid-cols-4 items-center gap-2'>
              <Label htmlFor='title'>Title</Label>
              <Input
                id='title'
                name='title'
                value={title}
                onChange={handleChange}
                className='col-span-4'
                placeholder='What role did you perform e.g UX research'
              />
              {error && !title && (
                <div className='text-xs text-red-500 col-span-4'>
                  Please enter the job role
                </div>
              )}
            </div>
            <div className='grid grid-cols-4 items-center gap-3'>
              <div className='col-span-2'>
                <Label htmlFor='location'>Company</Label>
                <Input
                  id='company'
                  name='company'
                  value={company}
                  onChange={handleChange}
                  className='col-span-4'
                  placeholder='e.g. Cowrywise'
                />
                {error && !company && (
                  <div className='text-xs text-red-500 col-span-4'>
                    Please enter the company&apos;s name
                  </div>
                )}
              </div>
              <div className='col-span-2'>
                <Label htmlFor='startDate'>Location</Label>
                <Input
                  id='location'
                  name='location'
                  value={location}
                  onChange={handleChange}
                  className='col-span-4'
                  placeholder='e.g. Lagos, Nigeria'
                />
                {error && !location && (
                  <div className='text-xs text-red-500 col-span-4'>
                    Please enter the company&apos;s location
                  </div>
                )}
              </div>
            </div>
            <div className='grid grid-cols-4 items-center gap-3'>
              <div className='col-span-2'>
                <Label htmlFor='location'>Start Date</Label>
                <Input
                  id='startDate'
                  name='startDate'
                  type='date'
                  value={startDate}
                  onChange={handleChange}
                  className='col-span-4'
                  placeholder='Select date'
                />
                {error && !startDate && (
                  <div className='text-xs text-red-500 col-span-4'>
                    Please enter the date you started
                  </div>
                )}
              </div>
              <div className='col-span-2'>
                <Label
                  htmlFor='startDate'
                  className={`${currentRole && "text-slate-300"}`}>
                  End date
                </Label>
                <Input
                  id='endDate'
                  name='endDate'
                  disabled={currentRole}
                  type='date'
                  value={currentRole ? "" : endDate}
                  onChange={handleChange}
                  className='col-span-4'
                  placeholder='Select Date'
                />
              </div>
            </div>
            <div>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={currentRole}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        currentRole: e.target.checked,
                      })
                    }
                    color='success'
                  />
                }
                label='I currently work here'
                labelPlacement='end'
              />
            </div>

            <div className='grid grid-cols-4 items-center gap-2'>
              <Label htmlFor='url'> Company&apos;s Website</Label>
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
                  Please enter the company&apos;s URL
                </div>
              )}
            </div>
            <div className='grid grid-cols-4 items-center gap-2'>
              <Label htmlFor='desc' className='col-span-4'>
                Job Description
              </Label>
              <textarea
                id='desc'
                name='desc'
                value={desc}
                onChange={handleChange}
                className='col-span-4 flex h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                placeholder='A detailed description about your job role'
              />
              {error && !desc && (
                <div className='text-xs text-red-500 col-span-4'>
                  Please enter your job role description.
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
                "Add Experience"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
