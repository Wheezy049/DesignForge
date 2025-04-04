import React, { useState } from "react";
import NavBar from "../components/NavBar";
import FormCard from "../components/FormCard";
import InputField from "../components/Input";
import Button from "../components/Button";

function Profile() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="flex flex-col items-center bg-[#F4F4F5] min-h-screen">
      <NavBar />
      <div className="w-full max-w-[1200px] mx-auto px-4 mt-36 mb-24 flex justify-center items-center">
        <div className="flex flex-col items-center w-full">
          {/* Progress Bar */}
          <div className="hidden md:flex items-center w-full gap-4">
            {[1, 2, 3].map((step) => (
              <span
                key={step}
                className={`h-[2px] w-full ${
                  step <= currentStep ? "bg-[#1A1B1C]" : "bg-[#D9D9D9]"
                }`}
              ></span>
            ))}
          </div>

          {/* Step Content */}
          <div className="mt-[58px] flex flex-col md:flex-row items-center gap-[104px] w-full">
            <div className="w-full flex flex-col justify-center">
              {currentStep === 1 && (
                <form className="bg-white py-8 px-16 flex flex-col gap-6 rounded-[24px] w-full">
                  <div>
                    <h1 className="text-[#1A1B1C] text-[20px] md:text-[40px] text-center font-semibold font-darkerGrotesque leading-[50px] ">
                      Let's set up your profile
                    </h1>
                  </div>
                  <InputField
                    label="First Name"
                    placeholder="First Name"
                    type="text"
                  />
                  <InputField
                    label="Last Name"
                    placeholder="Last Name"
                    type="text"
                  />
                  <Button onClick={handleNext} text="Continue" />
                </form>
              )}
              {currentStep === 2 && (
                <form className="bg-white py-8 px-16 flex flex-col gap-6 rounded-[24px] w-full">
                  <div>
                    <h1 className="text-[#1A1B1C] text-[20px] md:text-[40px] text-center font-semibold font-darkerGrotesque leading-[50px] ">
                      A little info about yourself
                    </h1>
                  </div>
                  <InputField
                    label="Brief Bio"
                    placeholder="Enter 6 digit code"
                    type="text"
                  />
                  <InputField
                    label="Your skills and interests"
                    placeholder="Design system"
                    type="text"
                  />
                  <Button onClick={handleNext} text="Continue" />
                </form>
              )}
              {currentStep === 3 && (
                <form className="bg-white py-8 px-16 flex flex-col gap-6 rounded-[24px] w-full">
                    <p>(Optional)</p>
                  <div>
                    <h1 className="text-[#1A1B1C] text-[20px] md:text-[40px] text-center font-semibold font-darkerGrotesque leading-[50px] whitespace-nowrap">
                      Add your social media info
                    </h1>
                  </div>
                  <InputField
                    label="LinkedIn Profile Link"
                    placeholder="Enter URL"
                    type="text"
                  />
                  <InputField
                    label="Twitter Profile Link"
                    placeholder="Enter URL"
                    type="text"
                  />
                  <InputField
                    label="Other Website Link"
                    placeholder="Enter URL"
                    type="text"
                  />
                  <Button onClick={handleNext} text="Continue" />
                </form>
              )}
              <span className="ml-2">Step {currentStep} / 3</span>
            </div>
            <div className="hidden md:block">
              <FormCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
