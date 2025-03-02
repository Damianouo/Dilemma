export const editLoader = async ({ params }) => {
  const { contestId } = params;
  const response = await fetch(`http://localhost:8080/contest/${contestId}`);

  return response;
};
