import { useLoaderData } from "react-router-dom";

const About = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <p>About Page</p>
      <p>{data.message}</p>
    </div>
  );
};

export default About;

export async function loader() {
  const response = await fetch("http://localhost:8080/auth/login/success", {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    throw response;
  }

  return response;
}
