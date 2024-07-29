import { useSelector } from "react-redux";

const About = () => {
  // const user = useSelector((state) => state.user);
  // (async () => {
  //   const response = await fetch("http://localhost:8080/auth/login/success", {
  //     method: "GET",
  //     credentials: "include",
  //   });
  //   console.log(await response.json());
  // })();
  return (
    <div className="relative z-10 mx-auto h-96 w-96 bg-red-900">
      <div className="absolute left-0 top-0 z-0 h-80 w-80 bg-blue-800"></div>
    </div>
  );
};

export default About;
