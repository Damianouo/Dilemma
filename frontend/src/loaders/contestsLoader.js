export async function contestsLoader() {
  const response = await fetch("http://localhost:8080/contest");
  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not fetch contests" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  return response;
}
