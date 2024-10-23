"use client";

import ProfileInfo from "@/components/profile-info";

const ProfilePage = () => {
  //   const session = await getServerSession(authOptions);
  //   if (!session) {
  //     await signOut();
  //     redirect("/login");
  //   }
  //   const user = (await server.get<User>(ROUTES.authUser)).data;


  // Example function to handle logout
  //   const handleLogout = () => {
  // Perform logout logic here (e.g., clear session, redirect to login)
  //     redirect("/login"); // Redirect to login page after logout
  //   };

  return (
    <div>
      <main className='container mx-auto px-4 py-8'>
        <h1 className='text-2xl font-bold mb-4'>Your Profile</h1>
        <ProfileInfo />
      </main>
    </div>
  );
};

export default ProfilePage;
