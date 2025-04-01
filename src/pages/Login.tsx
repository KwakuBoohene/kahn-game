import logo from "../assets/logo.svg";
import { useToast } from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { loginRequest } from "../services/auth";
import { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/shared/PageHeader";

interface SignInFormValues {
  email: string;
  password: string;
}

export default function Login() {
  const toast = useToast();
  const navigate = useNavigate();
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = (values: SignInFormValues) => {
    return loginRequest(values.email, values.password)
      .then(() => {
        toast({
          title: "Login Successful",
          status: "success",
        });
      })
      .catch((error: AxiosError) => {
        setHasBeenSubmitted(true);
        let error_message =
          error?.response?.status === 404
            ? "Invalid email or password"
            : error?.message;
        toast({
          title: error_message,
          status: "error",
        });
      });
  };

  return (
    <div className="min-h-screen p-4">
      <PageHeader showSettings={false} showProfile={false} />
      <div className="w-full max-w-md mx-auto mt-8">
        {/* Sign In Text */}
        <h2 className="text-black text-center mb-8 anton-font">
          Please fill in the below fields to sign into account
        </h2>

        <Formik
          initialValues={{
            email: "",
            password: "",
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
                  placeholder="Email/Username"
                  className="w-full p-4 rounded-lg bg-[#FFE0B2] border-none text-black placeholder-gray-500"
                />
                {errors.email && touched.email && (
                  <div className="text-red-500 mt-1 text-sm">{errors.email}</div>
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

              {/* Login Button */}
              <button
                type="submit"
                className="w-full py-4 bg-[#F97316] text-white rounded-full anton-font hover:bg-[#EA580C] transition-colors"
              >
                LOGIN
              </button>

              {/* Sign Up Link */}
              <div className="text-center text-black">
                Don't have an account?{" "}
                <a
                  onClick={() => navigate("/register")}
                  className="text-black font-bold hover:text-[#F97316] transition-colors cursor-pointer"
                >
                  Sign Up
                </a>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
