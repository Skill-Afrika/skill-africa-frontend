import { useGetProfile } from "@/app/api/get-profile";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import { useEffect } from "react";

const ProfileInfo = () => {
  const { data: session } = useSession();
  const user = session?.user?.user;
  const router = useRouter();

  const { data, isLoading, isFetched } = useGetProfile(user?.uuid);

  console.log(data, isFetched, user);

  useEffect(() => {
    if (isFetched && !data?.first_name) {
      router.replace("profile/prof-reg");
    }
  }, [isFetched, data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='bg-white shadow-md rounded-lg p-6'>
      <div className='md:flex items-center gap-10'>
        <img
          src={
            data?.profile_pic ||
            "https://res.cloudinary.com/dbez0fyq6/image/upload/v1729271237/ngzlkwvpxawd8w4lxsoo.png"
          }
          alt={`${data?.first_name} profile pic`}
          className='rounded-full w-52 h-52 bg-cover'
        />

        <div>
          <h2 className='text-3xl font-bold mt-5 md:mt-0'>
            {data?.first_name} {data?.last_name || user?.username}
          </h2>
          <p className='text-xl font-semibold my-2'>
            Creative Frontend developer | Community manager
          </p>
          <div className='flex flex-wrap md:gap-5 gap-2'>
            <div className='text-gray-600 flex items-center gap-1'>
              <img src='/images/map.svg' alt='/' />
              <p>Lagos, Nigeria</p>
            </div>
            <div className='text-gray-600 flex items-center gap-1'>
              <img src='/images/mail.svg' alt='/' />
              <p className='text-gray-600'>{user?.email}</p>
            </div>
          </div>
          <div className='flex flex-wrap gap-3 my-3'>
            <p className='rounded-full px-3.5 py-1 border border-gray-600'>
              Frontend Developer
            </p>
            <p className='rounded-full px-3.5 py-1 border border-gray-600'>
              UX Researcher
            </p>
          </div>
          <Link
            href='/profile/prof-reg'
            className='bg-orange-500 flex items-center gap-2 py-2 px-4 rounded-full text-white w-fit'>
            <img src='/images/edit.svg' alt='/' />
            <p>Edit Profile</p>
          </Link>
        </div>
      </div>
      {data?.bio && <div className='text-lg mt-5'>{data?.bio}</div>}
      {data?.niche?.name && (
        <div className='text-orange-500 font-semibold'>
          Interest(s): {data?.niche?.name}
        </div>
      )}
    </div>
  );
};

export default ProfileInfo;
