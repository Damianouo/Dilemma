import BrowseContests from "./pages/BrowseContests";
import CreateContest from "./pages/CreateContest";

export const routes = [
  { label: "Browse Contests", path: "/contests", element: <BrowseContests /> },
  { label: "Create Contests", path: "/create", element: <CreateContest /> },
];

export const dropDownRoutes = [{ label: "Home", path: "/" }, ...routes];
