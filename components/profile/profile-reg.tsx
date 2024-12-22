"use client";

import { SelectChangeEvent } from "@mui/material";
import React, {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import {
  // CldImage,
  CloudinaryUploadWidgetInfo,
} from "next-cloudinary";
import { useGetProfile, useUpdateProfile } from "@/app/api/get-profile";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { enqueueSnackbar, SnackbarProvider } from "notistack";
import Image from "next/image";
import StepperForm from "../ui/form-steps";

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
  const [stackID, setStackID] = useState<number[]>([]);
  const [languages, setLanguages] = useState<number[]>([]);

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
      setNicheID(profileData?.niches);
      setStackID(profileData?.skills);
      setLanguages(profileData?.languages);
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

  const handleSelectChange =
    (setter: Dispatch<SetStateAction<number[]>>) =>
    (event: ChangeEvent<{}>, newValue: Array<{ id: number }>) => {
      setter(newValue.map((option) => option.id));
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
        niches: nicheID,
        skills: stackID,
        languages: languages,
      };
      console.log(details);
      mutate({ id: user?.uuid, details });
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const nicheItems = [
    { value: "Frontend Developer", id: 4 },
    { value: "Backend Developer", id: 5 },
    { value: "Product Manager", id: 6 },
    { value: "Product Designer", id: 7 },
  ];

  const stackItems = [
    { value: "HTML", id: 1 },
    { value: "CSS", id: 2 },
    { value: "JavaScript", id: 3 },
  ];

  const languageItems = [
    { value: "English", id: 1 },
    { value: "Yoruba", id: 2 },
    { value: "Igbo", id: 3 },
    { value: "Hausa", id: 4 },
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
                stack={stackID}
                languages={languages}
                languageItems={languageItems}
                bio={bio}
                error={error}
                nicheItems={nicheItems}
                stackItems={stackItems}
                profileData={profileData}
                uploadedPhoto={uploadedPhoto}
                setUploadedPhoto={setUploadedPhoto}
                handleChange={handleChange}
                handleSelectNiche={handleSelectChange(setNicheID)}
                handleSelectStack={handleSelectChange(setStackID)}
                handleSelectLanguage={handleSelectChange(setLanguages)}
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
