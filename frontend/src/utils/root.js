import { redirect } from "react-router-dom";
import { store } from "../store/index";
import { userActions } from "../store/userSlice";

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
      throw new Response(JSON.stringify({ message: "Failed to check login status" }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    const user = await response.json();
    store.dispatch(userActions.login(user));
    return { isLogin: true, info: user };
  }
}

export async function rootAction() {
  const response = await fetch("http://localhost:8080/auth/logout", {
    method: "POST",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Logout failed, please try again later" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  store.dispatch(userActions.logout());
  return redirect("/");
}
