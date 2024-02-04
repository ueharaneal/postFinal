import React from "react";
import { GridHoverHero } from "./customUi/GridCoverHero";
import AppSection from "./customUi/AppSection";
function Hero() {
  return (
    <div>
      <GridHoverHero />
      <div className="flex flex-row justify-around items-center w-5/6">
        <div className="flex flex-col items-center justify-center text-center h-full gap-y-6">
          <h1 className="text-primary text-3xl">Download Our app!</h1>
          <p className="text-primary texl-lg text-wrap w-5/6">
            The Street Sound Society app offers the convenience of booking
            remotely using a QR code or from the comfort of your own location.
            With this app, you have the flexibility to cancel, reschedule, and
            even check the lineup of performers at any given time.
          </p>
        </div>
        <div className="mr-10 flex items-center justify-center h-full">
          <AppSection />
        </div>
      </div>
    </div>
  );
}

export default Hero;
