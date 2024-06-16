import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";

const Error = () => {
  const error = useRouteError();
  console.error(error);
  let message = "Something went wrong";
  if (isRouteErrorResponse(error)) {
    if (error.status === 500) {
      message = error.data.message || "Internal serve error";
    }
    if (error.status === 404) {
      message = " The page doesn't exist.";
    }

    if (error.status === 401) {
      message = "You are not authorized to see this.";
    }
  }

  return (
    <div
      className="flex h-screen flex-col items-center gap-8 bg-zinc-200
    font-nunito text-4xl font-medium text-gray-700"
    >
      <Navbar />
      <p className="mt-12 text-6xl font-bold">Oops !</p>
      <p>{message}</p>
    </div>
  );
};

export default Error;
