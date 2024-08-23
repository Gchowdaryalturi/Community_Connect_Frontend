import { Home, SignIn, SignUp, MyCampaigns, CampaignDetails } from "@/pages";
import CreateCampaign from "./pages/create-campaign";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "my campaigns",
    path: "/my-campaigns",
    element: <MyCampaigns />,
  },
  {
    name: "Create Campaign",
    path: "/create-campaign",
    element: <CreateCampaign />,
  },

  { name: 'Logout', path: null, href: null, target: '_self', logout: true },



];

export default routes;
