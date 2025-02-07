import React from "react";
import InputField from "./Input";
import { Mail } from "lucide-react";
import Button from "./Button";
import { Link } from "react-router-dom";

function SignUpForm() {
  return (
    <form className="bg-white py-8 px-12 flex flex-col gap-6 rounded-[24px] w-full">
      <h1 className="text-[#1A1B1C] text-[40px] font-semibold font-darkerGrotesque leading-[50px] text-center">
        Create your account
      </h1>
      <InputField
        label="Email Address"
        placeholder="Enter your email address"
        type="email"
        icon={<Mail />}
      />
      <InputField
        label="Password"
        placeholder="Create a Password"
        type="password"
      />
      <Button text="Continue with email" />
      <span className="text-[#8A8A8B] text-base font-medium font-inter text-center">
        OR
      </span>
      <Button
        text="Continue with Google"
        bgColor="#E9E9E9"
        iconSrc="/images/Group.svg"
        iconAlt="Google logo"
      />
      <Button
        text="Continue with Figma"
        bgColor="#E9E9E9"
        iconSrc="/images/Figma-logo 1.svg"
        iconAlt="Figma logo"
      />
      <p className="text-[#8A8A8B] text-base font-medium font-inter">
        Already have an account?{" "}
        <Link to="/signin" className="text-[#404041]">
          Sign in
        </Link>
      </p>
    </form>
  );
}

export default SignUpForm;
