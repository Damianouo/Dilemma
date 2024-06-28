import BrowseContests from "./pages/BrowseContests";
import CreateContest from "./pages/CreateContest";
import About from "./pages/About";

export const routes = [
  { label: "Browse Contests", path: "/contests", element: <BrowseContests /> },
  { label: "Create Contests", path: "/create", element: <CreateContest /> },
  { label: "About & Suggestion", path: "/about", element: <About /> },
];

export const dropDownRoutes = [{ label: "Home", path: "/" }, ...routes];
