import React from "react";
import ChipTabs from "./ChipTabs";
import GradientShadowButton from "./ui/GradientShadowButton";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";

function NavBar() {
  return (
    <div className="w-screen flex flex-row justify-between px-20 bg-slate-800  items-center ">
      <Link to="/home">
        <GradientShadowButton title="Street Sound Society" textSize="text-2xl"/>
      </Link>
      <div className="">
        <ChipTabs />
      </div>
    </div>
  );
}

export default NavBar;
