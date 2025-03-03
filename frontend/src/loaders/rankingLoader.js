export async function rankingLoader({ params }) {
  const { contestId } = params;
  const response = await fetch(`/contest/${contestId}`);
  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Can not get contest detail, please try again later" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
  const data = await response.json();
  data.entries.sort((a, b) => b.winCount - a.winCount);
  return data;
}
