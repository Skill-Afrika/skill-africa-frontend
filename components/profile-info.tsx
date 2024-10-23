import { useGetProfile } from "@/app/api/get-profile";
import { useSession } from "next-auth/react";

const ProfileInfo = () => {
  const { data: session } = useSession();
  const user = session?.user?.user;

  const { data, isLoading } = useGetProfile(user?.uuid);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(data)

  return (
    <div className='bg-white shadow-md rounded-lg p-6'>
      <div className='flex items-center gap-5'>
        {data?.profile_pic && (
          <img
            src={data?.profile_pic}
            alt={`${data?.first_name} profile pic`}
            className='rounded-full w-20 h-20'
          />
        )}
        <div>
          <h2 className='text-xl font-bold'>
            {data?.first_name} {data?.last_name || user?.username}
          </h2>
          <p className='text-gray-600'>{user?.email}</p>
        </div>
      </div>
      {data?.bio && <div className='text-lg mt-5'>{data?.bio}</div>}
      {data?.niche?.name !== "" && (
        <div className='text-orange-500 font-semibold'>
          Interest(s): {data?.niche?.name}
        </div>
      )}
    </div>
  );
};

export default ProfileInfo;
