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
});

const SignIn = ({ onRegisterChange }) => {
  return <RegisterFormik onRegisterChange={onRegisterChange} />;
};
export default SignIn;
const RegisterFormik = ({ onRegisterChange }) => {
  // Handle form submission
  const handleSubmit = async (values, formikBag) => {
    const { setSubmitting } = formikBag;
    alert(JSON.stringify(values, null, 2));
    setSubmitting(true);

    try {
      const response = await axios.post("/api/auth/signin", values);
      console.log(response);
      toast.success("Login Successful!");
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
          Sign in into your account
        </motion.h1>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, formikBag) => {
            handleSubmit(values, formikBag);
          }}
        >
          <Form className="w-full">
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

            <motion.div
              variants={primaryVariants}
              className="mb-4 flex w-full items-start gap-1.5"
            >
              <ErrorMessage
                name="terms"
                component="div"
                className="text-red-500 text-xs"
              />
            </motion.div>
            {/* Sign up button */}
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
              <a
                className="text-indigo-600 underline cursor-pointer"
                onClick={onRegisterChange}
              >
                Register
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
