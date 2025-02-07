import React from "react";
import InputField from "./Input";
import { Mail } from "lucide-react";
import Button from "./Button";
import { Link } from "react-router-dom";

function CodeForm() {
  return (
    <form className="bg-white py-8 px-12 flex flex-col gap-6 rounded-[24px] w-full">
      <div>
      <h1 className="text-[#1A1B1C] text-[40px] font-semibold font-darkerGrotesque leading-[50px] text-center">
      We’ve sent you a code
      </h1>
      <p className="text-[#25292E] text-center text-base font-medium font-darkerGrotesque leading-[18px]">Enter the verification code that was sent to your email address.</p>
      </div>
      <InputField
        label="Verification Code"
        placeholder="Enter 6 digit code"
        type="text"
        icon={<Mail />}
      />
      <Button text="Continue" />
      <p className="text-[#8A8A8B] text-center text-base font-medium font-inter">
        Already have an account?{" "}
        <Link to="/signin" className="text-[#404041]">
          Sign in
        </Link>
      </p>
    </form>
  );
}

export default CodeForm;
