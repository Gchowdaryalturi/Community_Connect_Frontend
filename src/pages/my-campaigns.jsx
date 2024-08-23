import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import axios from 'axios';
import { imageList } from "@/data/imageList";
import useAuthStore from './../useAuthStore';

export function MyCampaigns() {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useAuthStore();

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const baseUrl = "http://localhost:3000";
        const response = await axios.get(`/api/campaigns/mycampaigns`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (response.status === 200) {

          setCampaigns(response.data);
        } else {
          setError('Response was not okay');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, [token]);



  const handleDelete = async (campaignId) => {
    try {
      const baseUrl = "http://localhost:3000";
      const response = await axios.delete(`/api/campaigns/delete-campaign/${campaignId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.status === 200) {
        // Update the state to remove the deleted campaign
        setCampaigns(campaigns.filter(campaign => campaign._id !== campaignId));
      } else {
        setError('Failed to delete campaign.');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto z-10">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              {/* Optional: Add any content or styling here */}
            </div>
          </div>
        </div>
      </div>

      <div className="relative -mt-48 z-20" style={{ marginTop: "-36rem" }}>
        <div className="max-w-8xl container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            {loading ? "Loading..." : error ? <p>{error}</p> : campaigns.map((campaign) => (
              <div key={campaign.id} className="w-full px-4 mb-8 md:w-1/2 lg:w-1/3">
                <Card className="overflow-hidden">
                  <CardHeader className="relative h-56 overflow-hidden">
                    <img
                      src={campaign.img}
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
                    <Button
                      variant="filled"
                      color="red"
                      className="mt-4"
                      onClick={() => handleDelete(campaign._id)}
                    >
                      Delete
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

export default MyCampaigns;
