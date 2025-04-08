import React, { useState } from "react";
import InputField from "./Input";
import { Mail } from "lucide-react";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUpForm() {

 const [loading, setLoading] = useState(false);

  const API_BASE_URL = "https://forge-api-5ubm.onrender.com/api/v1";
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        toast.success( data.message || "Account created successfully! Please log in.", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          style: {
            backgroundColor: "#4CAF50",
            color: "white",
            fontSize: "14px",
            textAlign: "center",
            borderRadius: "8px",
          },
        });
        navigate("/signin");
      } else {
        toast.error(data.message || " Sign-up failed. Try again.", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          style: {
            backgroundColor: "#FF4F4F",
            color: "white",
            fontSize: "14px",
            textAlign: "center",
            borderRadius: "8px",
          },
        });
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        style: {
          backgroundColor: "#FF4F4F",
          color: "white",
          fontSize: "14px",
          textAlign: "center",
          borderRadius: "8px",
        },
      });
    } finally{
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSignUp}
      className="bg-white py-8 px-12 flex flex-col gap-6 rounded-[24px] w-full"
    >
      <h1 className="text-[#1A1B1C] text-[20px] md:text-[40px] font-semibold font-darkerGrotesque leading-[50px] text-left">
        Create your account
      </h1>
      <InputField
        label="Email Address"
        placeholder="Enter your email address"
        type="email"
        name="email"
        value={formData.email}
        icon={<Mail />}
        onChange={handleChange}
      />
      <InputField
        label="Password"
        placeholder="Create a Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <Button type="submit" text={loading ? "Signing Up..." : "Continue with email"} disabled={loading}/>
      <span className="text-[#8A8A8B] text-base font-medium font-inter text-center">
        OR
      </span>
      <Button
        text="Continue with Google"
        bgColor="#E9E9E9"
        iconSrc="/images/Group.svg"
        iconAlt="Google logo"
        type="submit"
      />
      <Button
        text="Continue with Figma"
        bgColor="#E9E9E9"
        iconSrc="/images/Figma-logo 1.svg"
        iconAlt="Figma logo"
        type="submit"
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
