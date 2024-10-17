import ButtonClick from "@/components/form/button";
import CustomizedTextField from "@/components/form/text-field";
import { Button, SelectChangeEvent } from "@mui/material";
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
import StepperForm from "./form-steps";

export const ProfileUpdate = () => {
  const { data: session } = useSession();
  const user = session?.user?.user;
  const { data: profileData, isLoading } = useGetProfile(user?.uuid);

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    bio: "",
  });

  const [niche, setNiche] = useState("");

  useEffect(() => {
    if (profileData) {
      setFormData({
        ...formData,
        fname: profileData.first_name,
        lname: profileData.last_name,
        bio: profileData.bio,
      });
      setNiche(profileData.niche.id);
    }
  }, [profileData]);

  const [result, setResult] = useState<CloudinaryUploadWidgetInfo>();
  const [error, setError] = useState(false);

  const { fname, lname, bio } = formData;

  const {
    mutate,
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
      router.replace("/profile");
    }
  }, [updateSuccess]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (e: SelectChangeEvent) => {
    setNiche(e.target.value as string);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!fname || !lname || !bio) {
      setError(true);
    } else {
      const details = {
        bio: bio,
        profile_pic: result?.url,
        first_name: fname,
        last_name: lname,
        niche: niche,
      };
      console.log(details);

      mutate({ id: user?.uuid, details });
    }
  };

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  const nicheItems = [
    { id: 1, niche: "freelancer" },
    { id: 2, niche: "tech" },
    { id: 3, niche: "App development" },
  ];

  return (
    <SnackbarProvider maxSnack={3}>
      <div className='flex justify-between items-center text-slate-800'>
        <div className='w-1/2'>
          <div className='w-3/4 mx-auto'>
            <div className='font-semibold text-4xl'>Complete Profile</div>
            <div className='my-3'>
              Hey champ, we’re almost done, just a few more steps to go.
            </div>

            <form className='flex flex-col gap-4 my-5' onSubmit={handleSubmit}>
              <StepperForm
                fname={fname}
                lname={lname}
                niche={niche}
                bio={bio}
                error={error}
                nicheItems={nicheItems}
                profileData={profileData}
                result={result}
                setResult={setResult}
                handleChange={handleChange}
                handleSelectChange={handleSelectChange}
              />
              <ButtonClick>Proceed</ButtonClick>
            </form>
          </div>
        </div>
        <div className='w-1/2'>
          <Image
            src='/images/cover.png'
            alt='skillafrika'
            width={100}
            height={100}
            className='w-10/12 h-screen float-end'
          />
        </div>
      </div>
    </SnackbarProvider>
  );
};
