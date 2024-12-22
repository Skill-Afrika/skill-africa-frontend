import { OutlinedButton } from "@/components/ui/outlined-button";

export default function Overview({ data }: { data: any }) {
  return (
    <div className='flex flex-col gap-5 my-5'>
      {/* About Section */}
      <div className=''>
        <h2 className='font-semibold text-xl mb-1'>About me</h2>
        {data?.bio && <div className='text-lg my-3'>{data?.bio}</div>}
      </div>

      {/* Skills */}
      <div className=''>
        <h2 className='font-semibold text-xl mb-2'>Skills</h2>
        <div className='flex flex-wrap gap-3 my-3'>
          {data?.skills?.map((skill: string, index: number) => {
            return <OutlinedButton key={index}>{skill}</OutlinedButton>;
          })}
          <OutlinedButton className='font-semibold text-orange-500'>
            + Add Skill
          </OutlinedButton>
        </div>
      </div>

      {/* Languages */}
      <div className=''>
        <h2 className='font-semibold text-xl mb-2'>Language(s)</h2>
        <div className='flex flex-wrap gap-3 my-3'>
          {data?.languages?.map((language: string, index: number) => {
            return <OutlinedButton key={index}>{language}</OutlinedButton>;
          })}
          <OutlinedButton className='font-semibold text-orange-500'>
            + Add Language
          </OutlinedButton>
        </div>
      </div>
    </div>
  );
}
