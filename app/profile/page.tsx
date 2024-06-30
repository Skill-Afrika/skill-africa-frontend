import ProfileInfo from '@/components/profile-info';
import Head from 'next/head';
import { authOptions } from "@/lib/auth-options";
import { ROUTES } from "@/lib/const";
import server from "@/lib/services/api/server";
import { getServerSession } from "next-auth/next";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { User } from 'next-auth';


const ProfilePage = async () => {
  

  const session = await getServerSession(authOptions);
  if(!session){
      await signOut()
      redirect('login')
  }
  const user = (await server.get<User>(ROUTES.authUser)).data;

  // Example function to handle logout
  const handleLogout = () => {
    // Perform logout logic here (e.g., clear session, redirect to login)
    redirect('/login'); // Redirect to login page after logout
  };

  return (
    <div>
      <Head>
        <title>Profile Page</title>
        <meta name="description" content="User profile page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Your Profile</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Information */}
          <div className="col-span-1 md:col-span-2">
            <ProfileInfo user={user} />
          </div>

          {/* Profile Tabs */}
          <div className="col-span-1">
           
          </div>
        </div>

        {/* Logout button */}
        <button
          className="mt-8 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md"
        >
          Logout
        </button>
      </main>

      {/* Footer or additional components */}
    </div>
  );
};

export default ProfilePage;
