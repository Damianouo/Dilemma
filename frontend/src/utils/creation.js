import { getVideoId } from "./contest";

export async function getVideoTitle(url) {
  const id = getVideoId(url);
  const fetchUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${API_KEY}`;

  const response = await fetch(fetchUrl);
  const data = await response.json();
  if (!response.ok) {
    throw new Error("Can not add video, please try again later");
  }
  if (data.items.length === 0) {
    throw new Error("Can not find video, please check link");
  }
  return data.items[0].snippet.title;
}
