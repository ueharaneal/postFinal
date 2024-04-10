
import { DirectionAwareHover } from "../ui/direction-aware-hover";

import perform from "@/assets/perform.jpeg";
import modelwithview from "@/assets/modelwithview.jpeg"
import audience from "@/assets/audience.jpeg"


function WhoFor() {
  const imageUrl =
    "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="flex justify-start flex-col mt-32">
      <h1 className="text-foreground sm:text-md text-3xl mb-2 font-extrabold">
        If you are ...
      </h1>
      <div className="flex flex-col md:flex-row gap-x-5">
        <div className="md:h-[30rem] h-[20rem] relative  flex flex-col md:flex-row items-center justify-center">
          <DirectionAwareHover imageUrl={perform}>
            <p className="font-bold text-xl"> A Musician</p>
            <p className="font-normal text-sm">
              Finding an audience has never been easier before.{" "}
            </p>
            <p className="font-normal text-sm">
              Sign up and make an appointment today!
            </p>
          </DirectionAwareHover>
          {/* Hidden on medium screens */}
          <div className="flex flex-col my-1 md:hidden">
            <p className="font-bold text-xl">A Musician</p>
            <p className="font-normal text-sm">
              Finding an audience has never been easier before.{" "}
            </p>
            <p className="font-normal text-sm">
              Sign up and make an appointment today!
            </p>
          </div>
        </div>
        <div className="h-[40rem] relative  flex flex-col items-center justify-center">
          <DirectionAwareHover imageUrl={modelwithview}>
            <p className="font-bold text-xl">A Property Owner</p>
            <p className="font-normal text-sm">
              Rent one of our models to place on property
              <br />
              to captivate a lively crowd and unmatched energy.
            </p>
          </DirectionAwareHover>
          <div className="flex flex-col my-1 md:hidden">
            <p className="font-bold text-xl">A Musician</p>
            <p className="font-normal text-sm">
              Finding an audience has never been easier before.{" "}
            </p>
            <p className="font-normal text-sm">
              Sign up and make an appointment today!
            </p>
          </div>
        </div>
        <div className="h-[30rem] relative  flex flex-col items-center justify-center">
          <DirectionAwareHover imageUrl={audience}>
            <p className="font-bold text-xl">Looking for a show</p>
            <p className="font-normal text-sm">Like music? </p>
            <p className="font-normal text-sm">
              Explore and support local talented musicians.
              <br></br>
              Checkout a PFRM smart speaker near you!
            </p>
          </DirectionAwareHover>
          <div className="flex flex-col my-1 md:hidden">
            <p className="font-bold text-xl">A Musician</p>
            <p className="font-normal text-sm">
              Finding an audience has never been easier before.{" "}
            </p>
            <p className="font-normal text-sm">
              Sign up and make an appointment today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoFor;
