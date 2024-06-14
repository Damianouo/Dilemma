function getVidoeId(url) {
  const parsedUrl = new URL(url);
  const videoId = parsedUrl.searchParams.get("v");
  return videoId;
}
export function getCoverImageUrl(obj) {
  if (!obj) return null;
  const coverImageUrl = `https://img.youtube.com/vi/${getVidoeId(obj.itemUrl)}/0.jpg`;

  return coverImageUrl;
}

export function getEmbedUrl(url) {
  if (!url) return null;
  const id = getVidoeId(url);
  return "https://www.youtube.com/embed/" + id;
}

export function shuffleArray(array) {
  const arr = [...array];

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; // ES6 array destructuring to swap elements
  }
  return arr;
}
