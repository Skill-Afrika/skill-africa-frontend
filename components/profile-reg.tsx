import ButtonClick from "@/components/form/button";
import CustomizedTextField from "@/components/form/text-field";
import { Button } from "@mui/material";
import React, { ChangeEvent, FormEvent, useState } from "react";
import {
  CldImage,
  CldUploadWidget,
  CloudinaryUploadWidgetInfo,
} from "next-cloudinary";
import { useGetProfile, useUpdateProfile } from "@/app/api/get-profile";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { enqueueSnackbar, SnackbarProvider } from "notistack";

export const ProfileUpdate = () => {
  const { data: session } = useSession();
  const user = session?.user?.user;

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    bio: "",
  });
  const [result, setResult] = useState<CloudinaryUploadWidgetInfo>();
  const [error, setError] = useState(false);

  const { fname, lname, bio } = formData;

  const { mutate } = useUpdateProfile();
  const { data: profileData, isLoading } = useGetProfile(user?.uuid);

  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
        niche: 2,
      };

      if (user?.uuid) {
        mutate({ id: user?.uuid, details });
        enqueueSnackbar("Profile Updated", { variant: "success" });
      }

      router.replace("/profile");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
            value={fname || profileData?.first_name}
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
            value={lname || profileData?.last_name}
            placeholder='Last Name'
            errorText={
              error && lname.length === 0 && "Please enter your last name"
            }
            error={error && lname.length === 0}
            handleChange={handleChange}
          />

          <CustomizedTextField
            id='bio'
            type='text'
            name='bio'
            value={bio || profileData?.bio}
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
