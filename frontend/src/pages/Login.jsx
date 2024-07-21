import { useLoaderData } from "react-router-dom";
import GoogleSvg from "../components/svgs/GoogleSvg";
import Button from "../components/UI/Button";
import Message from "../components/UI/Message";

const Login = () => {
  const prev = useLoaderData();

  function handleLogin() {
    window.location.href = "http://localhost:8080/auth/google";
  }

  return (
    <div className="px-2 py-4 text-primary-100 sm:py-12">
      {prev === "create" && (
        <Message
          className=" mx-auto max-w-fit border-primary-500 bg-gradient-to-b
          from-primary-700 to-primary-800 px-6 py-4 text-lg font-bold text-inherit md:text-xl"
        >
          You must login to create a new contest.
        </Message>
      )}
      <div
        className="mx-auto mt-8 flex min-h-[400px] max-w-[400px] flex-col gap-8 rounded-md
      bg-gradient-to-b from-primary-600 to-primary-800 p-6"
      >
        <h2 className="text-3xl font-bold md:text-4xl">Login</h2>
        <Button
          className="gap-2 bg-primary-300 text-base font-semibold transition-colors hover:bg-primary-400 md:text-xl "
          onClick={handleLogin}
        >
          <GoogleSvg className="h-8 w-8  md:h-10 md:w-10" />
          Login With Google
        </Button>
      </div>
    </div>
  );
};

export default Login;

export function loader({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const prev = searchParams.get("from") || null;

  return prev;
}
