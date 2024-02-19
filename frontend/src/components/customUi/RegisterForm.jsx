import { motion } from "framer-motion";
import { FiArrowUpRight, FiStar } from "react-icons/fi";

//fetching data
import axios from "axios";

//Formik
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { toast, Toaster } from "sonner";

// Validation Schema using Yup
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
  retypePassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
  terms: Yup.boolean()
    .required("Required")
    .oneOf([true], "Terms must be accepted"),
});

const RegisterForm = () => {
  return <RegisterFormik />;
};
export default RegisterForm;
const RegisterFormik = () => {
  // Handle form submission
  const handleSubmit = async (values, formikBag) => {
    const { setSubmitting } = formikBag;
    alert(JSON.stringify(values, null, 2));
    setSubmitting(true);

    try {
      const response = await axios.post("/api/auth/register", values);
      console.log(response);
      toast.success("Account Created!");
    } catch (error) {
      console.log("there was an error from toaster");
      console.log(error.response?.data);
      if (error.response && error.response.data) {
        const errorMessage = error.response.data.message; // Assuming error message is in error.response.data.message
        toast.error(errorMessage);
      }
    } finally {
      setSubmitting(false); // Set submitting to false in finally block
    }
  };
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      transition={{
        staggerChildren: 0.05,
      }}
      viewport={{ once: true }}
      className="flex items-center justify-center pb-4 pt-20 md:py-20"
    >
      <div className="mx-auto my-auto max-w-lg px-4 md:pr-0">
        <motion.h1
          variants={primaryVariants}
          className="mb-6 text-center text-4xl font-semibold"
        >
          Create your account
        </motion.h1>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            retypePassword: "",
            terms: false,
          }}
          validationSchema={validationSchema}
          onSubmit={(values, formikBag) => {
            handleSubmit(values, formikBag);
          }}
        >
          <Form className="w-full">
            <motion.div
              vairants={primaryVariants}
              className="mb-2 w-full flex flex-row justify-between"
            >
              <div className="flex flex-col">
                <label
                  htmlFor="firstName"
                  className="mb-1 inline-block text-sm font-medium"
                >
                  First Name<span className="text-red-600">*</span>
                </label>
                <Field
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  className=" rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="lastName"
                  className="mb-1 inline-block text-sm font-medium"
                >
                  Last Name<span className="text-red-600">*</span>
                </label>
                <Field
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  className="rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>
            </motion.div>

            <motion.div variants={primaryVariants} className="mb-2 w-full">
              <label
                htmlFor="email"
                className="mb-1 inline-block text-sm font-medium"
              >
                Email<span className="text-red-600">*</span>
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-xs"
              />
            </motion.div>

            <motion.div variants={primaryVariants} className="mb-2 w-full">
              <label
                htmlFor="password"
                className="mb-1 inline-block text-sm font-medium"
              >
                Password<span className="text-red-600">*</span>
              </label>
              <Field
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-xs"
              />
            </motion.div>

            <motion.div variants={primaryVariants} className="mb-4 w-full">
              <label
                htmlFor="retypePassword"
                className="mb-1 inline-block text-sm font-medium"
              >
                Re-type Password<span className="text-red-600">*</span>
              </label>
              <Field
                id="retypePassword"
                name="retypePassword"
                type="password"
                placeholder="Re-type your password"
                className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
              />
              <ErrorMessage
                name="retypePassword"
                component="div"
                className="text-red-500 text-xs"
              />
            </motion.div>

            <motion.div
              variants={primaryVariants}
              className="mb-4 flex w-full items-start gap-1.5"
            >
              <Field
                type="checkbox"
                name="terms"
                id="terms-checkbox"
                className="h-4 w-4 accent-indigo-600"
              />
              <label htmlFor="terms-checkbox" className="text-xs">
                By signing up, I agree to the terms and conditions, privacy
                policy, and cookie policy
              </label>
              <ErrorMessage
                name="terms"
                component="div"
                className="text-red-500 text-xs"
              />
            </motion.div>

            <motion.button
              variants={primaryVariants}
              whileTap={{ scale: 0.985 }}
              type="submit"
              className="mb-1.5 w-full rounded bg-indigo-600 px-4 py-2 text-center font-medium text-white transition-colors hover:bg-indigo-700"
            >
              Sign up
            </motion.button>

            <motion.p variants={primaryVariants} className="text-xs">
              Already have an account?{" "}
              <a className="text-indigo-600 underline" href="#">
                Sign in
              </a>
            </motion.p>
          </Form>
        </Formik>
      </div>
      <Toaster position="top-right" richColors />
    </motion.div>
  );
};

const primaryVariants = {
  initial: {
    y: 25,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const avatarVariants = {
  initial: {
    x: 10,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
};
