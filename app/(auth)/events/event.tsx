import { Calendar, Dot, MapPin, Tag } from "lucide-react";

export default function EventItem() {
  return (
    <div className='border p-2 w-[29%] rounded-md my-5'>
      <div className='h-40 w-full bg-slate-600 rounded-md' />
      <h3 className='font-medium text-2xl my-2'>
        The effect of job market change on Nigerian Freelancers
      </h3>
      <p className='mb-3'>
        Design assets and tokens that store values for the base layer of your
        design system, like color and typography. They&apos;re used in
        components...
      </p>
      <div className='flex items-center gap-1 text-slate-500 mb-2'>
        <Calendar className='' />
        <p className='font-medium'>2nd November 2024</p> <Dot />
        <Tag className='transform' />
        <p className='font-medium'>Free</p>
      </div>
      <div className='flex items-center gap-1 text-slate-500'>
        <MapPin />
        <p className='font-medium'>Allen Avenue, Lagos, Nigeria</p>
      </div>
    </div>
  );
}
