import { useState } from "react";
import { OutlinedButton } from "./ui/outlined-button";

const profileNavs = [
  { id: "overview", nav: "Profile Overview" },
  { id: "works", nav: "Works/Projects" },
  { id: "experience", nav: "Work Experience" },
];

export const ProfileInfo = ({ data }: any) => {
  const [active, setActive] = useState("overview");

  return (
    <>
      <div className='flex flex-wrap items-center gap-3 mt-10'>
        {profileNavs.map((profile, index) => {
          return (
            <div
              key={index}
              onClick={() => setActive(profile.id)}
              className={
                profile.id === active
                  ? "font-semibold text-orange-500 bg-orange-200 bg-opacity-50 rounded-full px-3 py-1"
                  : "text-slate-600 cursor-pointer px-3 py-1"
              }>
              {profile.nav}
            </div>
          );
        })}
      </div>

      <div className='flex flex-col gap-5 my-5'>
        <div className=''>
          <h2 className='font-semibold text-xl mb-1'>About me</h2>
          {data?.bio && <div className='text-lg'>{data?.bio}</div>}
        </div>
        <div className=''>
          <h2 className='font-semibold text-xl mb-2'>Skills</h2>
          {data?.niche?.name && (
            <OutlinedButton>{data?.niche?.name}</OutlinedButton>
          )}
        </div>
      </div>
    </>
  );
};
