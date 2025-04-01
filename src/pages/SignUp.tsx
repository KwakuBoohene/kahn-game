import logo from "../assets/logo.svg";
import { useToast } from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/shared/PageHeader";

interface SignUpFormValues {
  email: string;
  email_confirmation: string;
  password: string;
  password_confirmation: string;
}

export default function SignUp() {
  const toast = useToast();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    email_confirmation: Yup.string()
      .email("Invalid email address")
      .oneOf([Yup.ref('email')], 'Emails must match')
      .required("Email confirmation is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required("Password confirmation is required"),
  });

  const onSubmit = (values: SignUpFormValues) => {
    // TODO: Implement signup request
    console.log(values);
    toast({
      title: "Account created successfully",
      status: "success",
    });
  };

  return (
    <div className="min-h-screen p-4">
      <PageHeader showSettings={false} showProfile={false} />
      <div className="w-full max-w-md mx-auto mt-8">
       

        {/* Sign Up Text */}
        <h2 className="text-black text-center mb-8 anton-font">
          Please fill in the below fields to create an account
        </h2>

        <Formik
          initialValues={{
            email: "",
            email_confirmation: "",
            password: "",
            password_confirmation: "",
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form className="space-y-6">
              {/* Email Field */}
              <div>
                <Field
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="w-full p-4 rounded-lg bg-[#FFE0B2] border-none text-black placeholder-gray-500"
                />
                {errors.email && touched.email && (
                  <div className="text-red-500 mt-1 text-sm">{errors.email}</div>
                )}
              </div>

              {/* Email Confirmation Field */}
              <div>
                <Field
                  name="email_confirmation"
                  type="email"
                  placeholder="Email confirmation"
                  className="w-full p-4 rounded-lg bg-[#FFE0B2] border-none text-black placeholder-gray-500"
                />
                {errors.email_confirmation && touched.email_confirmation && (
                  <div className="text-red-500 mt-1 text-sm">{errors.email_confirmation}</div>
                )}
              </div>

              {/* Password Field */}
              <div>
                <Field
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="w-full p-4 rounded-lg bg-[#FFE0B2] border-none text-black placeholder-gray-500"
                />
                {errors.password && touched.password && (
                  <div className="text-red-500 mt-1 text-sm">{errors.password}</div>
                )}
              </div>

              {/* Password Confirmation Field */}
              <div>
                <Field
                  name="password_confirmation"
                  type="password"
                  placeholder="Password confirmation"
                  className="w-full p-4 rounded-lg bg-[#FFE0B2] border-none text-black placeholder-gray-500"
                />
                {errors.password_confirmation && touched.password_confirmation && (
                  <div className="text-red-500 mt-1 text-sm">{errors.password_confirmation}</div>
                )}
              </div>

              {/* Loading Dots */}
              <div className="flex justify-center space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>

              {/* Sign Up Button */}
              <button
                type="submit"
                className="w-full py-4 bg-[#F97316] text-white rounded-full anton-font hover:bg-[#EA580C] transition-colors"
              >
                SIGN UP
              </button>

              {/* Login Link */}
              <div className="text-center text-black">
                Already have an account?{" "}
                <a
                  onClick={() => navigate("/login")}
                  className="text-black font-bold hover:text-[#F97316] transition-colors cursor-pointer"
                >
                  Login
                </a>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
} 