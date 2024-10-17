import { ChangeEvent, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CustomizedTextField from "./form/text-field";
import CustomizedSelectField from "./form/select-field";
import { FormTypes, MenuItems } from "@/types/types";
import { SelectChangeEvent } from "@mui/material";
import {
  // CldImage,
  CldUploadWidget,
  CloudinaryUploadWidgetInfo,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";

const steps = [
  "Profile Details",
  "Select your Niche",
  "Enter your bio",
  "Upload your image",
];

interface StepperFormTypes extends FormTypes {
  fname: string;
  lname: string;
  bio: string;
  handleSelectChange: (e: SelectChangeEvent) => void;
  niche: string;
  nicheItems: MenuItems[];
  result?: CloudinaryUploadWidgetInfo;
  profileData?: any;
  setResult: (e: CloudinaryUploadWidgetInfo) => void;
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
  result,
  profileData,
  setResult,
}: StepperFormTypes) {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className='w-5/6'>
      <div className='mb-1'>
        Step {activeStep + 1} of {steps.length}
      </div>
      <div className='mb-5 font-semibold text-xl'>{steps[activeStep]}</div>

      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
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
              <CldUploadWidget
                signatureEndpoint='/api/sign-image'
                onSuccess={(result) => {
                  if (typeof result.info === "string") return;
                  const image = result?.info;
                  image && setResult(image);
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

              {(result || profileData) && (
                <img
                  src={result?.url || profileData?.profile_pic}
                  alt='uploaded image'
                  className='w-40 h-40 rounded-full mt-5'
                />
              )}
            </>
          )}

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color='inherit'
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}>
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </>
      )}
    </div>
  );
}
