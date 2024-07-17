import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Contest from "./pages/Contest";
import Home from "./pages/Home";
import BrowseContests, {
  loader as browseContestsLoader,
} from "./pages/BrowseContests";
import CreateContest, {
  action as creationAction,
  loader as creationLoader,
} from "./pages/CreateContest";
import About from "./pages/About";
import Error from "./pages/Error";
import { rootAction, rootLoader } from "./utils/root";
import Layout from "./components/layout/Layout";
import CreationCtxProvider from "./contexts/CreationCtx";
import Login, { loader as loginLoader } from "./pages/Login";
import Ranking, { loader as rankingLoader } from "./pages/Ranking";
import ContestCtxProvider from "./contexts/ContestCtx";
import CompeteCtxProvider from "./contexts/CompeteCtx";
import { action as competeAction } from "./components/contest/ContestCompetePage.";
import PageBackground from "./components/layout/PageBackground";

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
            action: competeAction,
            element: (
              <ContestCtxProvider>
                <CompeteCtxProvider>
                  <Contest />
                </CompeteCtxProvider>
              </ContestCtxProvider>
            ),
          },
        ],
      },
      {
        path: "/create",
        loader: creationLoader,
        action: creationAction,
        element: (
          <CreationCtxProvider>
            <CreateContest />
          </CreationCtxProvider>
        ),
      },
      { path: "/login", loader: loginLoader, element: <Login /> },
      { path: "/about", element: <About /> },
      {
        path: "/ranking/:contestId",
        loader: rankingLoader,
        element: <Ranking />,
      },
    ],
  },
]);

function Root() {
  return (
    <Layout>
      <Navbar />
      <main id="detail" className="relative flex-1">
        <PageBackground />
        <div className="relative z-10">
          <Outlet />
        </div>
      </main>
    </Layout>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
