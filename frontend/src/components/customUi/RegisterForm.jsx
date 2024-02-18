import { motion } from "framer-motion";
import { FiArrowUpRight, FiStar } from "react-icons/fi";
import Singer from "../../assets/Singer.png";

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
  return (
    <section className="grid min-h-screen grid-cols-1 bg-slate-50 md:grid-cols-[1fr,_400px] lg:grid-cols-[1fr,_600px]">
      <RegisterFormik />
      <SupplementalContent />
    </section>
  );
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
      console.log(error.response?.data);
      if (error.response && error.response.data) {
        const errorMessage = error.response?.data; // Assuming error message is in error.response.data.message
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

const SupplementalContent = () => {
  return (
    <div className="group sticky top-4 m-4 h-60 overflow-hidden rounded-3xl rounded-tl-[4rem] bg-slate-950 md:h-[calc(100vh_-_15rem)]">
      <img
        alt="An example image"
        src={Singer}
        className="h-full w-full bg-white object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-50"
      />

      <div className="absolute right-2 top-4 z-10">
        <FiArrowUpRight className="rotate-45 text-6xl text-indigo-200 opacity-0 transition-all duration-500 group-hover:rotate-0 group-hover:opacity-100" />
      </div>

      <motion.div
        initial="initial"
        whileInView="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        viewport={{ once: true }}
        className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-slate-950/90 to-slate-950/0 p-8"
      >
        <motion.h2
          className="mb-2 text-3xl font-semibold leading-[1.25] text-white lg:text-4xl"
          variants={primaryVariants}
        >
          Connecting Musicians
          <br />
          with Opportunities
        </motion.h2>
        <motion.p
          variants={primaryVariants}
          className="mb-6 max-w-md text-sm text-slate-300"
        >
          Street Sound Society's innovative smart speakers are revolutionizing
          the music industry by connecting aspiring artists with the public more
          rapidly than ever before. Now, you can showcase your talent in public
          spaces today, effortlessly bringing your music to life for audiences
          everywhere!
        </motion.p>
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <motion.img
              variants={avatarVariants}
              className="h-8 w-8 rounded-full border-[1px] border-slate-100 object-cover shadow-inner"
              alt="A placeholder testimonial image"
              src="/imgs/head-shots/1.jpg"
            />
            <motion.img
              variants={avatarVariants}
              className="-ml-4 h-8 w-8 rounded-full border-[1px] border-slate-100 object-cover shadow-inner"
              alt="A placeholder testimonial image"
              src="/imgs/head-shots/2.jpg"
            />
            <motion.img
              variants={avatarVariants}
              className="-ml-4 h-8 w-8 rounded-full border-[1px] border-slate-100 object-cover shadow-inner"
              alt="A placeholder testimonial image"
              src="/imgs/head-shots/3.jpg"
            />
            <motion.img
              variants={avatarVariants}
              className="-ml-4 h-8 w-8 rounded-full border-[1px] border-slate-100 object-cover shadow-inner"
              alt="A placeholder testimonial image"
              src="/imgs/head-shots/4.jpg"
            />
            <motion.img
              variants={avatarVariants}
              className="-ml-4 h-8 w-8 rounded-full border-[1px] border-slate-100 object-cover shadow-inner"
              alt="A placeholder testimonial image"
              src="/imgs/head-shots/6.jpg"
            />
          </div>
          <div>
            <motion.div variants={primaryVariants} className="flex gap-0.5">
              <FiStar className="fill-yellow-300 text-sm text-yellow-300" />
              <FiStar className="fill-yellow-300 text-sm text-yellow-300" />
              <FiStar className="fill-yellow-300 text-sm text-yellow-300" />
              <FiStar className="fill-yellow-300 text-sm text-yellow-300" />
              <FiStar className="fill-yellow-300 text-sm text-yellow-300" />
              <span className="ml-2 text-sm text-white">5.0</span>
            </motion.div>
            <motion.p
              variants={primaryVariants}
              className="text-xs text-slate-300"
            >
              from over 100,000 reviews
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
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
