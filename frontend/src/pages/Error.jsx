import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Layout from "../components/layout/Layout";

const Error = () => {
  const error = useRouteError();
  console.error(error);
  let message = error.data.message || "Something went wrong";
  if (isRouteErrorResponse(error)) {
    if (error.status === 500) {
      message = error.data.message || "Internal serve error";
    }
    if (error.status === 404) {
      message = error.data.message || "The page doesn't exist.";
    }

    if (error.status === 401) {
      message = error.data.message || "You are not authorized to see this.";
    }
  }

  return (
    <Layout>
      <Navbar />
      <div className="flex flex-1 flex-col items-center gap-8 pt-20 text-4xl">
        <p className="text-8xl font-bold">Oops !</p>
        <p className="text-8xl font-bold">{error.status + "."}</p>
        <p>{message}</p>
        <Link to="/" className="btn btn-light">
          Go Back Home
        </Link>
      </div>
    </Layout>
  );
};

export default Error;
