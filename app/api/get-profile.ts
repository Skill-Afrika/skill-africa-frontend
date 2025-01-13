import { ProfileUpdate } from "@/components/profile/profile-reg";
import client from "@/lib/services/api/client";
import { experienceDetails, ProfileDetails, ProjectDetails } from "@/types/types";
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

export function useGetProjects(id?: string) {
  return useQuery({
    queryKey: ["project", id],
    queryFn: async () => {
      if (!id) throw new Error("Profile ID is required");
      const res = await client.get(`freelancer/profiles/${id}/projects`);
      return res.data;
    },
    enabled: !!id,
  });
}

// Add project mutation
export function useAddProjects() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      projectDetails,
    }: {
      id?: string;
      projectDetails: ProjectDetails;
    }) => {
      const res = await client.post(
        `freelancer/profiles/${id}/project`,
        projectDetails
      );
      return res.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["project"] });
    },
  });
}

export function useGetExperiences(id?: string) {
  return useQuery({
    queryKey: ["project", id],
    queryFn: async () => {
      if (!id) throw new Error("Profile ID is required");
      const res = await client.get(
        `freelancer/profiles/${id}/work-experiences`
      );
      return res.data;
    },
    enabled: !!id,
  });
}

// Add experience mutation
export function useAddExperience() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      experienceDetails,
    }: {
      id?: string;
      experienceDetails: experienceDetails;
    }) => {
      const res = await client.post(
        `freelancer/profiles/${id}/work-experience`,
        experienceDetails
      );
      return res.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["project"] });
    },
  });
}
