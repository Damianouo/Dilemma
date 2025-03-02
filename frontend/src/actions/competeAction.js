export async function competeAction({ request, params }) {
  const entryId = await request.text();
  const { contestId } = params;
  await fetch(`http://localhost:8080/contest/${contestId}/entries/${entryId}`, {
    method: "PATCH",
  });

  return null;
}
