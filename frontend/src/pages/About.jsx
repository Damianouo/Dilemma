import { useSelector } from "react-redux";

const About = () => {
  const user = useSelector((state) => state.user);
  (async () => {
    const response = await fetch("http://localhost:8080/auth/login/success", {
      method: "GET",
      credentials: "include",
    });
    console.log(await response.json());
  })();
  return (
    <div>
      <p>About Page</p>
      <p>{user.info.email || "not login"}</p>
    </div>
  );
};

export default About;
