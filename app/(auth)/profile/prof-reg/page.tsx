"use client";

import { ProfileUpdate } from "@/components/profile-reg";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function ProfileReg() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProfileUpdate />;
    </QueryClientProvider>
  );
}

export default ProfileReg;
