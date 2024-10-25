import { ChangeEvent, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CustomizedTextField from "./form/text-field";
import CustomizedSelectField from "./form/select-field";
import { FormTypes, MenuItems } from "@/types/types";
import { SelectChangeEvent } from "@mui/material";
import {
  // CldImage,
  CldUploadWidget,
  CloudinaryUploadWidgetInfo,
} from "next-cloudinary";
import ButtonClick from "./form/button";
import { enqueueSnackbar } from "notistack";
import { ThreeDots } from "react-loader-spinner";

const steps = [
  "Profile Details",
  "Select your Niche",
  "Enter your bio",
  "Upload a profile photo",
];

interface StepperFormTypes extends FormTypes {
  fname: string;
  lname: string;
  bio: string;
  handleSelectChange: (e: SelectChangeEvent) => void;
  niche: string;
  nicheItems: MenuItems[];
  uploadedPhoto?: CloudinaryUploadWidgetInfo;
  profileData?: any;
  setUploadedPhoto: (e: CloudinaryUploadWidgetInfo) => void;
  isPending: boolean;
}

export default function StepperForm({
  fname,
  lname,
  error,
  handleChange,
  handleSelectChange,
  niche,
  nicheItems,
  bio,
  uploadedPhoto,
  profileData,
  setUploadedPhoto,
  isPending,
}: StepperFormTypes) {
  const [activeStep, setActiveStep] = useState(0);

  const nextSlide = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleError = (message: string) => {
    enqueueSnackbar(message, { variant: "error" });
  };

  const handleNext = () => {
    if (activeStep === 0) {
      !fname || !lname ? handleError("Please fill in the fields") : nextSlide();
    }

    if (activeStep === 1) {
      !niche ? handleError("Please select a niche") : nextSlide();
    }

    if (activeStep === 2) {
      !bio ? handleError("Please enter your bio") : nextSlide();
    }

    if (activeStep === 3) {
      !uploadedPhoto && !profileData?.profile_pic
        ? handleError("Please upload a photo")
        : nextSlide();
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className='md:w-5/6'>
      <div className='mb-2 font-semibold text-orange-500'>
        Step {activeStep + 1} of {steps.length + 1}
      </div>
      <div className='mb-5 font-semibold text-xl'>{steps[activeStep]}</div>

      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re done.
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <ButtonClick onClick={handleBack}>Back</ButtonClick>
            <Box sx={{ flex: "1 1 auto" }} />
            <ButtonClick type='submit'>
              {isPending ? (
                <ThreeDots
                  visible={true}
                  height='20'
                  width='20'
                  color='#ffffff'
                  radius='9'
                  ariaLabel='three-dots-loading'
                  wrapperStyle={{}}
                  wrapperClass=''
                />
              ) : (
                "Update"
              )}
            </ButtonClick>
          </Box>
        </>
      ) : (
        <>
          {activeStep === 0 && (
            <>
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
            </>
          )}

          {activeStep === 1 && (
            <CustomizedSelectField
              id='niche'
              value={niche}
              placeholder='Niche'
              handleSelectChange={handleSelectChange}
              menuItems={nicheItems}
            />
          )}

          {activeStep === 2 && (
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
          )}

          {activeStep === 3 && (
            <>
              {uploadedPhoto || profileData?.profile_pic ? (
                <img
                  src={uploadedPhoto?.url || profileData?.profile_pic}
                  alt='uploaded image'
                  className='w-40 h-40 rounded-full my-5'
                />
              ) : (
                <img
                  src='/images/blank.png'
                  alt='blank image'
                  className='w-52'
                />
              )}

              <CldUploadWidget
                signatureEndpoint='/api/sign-image'
                onSuccess={(uploadedPhoto) => {
                  if (typeof uploadedPhoto.info === "string") return;

                  const image = uploadedPhoto?.info;
                  image && setUploadedPhoto(image);
                }}>
                {({ open }) => {
                  return (
                    <>
                      <div className='text-slate-500 my-3'>
                        Upload a a maximum of 5mb file size in{" "}
                        <span className='font-semibold text-black'>
                          PNG, JPG, or GIF{" "}
                        </span>
                        format
                      </div>
                      <ButtonClick
                        className='mb-5 bg-slate-800'
                        onClick={() => open()}>
                        <span className='float-left mr-2'>
                          <img src='/images/cam.svg' />
                        </span>
                        {uploadedPhoto || profileData?.profile_pic
                          ? "Change photo"
                          : "Upload a photo"}
                      </ButtonClick>
                    </>
                  );
                }}
              </CldUploadWidget>
            </>
          )}

          <Box sx={{ display: "flex", flexDirection: "row" }}>
            {activeStep !== 0 && (
              <ButtonClick onClick={handleBack}>Back</ButtonClick>
            )}
            <Box sx={{ flex: "1 1 auto" }} />

            <ButtonClick onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Proceed"}
            </ButtonClick>
          </Box>
        </>
      )}
    </div>
  );
}
