export const editAction = async ({ request }) => {
  const data = await request.json();
  const { contestId } = data;
  const options = { method: request.method, credentials: "include" };

  if (request.method === "PATCH") {
    options.headers = { "Content-Type": "application/json" };
    options.body = JSON.stringify(data.contestContent);
  }

  const response = await fetch(`/contest/${contestId}`, options);
  const { message } = await response.json();
  if (!response.ok) {
    return { successful: false, message };
  }
  return { successful: true, message };
};
