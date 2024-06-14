import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { routes } from "./routes";
import Navbar from "./components/Navbar";
import Contest from "./pages/Contest";
import Home from "./pages/Home";
import ConfigCtxProvider from "./contexts/ConfigCtx";
import Ranking from "./pages/Ranking";

const allRoutes = routes.map((route) => ({
  path: route.path,
  element: route.element,
}));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      ...allRoutes,
      {
        path: "/contests/:contestId",
        element: (
          <ConfigCtxProvider>
            <Contest />
          </ConfigCtxProvider>
        ),
      },
      {
        path: "/ranking/:contestId",
        element: <Ranking />,
      },
    ],
  },
]);

function Root() {
  return (
    <div
      className="flex h-screen  flex-col bg-zinc-200 font-nunito text-xl
    font-medium text-gray-700 "
    >
      <Navbar />
      <div id="detail" className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
