import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
const Contest = lazy(() => import("./pages/Contest"));
const Home = lazy(() => import("./pages/Home"));
const BrowseContests = lazy(() => import("./pages/BrowseContests"));
const CreateContest = lazy(() => import("./pages/CreateContest"));
const Error = lazy(() => import("./pages/Error"));
import Layout from "./components/layout/Layout";
const ContestCtxProvider = lazy(() => import("./contexts/ContestCtx"));
const CompeteCtxProvider = lazy(() => import("./contexts/CompeteCtx"));
const CreationCtxProvider = lazy(() => import("./contexts/CreationCtx"));
const Login = lazy(() => import("./pages/Login"));
const Ranking = lazy(() => import("./pages/Ranking"));
import PageBackground from "./components/layout/PageBackground";
const User = lazy(() => import("./pages/User"));
const Edit = lazy(() => import("./pages/Edit"));
import Loading from "./pages/Loading";
import { contestsLoader } from "./loaders/contestsLoader";
import { creationAction } from "./actions/creationAction";
import { loginLoader } from "./loaders/loginLoader";
import { rankingLoader } from "./loaders/rankingLoader";
import { competeAction } from "./actions/competeAction";
import { userLoader } from "./loaders/userLoader";
import { editLoader } from "./loaders/editLoader";
import { editAction } from "./actions/editAction";
import { rootLoader } from "./loaders/rootLoader";
import { rootAction } from "./actions/rootAction";

const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    element: <Root />,
    errorElement: <Error />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/contests",
        id: "contests",
        loader: contestsLoader,
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<Loading />}>
                <BrowseContests />
              </Suspense>
            ),
          },
          {
            path: ":contestId",
            action: competeAction,
            element: (
              <Suspense fallback={<Loading />}>
                <ContestCtxProvider>
                  <CompeteCtxProvider>
                    <Contest />
                  </CompeteCtxProvider>
                </ContestCtxProvider>
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "/create",
        action: creationAction,
        element: (
          <Suspense fallback={<Loading />}>
            <CreationCtxProvider>
              <CreateContest />
            </CreationCtxProvider>
          </Suspense>
        ),
      },
      {
        path: "/login",
        loader: loginLoader,
        element: (
          <Suspense fallback={<Loading />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "/ranking/:contestId",
        loader: rankingLoader,
        element: (
          <Suspense fallback={<Loading />}>
            <Ranking />,
          </Suspense>
        ),
      },
      {
        path: "/user/:userId",
        loader: userLoader,
        element: (
          <Suspense fallback={<Loading />}>
            <User />
          </Suspense>
        ),
      },
      {
        path: "/edit/:contestId",
        loader: editLoader,
        action: editAction,
        element: (
          <Suspense fallback={<Loading />}>
            <CreationCtxProvider>
              <Edit />
            </CreationCtxProvider>
          </Suspense>
        ),
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
