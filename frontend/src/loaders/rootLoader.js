import { store } from "../store";
import { userActions } from "../store/userSlice";

export async function rootLoader() {
  const state = store.getState();

  if (state.user.isLogin) {
    return state.user;
  } else {
    const response = await fetch("/auth/login/success", {
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
