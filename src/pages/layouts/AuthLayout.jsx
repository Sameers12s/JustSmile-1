import { Outlet, useFetcher } from "react-router-dom";
import { Link } from "react-router-dom";
import { IconUser } from "@tabler/icons-react";
import Logo from "../../assets/images/logo.svg";
const AuthLayout = ({ children }) => {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-neutrals-900 p-2">
      <div className="w-[31rem] min-h-[27rem] p-7 bg-neutrals-800 rounded-2xl">
        <div className="flex justify-center text-center my-5">
          <img className="w-20" src={Logo} alt="logo" />
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
