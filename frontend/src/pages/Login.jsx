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
    <div className="text-primary-100 px-2 py-4 sm:py-12">
      {prev === "create" && (
        <Message className="border-primary-500 from-primary-700 to-primary-800 mx-auto max-w-fit bg-linear-to-b px-6 py-4 text-lg font-bold text-inherit md:text-xl">
          You must login to create a new contest.
        </Message>
      )}
      <div className="from-primary-700 to-primary-900 mx-auto mt-8 flex min-h-[400px] max-w-[400px] flex-col gap-8 rounded-md bg-linear-to-b p-6">
        <h2 className="text-3xl font-bold md:text-4xl">Login</h2>
        <Button
          className="gap-2 text-base font-semibold transition-colors md:text-xl"
          onClick={handleLogin}
        >
          <GoogleSvg className="h-8 w-8 md:h-10 md:w-10" />
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
