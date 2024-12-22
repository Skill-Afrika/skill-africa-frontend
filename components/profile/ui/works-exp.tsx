import { CirclePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function WorksExp({ data }: { data: any }) {
  return (
    <div className='flex flex-col gap-10 my-20'>
      <p className='text-3xl text-center'>You have no project yet</p>
      <DialogDemo />
    </div>
  );
}

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className='p-20 flex flex-col items-center font-semibold bg-orange-500 text-orange-500 bg-opacity-10 mx-auto gap-2 cursor-pointer'>
          <CirclePlus />
          Add Project
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Project</DialogTitle>
        </DialogHeader>

        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-2'>
            <Label htmlFor='title'>Project Title</Label>
            <Input
              id='title'
              value=''
              className='col-span-4'
              placeholder='e.g e-commerce web design of XYZ company'
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-3'>
            <div className='col-span-2'>
              <Label htmlFor='skills'>Skills</Label>
              <Input
                id='skills'
                value=''
                className='col-span-4'
                placeholder='e.g Visual design'
              />
            </div>
            <div className='col-span-2'>
              <Label htmlFor='tools'>Tools used</Label>
              <Input
                id='tools'
                value=''
                className='col-span-4'
                placeholder='e.g Figma'
              />
            </div>
          </div>
          <div className='mt-5 grid grid-cols-4 items-center gap-2'>
            <Label htmlFor='title'>Client (Optional)</Label>
            <Input
              id='title'
              value=''
              className='col-span-4'
              placeholder='e.g Flutterwave'
            />
          </div>
          <div className='mt-5 grid grid-cols-4 items-center gap-2'>
            <Label htmlFor='desc'>Project Description</Label>
            <textarea
              id='desc'
              value=''
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
      </DialogContent>
    </Dialog>
  );
}
