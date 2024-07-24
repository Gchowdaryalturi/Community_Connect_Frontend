import React from "react";
import {
    Typography,
  } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";

export function MyCampaigns() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto z-10">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                List of My campaign will be part of Stage 2
              </Typography>
            </div>
          </div>
        </div>
      </div>



      <div className="bg-white pt-12">
        <Footer />
      </div>
    </>
  );
}

export default MyCampaigns;
