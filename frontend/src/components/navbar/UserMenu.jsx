import DropDown from "../UI/DropDown";
import DropDownItem from "../UI/DropDownItem";
import { LogoutSvg, PersonSvg } from "../svgs/NavSvgs";
import { NavLink, useSubmit } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import Button from "../UI/Button";

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
              className="bg-none text-inherit shadow-none hover:bg-primary-800"
              onClick={handleMenuShow}
            >
              <PersonSvg className="h-10 w-10" />
            </Button>
            <DropDownItem
              className=" bg-gradient-to-b from-primary-700 to-primary-800 text-left shadow-lg"
              state={menuShow}
            >
              <li className="flex cursor-auto items-center gap-1 border-b border-primary-500 p-2 text-sm">
                <PersonSvg className="h-8 w-8" />
                <p>{user.info.email}</p>
              </li>

              <li>
                <Button
                  onClick={handleLogout}
                  className="navItem w-full justify-start bg-none text-inherit
                   shadow-none hover:bg-primary-600"
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
          className="navItem flex items-center gap-1 rounded-none
           bg-gradient-to-b from-primary-600 to-primary-800 text-primary-100"
        >
          <PersonSvg className="h-8 w-8" />
          <span>Login</span>
        </NavLink>
      )}
    </>
  );
};

export default UserMenu;
