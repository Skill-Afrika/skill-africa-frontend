"use client";

import ProfileInfo from "@/components/profile-info";

const ProfilePage = () => {
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
