import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contest from "./pages/Contest";
import Home from "./pages/Home";
import ConfigCtxProvider from "./contexts/ConfigCtx";
import Ranking from "./pages/Ranking";
import BrowseContests, {
  loader as BrowseContestsLoader,
} from "./pages/BrowseContests";
import Build from "./pages/Build";
import About, { loader as AboutLoader } from "./pages/About";
import Error from "./pages/Error";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/contests",
        element: <BrowseContests />,
        loader: BrowseContestsLoader,
      },
      { path: "/build", element: <Build /> },
      { path: "/about", element: <About />, loader: AboutLoader },
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
      className="flex h-screen flex-col bg-zinc-200 font-nunito text-xl
    font-medium text-gray-700 "
    >
      <header>
        <Navbar />
      </header>
      <main id="detail" className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
