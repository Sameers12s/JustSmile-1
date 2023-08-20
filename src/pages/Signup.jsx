import { Link } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import Logo from "../assets/images/logo.svg";
const Login = () => {
  document.title = "JustSmile | Signup";

  return (
    <AuthLayout>
      <div className=" my-8 text-4xl font-bold text-center text-white us">
        S I G N U P
      </div>
      <form className="flex flex-col h-full">
        <input
          type="email"
          id="email"
          placeholder="username"
          className="input w-full max-w-[27rem] mt-2 rounded-lg focus:ring-blue-300 text-bold"
          required
        />
        <input
          type="password"
          id="password"
          placeholder="password"
          className="input w-full max-w-[27rem] mt-2 rounded-lg"
          required
        />
        <input
          type="password"
          id="confirmpassword"
          placeholder="confirm password"
          className="input w-full max-w-[27rem] mt-2 rounded-lg"
          required
        />

        <div className="flex w-full justify-end items-center pt-9">
          <div className="flex justify-end">
            <Link to="/login">
              <button className="btn bg-neutrals-700 w-28 text-white mx-1 hover:bg-neutrals-700">
                LOGIN
              </button>
            </Link>
            <button
              type="submit"
              value="Submit"
              className="btn bg-primary text-white mx-1 w-28 border-spacing-1 hover:bg-blue-500"
            >
              SIGN UP
            </button>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Login;
