import React, { useState } from "react";
import {
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import useAuthStore from './../useAuthStore';
import { imageList } from "@/data/imageList";

export function CreateCampaign() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { token } = useAuthStore();

    const getRandomImage = () => {
        const randomIndex = Math.floor(Math.random() * imageList.length);
        return `/img/${imageList[randomIndex]}`;
    };

    const handleCreateCampaign = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const baseUrl = "http://localhost:3000"
            const response = await axios.post('/api/campaigns/createcampaign', {
                title,
                description,
                img: getRandomImage()
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.status === 201) {
                navigate('/my-campaigns'); // Redirect to the campaigns page or any other page
            }
        } catch (error) {
            if (error.response && error.response.data) {
                setError(error.response.data.message || 'Failed to create campaign');
            } else {
                setError('Failed to create campaign');
            }
        }
    };

    return (
        <section className="m-8 flex gap-4">
            <div className="w-full lg:w-3/5 mt-24">
                <div className="text-center">
                    <Typography variant="h2" className="font-bold mb-4">Create Campaign</Typography>
                    <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Please enter the title and description of your campaign</Typography>
                </div>
                <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2" onSubmit={handleCreateCampaign}>
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                            Title
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="Title"
                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                            Description
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="Please enter the description here"
                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <Button className="mt-6" fullWidth type="submit">
                        Create
                    </Button>
                    {error && <Typography color="red" className="mt-4">{error}</Typography>}
                </form>
            </div>
            <div className="w-2/5 h-full hidden lg:block">
                <img
                    src="/img/pattern.png"
                    className="h-full w-full object-cover rounded-3xl"
                />
            </div>
        </section>
    );
}

export default CreateCampaign;
