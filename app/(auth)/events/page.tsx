import { OutlinedButton } from "@/components/ui/outlined-button";
import EventItem from "./event";

export default function Events() {
  return (
    <div className='px-5'>
      <div className='w-1/2 mx-auto text-3xl text-center font-medium my-10'>
        Empowering Young Africans: Build Skills, Create Opportunities, Shape the
        Future
      </div>
      <div className='font-medium text-2xl mb-3'>Upcoming Events</div>
      <div className='font-medium my-2'>Apply Filter:</div>
      <div className='flex gap-3 mb-5'>
        <OutlinedButton>Date</OutlinedButton>
        <OutlinedButton>Free | Paid</OutlinedButton>
      </div>
      <EventItem />
    </div>
  );
}
