export const userLoader = async ({ params }) => {
  const { userId } = params;

  const response = await fetch(`http://localhost:8080/contest/user/${userId}`);

  return response;
};
