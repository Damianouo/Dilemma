export function getVideoId(url) {
  const parsedUrl = new URL(url);
  const videoId = parsedUrl.searchParams.get("v");
  return videoId;
}

export function getCoverImageUrl(url) {
  if (!url) return null;
  const coverImageUrl = `https://img.youtube.com/vi/${getVideoId(url)}/0.jpg`;

  return coverImageUrl;
}

export function getEmbedUrl(url) {
  if (!url) return null;
  const id = getVideoId(url);
  return "https://www.youtube.com/embed/" + id;
}

export async function getVideoTitle(url) {
  const id = getVideoId(url);
  try {
    const response = await fetch(`http://localhost:8080/ytapi/${id}`);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    return data.title;
  } catch (error) {
    throw new Error(error.message);
  }
}

export function shuffleArray(array) {
  const arr = [...array];

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; // ES6 array destructuring to swap elements
  }
  return arr;
}
