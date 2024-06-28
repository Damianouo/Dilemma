import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contest from "./pages/Contest";
import Home from "./pages/Home";
import ConfigCtxProvider from "./contexts/ConfigCtx";
import Ranking from "./pages/Ranking";
import BrowseContests, {
  loader as browseContestsLoader,
} from "./pages/BrowseContests";
import CreateContest, { action as creationAction } from "./pages/CreateContest";
import About from "./pages/About";
import Error from "./pages/Error";
import { rootAction, rootLoader } from "./utils/root";
import Layout from "./components/layout/Layout";
import CreationCtxProvider from "./contexts/CreationCtx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    loader: rootLoader,
    action: rootAction,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/contests",
        id: "contests",
        loader: browseContestsLoader,
        children: [
          { index: true, element: <BrowseContests /> },
          {
            path: ":contestId",
            element: (
              <ConfigCtxProvider>
                <Contest />
              </ConfigCtxProvider>
            ),
          },
        ],
      },
      {
        path: "/create",
        action: creationAction,
        element: (
          <CreationCtxProvider>
            <CreateContest />
          </CreationCtxProvider>
        ),
      },
      { path: "/about", element: <About /> },

      {
        path: "/ranking/:contestId",
        element: <Ranking />,
      },
    ],
  },
]);

function Root() {
  return (
    <Layout>
      <Navbar />
      <main id="detail" className="flex-1">
        <Outlet />
      </main>
    </Layout>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
