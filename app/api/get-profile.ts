import client from "@/lib/services/api/client";
import { ProfileDetails } from "@/types/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { profile } from "console";

export function useGetProfile(id: string | undefined) {
  return useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const res = await client.get(`freelancer/profiles/${id}`);
      return res.data;
    },
    enabled: !!id,
  });
}

export function useUpdateProfile() {
  return useMutation({
    mutationFn: async ({
      id,
      details,
    }: {
      id: string | undefined;
      details: ProfileDetails;
    }) => {
      const res = await client.put(`freelancer/profiles/${id}`, details);
      return res.data;
    },
  });
}
