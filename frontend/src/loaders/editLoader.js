export const editLoader = async ({ params }) => {
  const { contestId } = params;
  const response = await fetch(`/contest/${contestId}`);

  return response;
};
