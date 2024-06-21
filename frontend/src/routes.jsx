import BrowseContests from "./pages/BrowseContests";
import Build from "./pages/Build";
import About from "./pages/About";

export const routes = [
  { label: "Browse Contests", path: "/contests", element: <BrowseContests /> },
  { label: "Build Contests", path: "/build", element: <Build /> },
  { label: "About & Suggestion", path: "/about", element: <About /> },
];

export const dropDownRoutes = [{ label: "Home", path: "/" }, ...routes];
