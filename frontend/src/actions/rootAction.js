import { redirect } from "react-router-dom";
import { store } from "../store";
import { userActions } from "../store/userSlice";

export async function rootAction() {
  const response = await fetch("/auth/logout", {
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
