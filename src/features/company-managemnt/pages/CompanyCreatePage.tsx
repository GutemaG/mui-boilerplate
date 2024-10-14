import { Box } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import { DefaultPage } from "../../../components/DefaultPage";
import { CompanyInformationForm } from "../components/CompanyInformationForm";
import CompanyBusinessForm from "../components/CompanyBusinessForm";
import CompanyFieldBusinessAndTaxOfficeForm from "../components/CompanyFieldBusinessAndTaxOfficeForm";

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];

export const CompanyCreatePage = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <DefaultPage
      title="Create Company"
      breadCrumbLinks={[
        { href: "/", title: "Home" },
        { href: "/companies", title: "Companies" },
        { href: "/companies/create-company", title: "Create Company" },
      ]}
    >
      <Box sx={{ width: "100%" }}>
        <Box py={3}>
          <Stepper activeStep={activeStep}>
            {steps.map((label) => {
              const stepProps: { completed?: boolean } = {};
              const labelProps: {
                optional?: React.ReactNode;
              } = {};
              return (
                <Step
                  key={label}
                  {...stepProps}
                  sx={{
                    "& .MuiStepLabel-root .Mui-completed": {
                      color: "#24A148",
                    },
                    "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
                      {
                        color: "grey.500", // Just text label (COMPLETED)
                      },
                    "& .MuiStepLabel-root .Mui-active": {
                      color: "#24A148", // circle color (ACTIVE)
                    },
                    "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                      {
                        color: "common.white", // Just text label (ACTIVE)
                      },
                    "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                      fill: "black", // circle's number (ACTIVE)
                    },
                  }}
                >
                  <StepLabel {...labelProps}>
                    <Typography color="#000">{label}</Typography>
                  </StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Box>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box my={3} px={1}>
              {activeStep === 0 && <CompanyInformationForm />}
              {activeStep === 1 && <CompanyBusinessForm />}
              {activeStep === 2 && <CompanyFieldBusinessAndTaxOfficeForm />}
            </Box>

            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />

              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </DefaultPage>
  );
};
