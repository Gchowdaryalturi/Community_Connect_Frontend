import { Home, SignIn, SignUp, MyCampaigns } from "@/pages";
import Admin from "./pages/admin";

export const routes = [
    {
        name: "home",
        path: "/home",
        element: <Home />,
    },
    {
        name: "campaigns",
        path: "/campaigns",
        element: <Admin />,
    },
    { name: 'Logout', path: null, href: null, target: '_self', logout: true },



];

export default routes;
