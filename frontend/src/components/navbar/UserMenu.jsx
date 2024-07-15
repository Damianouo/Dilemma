import DropDown from "../UI/DropDown";
import DropDownItem from "../UI/DropDownItem";
import { LogoutSvg, PersonSvg } from "../svgs/NavSvgs";
import { NavLink, useSubmit } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import Button from "../UI/Button";
import { twMerge as tm } from "tailwind-merge";
import { navItemClass } from "./cssClass";

const UserMenu = () => {
  const submit = useSubmit();
  const user = useSelector((state) => state.user);
  const [menuShow, setMenuShow] = useState(false);

  function handleMenuShow() {
    setMenuShow((prev) => !prev);
  }

  function handleLogout() {
    submit(null, { method: "post", action: "/" });
  }

  return (
    <>
      {user.isLogin ? (
        <>
          <DropDown className="justify-end">
            <Button
              className="bg-transparent text-inherit hover:bg-primary-600"
              onClick={handleMenuShow}
            >
              <PersonSvg className="h-10 w-10" />
            </Button>
            <DropDownItem className=" text-left" state={menuShow}>
              <li className="flex cursor-auto items-center gap-1 border-b border-primary-500 p-2 text-sm">
                <PersonSvg className="h-8 w-8" />
                <p>{user.info.email}</p>
              </li>

              <li>
                <Button
                  onClick={handleLogout}
                  className={tm(
                    navItemClass,
                    "w-full justify-start rounded-none bg-transparent text-inherit",
                  )}
                >
                  <LogoutSvg className="h-8 w-8" />
                  <span>Logout</span>
                </Button>
              </li>
            </DropDownItem>
          </DropDown>
        </>
      ) : (
        <NavLink
          to="/login"
          className={tm(
            navItemClass,
            "flex items-center gap-1 rounded-none bg-primary-600 text-white",
          )}
        >
          <PersonSvg className="h-8 w-8" />
          <span>Login</span>
        </NavLink>
      )}
    </>
  );
};

export default UserMenu;
