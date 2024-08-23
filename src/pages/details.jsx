import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import axios from 'axios';

export function CampaignDetails() {
    const { id } = useParams();  // Get the campaign ID from the URL
    const [campaign, setCampaign] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCampaign = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/campaigns/${id}`);
                if (response.status === 200 && response.data) {
                    setCampaign(response.data);
                } else {
                    setError('Failed to fetch campaign details.');
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCampaign();
    }, []);
    return (
        <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <div className="text-center">
                <Typography variant="h2" className="font-bold mb-4">Campaign Details</Typography>
            </div>
            <Card>
                <section className="m-8 flex gap-4">
                    <div className="w-full lg:w-3/5 mt-24" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>

                        {campaign.length ?
                            <div className="mb-1 flex flex-col gap-6">
                                <Typography variant="medium" color="blue-gray" className="-mb-3 font-medium">
                                    <strong>Title : </strong> {campaign[0].title}
                                </Typography>

                                <Typography variant="medium" color="blue-gray" className="-mb-3 font-medium">
                                    <strong>Description : </strong>{campaign[0].description}
                                </Typography>
                                <Typography variant="medium" color="blue-gray" className="-mb-3 font-medium">
                                    <strong>Date : </strong>{campaign[0].date.split('T')[0]}
                                </Typography>

                            </div> : ""}



                    </div>

                    {
                        campaign.length ?
                            <div className="w-2/5 h-full hidden lg:block">
                                <img
                                    src={campaign[0].img}
                                    className="h-full w-full object-cover rounded-3xl"
                                />
                            </div> : ""
                    }

                </section>
            </Card >
        </div>
    );
}

export default CampaignDetails;
