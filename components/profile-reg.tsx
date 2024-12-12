"use client";

import { SelectChangeEvent } from "@mui/material";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {
  // CldImage,
  CloudinaryUploadWidgetInfo,
} from "next-cloudinary";
import { useGetProfile, useUpdateProfile } from "@/app/api/get-profile";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { enqueueSnackbar, SnackbarProvider } from "notistack";
import Image from "next/image";
import StepperForm from "./ui/form-steps";

export const ProfileUpdate = () => {
  const { data: session } = useSession();
  const user = session?.user?.user;
  const { data: profileData, isLoading } = useGetProfile(user?.uuid);

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    bio: "",
  });

  const [nicheID, setNicheID] = useState<number[]>([]);

  const [uploadedPhoto, setUploadedPhoto] =
    useState<CloudinaryUploadWidgetInfo>();

  useEffect(() => {
    if (profileData) {
      setFormData({
        ...formData,
        fname: profileData.first_name,
        lname: profileData.last_name,
        bio: profileData.bio,
      });
      setNicheID(profileData?.niche?.id);
    }
  }, [profileData]);

  const [error, setError] = useState(false);

  const { fname, lname, bio } = formData;

  const {
    mutate,
    isPending,
    data: updateSuccess,
    error: updateError,
  } = useUpdateProfile();

  const router = useRouter();

  useEffect(() => {
    if (updateError) {
      enqueueSnackbar("Error updating details", { variant: "error" });
    }
  }, [updateError]);

  useEffect(() => {
    if (updateSuccess) {
      enqueueSnackbar("Profile Updated", { variant: "success" });
      setTimeout(() => {
        router.replace("/profile");
      }, 2000);
    }
  }, [updateSuccess]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (
    event: ChangeEvent<{}>,
    newValue: Array<{ id: number }>
  ) => {
    setNicheID(newValue.map((option) => option.id));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!fname || !lname || !bio) {
      setError(true);
    } else {
      const details = {
        bio: bio,
        profile_pic:
          uploadedPhoto?.url ||
          profileData?.profile_pic ||
          "https://res.cloudinary.com/dbez0fyq6/image/upload/v1729271237/ngzlkwvpxawd8w4lxsoo.png",
        first_name: fname,
        last_name: lname,
        niche: nicheID,
      };
      console.log(details);
      // mutate({ id: user?.uuid, details });
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const nicheItems = [
    { niche: "Frontend Developer", id: 1 },
    { niche: "Backend Developer", id: 2 },
    { niche: "Product Manager", id: 3 },
    { niche: "Product Designer", id: 4 },
  ];

  return (
    <SnackbarProvider maxSnack={3}>
      <div className='md:flex justify-between items-center text-slate-800'>
        <div className='md:w-1/2 mt-10 md:mt-0'>
          <div className='w-3/4 mx-auto'>
            <div className='font-semibold text-4xl'>Complete Profile</div>
            <div className='my-3'>
              Hey champ, we’re almost done, just a few more steps to go.
            </div>

            <form className='flex flex-col gap-4 my-5' onSubmit={handleSubmit}>
              <StepperForm
                fname={fname}
                lname={lname}
                niche={nicheID}
                bio={bio}
                error={error}
                nicheItems={nicheItems}
                profileData={profileData}
                uploadedPhoto={uploadedPhoto}
                setUploadedPhoto={setUploadedPhoto}
                handleChange={handleChange}
                handleSelectChange={handleSelectChange}
                isPending={isPending}
              />
            </form>
          </div>
        </div>
        <div className='w-1/2 hidden md:block'>
          <Image
            src='/images/cover.svg'
            alt='skillafrika'
            width={100}
            height={100}
            className='w-full h-screen float-end'
            priority
          />
        </div>
      </div>
    </SnackbarProvider>
  );
};
