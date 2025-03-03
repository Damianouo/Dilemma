export const userLoader = async ({ params }) => {
  const { userId } = params;

  const response = await fetch(`/contest/user/${userId}`);

  return response;
};
