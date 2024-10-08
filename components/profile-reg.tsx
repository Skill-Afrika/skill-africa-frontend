import ButtonClick from "@/components/form/button";
import CustomizedTextField from "@/components/form/text-field";
import { Button, SelectChangeEvent } from "@mui/material";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {
  // CldImage,
  CldUploadWidget,
  CloudinaryUploadWidgetInfo,
} from "next-cloudinary";
import { useGetProfile, useUpdateProfile } from "@/app/api/get-profile";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { enqueueSnackbar, SnackbarProvider } from "notistack";
import CustomizedSelectField from "./form/select-field";

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
      router.replace('/profile')
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

      mutate({ id: user?.uuid, details });
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const nicheItems = [
    { id: 1, niche: "freelancer" },
    { id: 2, niche: "tech" },
    { id: 3, niche: "App development" },
  ];

  return (
    <SnackbarProvider maxSnack={3}>
      <div className='container text-slate-800 flex flex-col items-center justify-center'>
        <CldUploadWidget
          signatureEndpoint='/api/sign-image'
          onSuccess={(result) => {
            if (typeof result.info === "string") return;
            setResult(result.info);
            console.log(result);
          }}>
          {({ open }) => {
            return (
              <button
                onClick={() => open()}
                className='bg-orange-500 px-5 py-3 mt-10 text-white rounded-lg'>
                Choose profile picture
              </button>
            );
          }}
        </CldUploadWidget>

        {(result || profileData?.profile_pic) && (
          <img
            src={result?.url || profileData?.profile_pic}
            alt='uploaded image'
            className='w-40 h-40 rounded-full mt-5'
          />
        )}

        <form className='flex flex-col gap-4 my-5' onSubmit={handleSubmit}>
          <CustomizedTextField
            id='fname'
            type='text'
            name='fname'
            value={fname}
            placeholder='First Name'
            errorText={
              error && fname.length === 0 && "Please enter your first name"
            }
            error={error && fname.length === 0}
            handleChange={handleChange}
          />

          <CustomizedTextField
            id='lname'
            type='text'
            name='lname'
            value={lname}
            placeholder='Last Name'
            errorText={
              error && lname.length === 0 && "Please enter your last name"
            }
            error={error && lname.length === 0}
            handleChange={handleChange}
          />

          <CustomizedSelectField
            id='niche'
            value={niche}
            placeholder='Niche'
            handleSelectChange={handleSelectChange}
            menuItems={nicheItems}
          />

          <CustomizedTextField
            id='bio'
            type='text'
            name='bio'
            value={bio}
            placeholder='Bio'
            errorText={error && bio.length === 0 && "Please enter your bio"}
            error={error && bio.length === 0}
            handleChange={handleChange}
            multiline={true}
            rows={4}
          />

          <ButtonClick>Submit</ButtonClick>
        </form>
      </div>
    </SnackbarProvider>
  );
};
