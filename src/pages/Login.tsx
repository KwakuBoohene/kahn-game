import logo from "../assets/favicon.png";
import { Button, ButtonGroup, useToast } from "@chakra-ui/react";

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { loginRequest } from "../services/auth";
import { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface SignInFormValues {
  email: string;
  password: string;
}

export default function Login() {
  const input_field_style =
    "block px-3 w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset bg-white    focus:ring-indigo-600 sm:text-sm sm:leading-6";
  const toast = useToast();
  const initialValues = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  const [hasBeenSubmitted,setHasBeenSubmitted] = useState(false);

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
    <div>
      <div className=""></div>
      <div
        className="flex dark-bg-color min-h-full flex-col
       justify-center px-6 py-12 lg:px-8 rounded-lg w-[500px] text-white "
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src={logo} alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            className="space-y-6"
          >
            {(formik) => (
              <Form>
                {(Object.keys(formik.values) || []).map((input_key, count) => (
                  <div className="py-2" key={count}>
                    <div>
                      <div className="flex w-full justify-start ">
                        <label className="block text-sm font-medium leading-6 text-white">
                          {input_key.charAt(0).toUpperCase() +
                            input_key.slice(1)}
                        </label>
                      </div>
                      <div className="mt-2">
                        <Field
                          id={input_key}
                          name={input_key}
                          type={input_key}
                          as="input"
                          className={input_field_style}
                        />
                      </div>
                      {
                        // Show error message if there is an error
                        formik.touched[
                          input_key as keyof typeof formik.touched
                        ] &&
                        formik.errors[
                          input_key as keyof typeof formik.errors
                        ] ? (
                          <>
                            <ErrorMessage
                              name={input_key}
                              component="div"
                              className="text-red-500 py-1"
                            />
                          </>
                        ) : null
                      }
                      {input_key === "password" && formik.touched.password && hasBeenSubmitted && (
                        <p className="mt-2 text-sm text-left text-gray-500">
                          Forgot your password?
                          <a
                            href="#"
                            className="font-semibold text-indigo-600 hover:text-indigo-500 px-2"
                          >
                            Click here
                          </a>
                        </p>
                      )}
                    </div>
                  </div>
                ))}

                <div className="my-6">
                  <Button type="submit">Sign In</Button>
                </div>
              </Form>
            )}
          </Formik>

          <p className="mt-5 text-center text-sm text-gray-500">
            Dont have an account?
            <a
              onClick={() => navigate("/register")}
              className="font-semibold text-indigo-600 hover:text-indigo-500 px-2"
            >
              Create one here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
