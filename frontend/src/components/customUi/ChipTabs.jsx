import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const tabs = ["Home", "About", "Find a Post", "Sign in"];

const ChipTabs = () => {
  const [selected, setSelected] = useState(
    localStorage.getItem("selectedTab") || tabs[0]
  );

  useEffect(() => {
    localStorage.setItem("selectedTab", selected);
  }, [selected]);

  return (
    <div className="px-14 gap-8">
      {tabs.map((tab) => (
        <Chip
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          key={tab}
        />
      ))}
    </div>
  );
};

const Chip = ({ text, selected, setSelected }) => {
  //Configuring text name to path
  const path = text.toLowerCase().replace(/\s+/g, "");
  return (
    <Link to={path} onClick={() => setSelected(text)}>
      <button
        className={`${
          selected
            ? "text-white"
            : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"
        } text-sm transition-colors px-2.5 py-0.5 rounded-md relative`}
      >
        <span className="relative text-xl  px-7 z-10">{text}</span>
        {selected && (
          <motion.span
            layoutId="pill-tab"
            transition={{ type: "spring", duration: 0.5 }}
            className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"
          ></motion.span>
        )}
      </button>
    </Link>
  );
};

export default ChipTabs;
