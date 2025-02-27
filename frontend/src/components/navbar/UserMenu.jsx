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
              className="navItem hover:bg-primary-700 bg-transparent text-inherit shadow-none"
              onClick={handleMenuShow}
            >
              <PersonSvg className="h-10 w-10" />
            </Button>
            <DropDownItem
              className="from-primary-800 to-primary-900 bg-linear-to-b text-left shadow-lg"
              state={menuShow}
            >
              <li className="border-primary-500 flex cursor-auto items-center gap-1 border-b p-2 text-sm">
                <PersonSvg className="h-8 w-8" />
                <p>{user.info.email}</p>
              </li>

              <li>
                <Button
                  onClick={handleLogout}
                  className="navItem hover:bg-primary-700 w-full justify-start bg-transparent text-inherit shadow-none"
                >
                  <LogoutSvg className="h-8 w-8" />
                  <span>Logout</span>
                </Button>
              </li>
            </DropDownItem>
          </DropDown>
        </>
      ) : (
        <NavLink to="/login" className="navItem text-primary-100 flex items-center gap-1">
          <PersonSvg className="h-8 w-8" />
          <span>Login</span>
        </NavLink>
      )}
    </>
  );
};

export default UserMenu;
