import DropDown from "../UI/DropDown";
import DropDownUl from "../UI/DropDownUl";
import { PersonSvg } from "../svgs/NavSvgs";
import { useSubmit } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import Button from "../UI/Button";
import { twMerge as tm } from "tailwind-merge";
import { navItemClass, navBtnClass } from "./cssClass";

const UserMenu = () => {
  const submit = useSubmit();
  const user = useSelector((state) => state.user);
  const [menuShow, setMenuShow] = useState(false);

  function handleMenuShow() {
    setMenuShow((prev) => !prev);
  }
  function handleLogin() {
    window.location.href = "http://localhost:8080/auth/google";
  }

  function handleLogout() {
    submit(null, { method: "post", action: "/" });
  }

  return (
    <>
      {user.isLogin ? (
        <>
          <DropDown className="justify-end">
            <Button className="bg-transparent" onClick={handleMenuShow}>
              <PersonSvg className="h-10 w-10" />
            </Button>
            <DropDownUl className=" text-left" state={menuShow}>
              <li>
                <div
                  className={tm(
                    navBtnClass,
                    " cursor-auto border-b border-primary-500 p-2  text-sm",
                  )}
                >
                  <PersonSvg className="h-8 w-8" />
                  <p>{user.info.email}</p>
                </div>
              </li>

              <li>
                <Button
                  onClick={handleLogout}
                  className={tm(
                    navBtnClass,
                    navItemClass,
                    "w-full justify-start rounded-none ",
                  )}
                >
                  <PersonSvg className="h-8 w-8" />
                  <span>Logout</span>
                </Button>
              </li>
            </DropDownUl>
          </DropDown>
        </>
      ) : (
        <Button
          onClick={handleLogin}
          className={tm(
            navBtnClass,
            navItemClass,
            "rounded-none bg-none text-white",
          )}
        >
          <PersonSvg className="h-8 w-8" />
          <span>Login</span>
        </Button>
      )}
    </>
  );
};

export default UserMenu;
