import React from "react";
import NavBar from "../components/NavBar";
import Form from "../components/Form";
import FormCard from "../components/FormCard";

function SignUp() {
  return (
    <div className="flex flex-col items-center bg-[#FCFCFC] min-h-screen">
      <NavBar />

      <div className="w-full max-w-[1200px] mx-auto px-4 mt-36 mb-24 block md:flex justify-center items-start gap-8">
        <Form />
        <FormCard />
      </div>
    </div>
  );
}

export default SignUp;
