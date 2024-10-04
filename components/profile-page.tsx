"use client";

import ProfileInfo from "@/components/profile-info";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const ProfilePage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <main className='container mx-auto px-4 py-8'>
          <h1 className='text-2xl font-bold mb-4'>Your Profile</h1>
          <ProfileInfo />
        </main>
      </div>
    </QueryClientProvider>
  );
};

export default ProfilePage;
