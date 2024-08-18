import logo from "../assets/favicon.png";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";

interface SignInFormValues {
  email: string;
  password: string;
}

export default function Login() {
  const input_field_style =
    "block px-3 w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset bg-white    focus:ring-indigo-600 sm:text-sm sm:leading-6";

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = (
    values: SignInFormValues,
    actions: FormikHelpers<SignInFormValues>
  ) => {
    console.log(values);
    actions.setSubmitting(false);
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
                        {input_key.charAt(0).toUpperCase() + input_key.slice(1)}
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
                        formik.touched[input_key as keyof typeof formik.touched] && formik.errors[input_key as keyof typeof formik.errors] ? (<>
                      <ErrorMessage name={input_key} component="div" className="text-red-500 py-1" />
</>):null
                      }
                    </div>
                  </div>
                ))}

                <div className="my-6">
                  <Button type="submit">Sign In</Button>
                </div>
              </Form>
            )}
          </Formik>

          <p className="mt-10 text-center text-sm text-gray-500">
            Forgot your password?
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500 px-2"
            >
              Click here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}