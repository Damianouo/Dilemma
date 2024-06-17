import { json, redirect } from "react-router-dom";
import { store } from "./store/index";
import { userActions } from "./store/userSlice";

function getVideoId(url) {
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

export function shuffleArray(array) {
  const arr = [...array];

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; // ES6 array destructuring to swap elements
  }
  return arr;
}

export async function rootLoader() {
  const state = store.getState();

  if (state.user.isLogin) {
    return state.user;
  } else {
    const response = await fetch("http://localhost:8080/auth/login/success", {
      method: "GET",
      credentials: "include",
    });

    if (response.status === 401) {
      console.log("user not login");
      return null;
    }

    if (!response.ok) {
      throw json({ message: "Failed to check login status" }, { status: 500 });
    }

    const user = await response.json();
    store.dispatch(userActions.login(user));
    return user;
  }
}

export async function rootAction() {
  const response = await fetch("http://localhost:8080/auth/logout", {
    method: "POST",
    credentials: "include",
  });

  if (!response.ok) {
    throw json(
      { message: "Logout failed, please try again later" },
      { status: 500 },
    );
  }
  store.dispatch(userActions.logout());
  return redirect("/");
}
