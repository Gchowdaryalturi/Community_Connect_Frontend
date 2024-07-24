import { Home, SignIn, SignUp,MyCampaigns } from "@/pages";

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
  { name: 'Logout', path: null, href: null, target: '_self', logout: true },

  

];

export default routes;
