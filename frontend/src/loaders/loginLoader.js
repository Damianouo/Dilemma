export function loginLoader({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const prev = searchParams.get("from") || null;

  return prev;
}
