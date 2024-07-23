import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import { campaignData } from "@/data";

export function Home() {
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
                Your story starts with us.
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <div className="relative -mt-48 z-20">
        <div className="max-w-8xl container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            {campaignData.map((campaign) => (
              <div key={campaign.id} className="w-full px-4 mb-8 md:w-1/2 lg:w-1/3">
                <Card className="overflow-hidden">
                  <CardHeader className="relative h-56 overflow-hidden">
                    <img
                      src={campaign.image}
                      alt={campaign.title}
                      className="h-full w-full object-cover"
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography variant="h5" className="mb-2">
                      {campaign.title}
                    </Typography>
                    <Typography>
                      {campaign.description}
                    </Typography>
                    <Button variant="filled" color="blue" className="mt-4">
                      Learn More
                    </Button>
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white pt-12">
        <Footer />
      </div>
    </>
  );
}

export default Home;
