import Singer from "../../assets/Singer.png";
import { FiArrowUpRight, FiStar } from "react-icons/fi";
import { motion } from "framer-motion";

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

  export default SupplementalContent
  
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