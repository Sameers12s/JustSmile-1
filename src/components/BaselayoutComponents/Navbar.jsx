import Avatar from "../../assets/images/user-default-96x96.png";
import Logo from "../../assets/images/logo.svg";
import { IconSearch, IconBell } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  return (
    <nav className="navbar bg-secondary text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-wide btn-ghost hover:bg-secondary justify-start"
          >
            <a className="lg:hidden" href="/home">
              <img className="w-14 h-10" src={Logo} alt="logo" />
            </a>
            <a className="text-xl hidden lg:block" href="/home">
              JUST SMILES.
            </a>
          </label>
        </div>
      </div>
      <div className="navbar-center hidden lg:block">
        <img className="w-14 h-10" src={Logo} alt="logo" />
      </div>
      <div className="navbar-end">
        <Link to="search">
          <button className="btn btn-ghost btn-circle">
            <IconSearch />
          </button>
        </Link>
        <Link to="notifications">
          <button className="btn btn-ghost btn-circle">
            <div className="indicator w-5">
              <IconBell />
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </Link>
      </div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={Avatar} />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a className="justify-between" href={`account/${currentUser.uid}`}>
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a href="/setting">Settings</a>
          </li>
          <li>
            <a onClick={logout} href={"/login"}>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
