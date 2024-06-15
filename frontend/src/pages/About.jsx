const About = () => {
  const handleLogin = () => {
    window.location.href = "http://localhost:8080/auth/google";
  };
  return (
    <div>
      <p>About Page</p>
      <button onClick={handleLogin}>login</button>
    </div>
  );
};

export default About;
