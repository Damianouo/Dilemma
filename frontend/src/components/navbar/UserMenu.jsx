import DropDown from "../UI/DropDown";
import DropDownItem from "../UI/DropDownItem";
import LogoutSvg from "../svgs/Navbar/LogoutSvg";
import PersonSvg from "../svgs/Navbar/PersonSvg";
import { Link, NavLink, useSubmit } from "react-router-dom";
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
          <DropDown onClick={handleMenuShow} className="justify-end">
            <Button className="navItem hover:bg-primary-700 bg-transparent text-inherit shadow-none">
              <PersonSvg className="size-8" />
            </Button>
            <DropDownItem
              className="from-primary-800 divide-primary-500 to-primary-900 divide-y bg-linear-to-b text-left shadow-lg"
              state={menuShow}
            >
              <li>
                <Link
                  to={`/user/${user.info._id}`}
                  className="navItem text-primary-200 flex items-center gap-1 rounded-md text-sm"
                >
                  <PersonSvg className="size-8" />
                  <p>{user.info.email}</p>
                </Link>
              </li>

              <li>
                <Button
                  onClick={handleLogout}
                  className="navItem hover:bg-primary-700 ml-1 w-full justify-start gap-2 bg-transparent text-inherit shadow-none"
                >
                  <LogoutSvg className="" />
                  <span>Logout</span>
                </Button>
              </li>
            </DropDownItem>
          </DropDown>
        </>
      ) : (
        <NavLink to="/login" className="navItem text-primary-100 flex items-center gap-1">
          <PersonSvg className="size-8" />
          <span>Login</span>
        </NavLink>
      )}
    </>
  );
};

export default UserMenu;
