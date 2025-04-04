import React from "react";
import NavBar from "../components/NavBar";
// import FormCard from "../components/FormCard";
import SignInForm from "../components/SignInForm";

function SignIn() {
  return (
    <div className="flex flex-col items-center bg-[#FCFCFC] min-h-screen">
      <NavBar />

      <div className="w-full max-w-[1200px] mx-auto px-4 mt-36 mb-24 block md:flex justify-center items-start gap-8">
        <div className="flex justify-center items-center m-auto">
        <SignInForm />
        </div>
        {/* <FormCard /> */}
      </div>
    </div>
  );
}

export default SignIn;
