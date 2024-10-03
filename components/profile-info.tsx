import { useGetProfile } from "@/app/api/get-profile";
import { useSession } from "next-auth/react";

const ProfileInfo = () => {
  const { data: session } = useSession();
  const user = session?.user?.user;

  const { data, isLoading, refetch } = useGetProfile(user?.uuid);

  console.log(data, isLoading);

  return (
    <div className='bg-white shadow-md rounded-lg p-6'>
      <div>
        <h2 className='text-xl font-bold' onClick={() => refetch()}>
          {user?.username}
        </h2>
        <p className='text-gray-600'>{user?.email}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
