import React from "react";
import InputField from "./Input";
import { Mail } from "lucide-react";
import Button from "./Button";
import { Link } from "react-router-dom";

function SignInForm() {
  return (
    <form className="bg-white py-8 px-12 flex flex-col gap-6 rounded-[24px] w-full">
        <div>
      <h1 className="text-[#1A1B1C] text-[20px] md:text-[40px] font-semibold font-darkerGrotesque leading-[50px] text-center">
        Login into your account
      </h1>
      <p className="text-[#25292E] text-center text-base font-medium font-darkerGrotesque leading-[18px]">Revisit Your Contributions—Your Portfolio Awaits!</p>
      </div>
      <InputField
        label="Email Address"
        placeholder="Enter your email address"
        type="email"
        icon={<Mail />}
      />
      <InputField
        label="Password"
        placeholder="Enter your Password"
        type="password"
      />
      <Button text="Login into your account" />
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
      <p className="text-[#8A8A8B] text-center text-base font-medium font-inter">
        Don't have an account?{" "}
        <Link to="/signup" className="text-[#404041]">
          Sign up
        </Link>
      </p>
    </form>
  );
}

export default SignInForm;
