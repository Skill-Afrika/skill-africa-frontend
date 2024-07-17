import { User } from "next-auth";
import { useSession } from "next-auth/react";

// interface ProfileInfoProps {
//   user: User;
// }

const ProfileInfo = () => {
  const { data } = useSession();
  const user = data?.user.user;

  return (
    <div className='bg-white shadow-md rounded-lg p-6'>
      <div className='flex items-center mb-4'>
        {/* <img src={user.username} alt="Profile" className="w-16 h-16 rounded-full mr-4" /> */}
        <div>
          <h2 className='text-xl font-bold'>{user?.username}</h2>
          <p className='text-gray-600'>{user?.email}</p>
        </div>
      </div>

      {/* Add more profile information as needed */}
      {/* Example: <p>Phone: {user.phone}</p> */}
    </div>
  );
};

export default ProfileInfo;
