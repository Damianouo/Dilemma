export function getVideoId(url) {
  const videoId = url.split("watch?v=");
  if (videoId.length > 1) {
    return videoId[1];
  }
  const shortsId = url.split("shorts/");
  if (shortsId.length > 1) {
    return shortsId[1];
  }
  return null;
}

export function getCoverImageUrl(url) {
  if (!url) return null;

  const coverImageUrl = `https://i.ytimg.com/vi/${getVideoId(url)}/hqdefault.jpg`;

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
    if (error instanceof TypeError) {
      throw new Error("Can not add/update video, please try again later.");
    }
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

export function getCompeteEntries(entries, participantsNum) {
  const entriesArray = [...entries];
  return shuffleArray(entriesArray).slice(0, participantsNum);
}
