import { ProfileUpdate } from "@/components/profile-reg";
import client from "@/lib/services/api/client";
import { ProfileDetails } from "@/types/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useGetProfile(id?: string) {
  return useQuery({
    queryKey: ["profile", id],
    queryFn: async () => {
      if (!id) throw new Error("Profile ID is required");
      const res = await client.get(`freelancer/profiles/${id}`);
      return res.data;
    },
    enabled: !!id,
  });
}

// Update profile mutation
export function useUpdateProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      details,
    }: {
      id?: string;
      details: ProfileDetails;
    }) => {
      const res = await client.put(`freelancer/profiles/${id}`, details);
      return res.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });
}
