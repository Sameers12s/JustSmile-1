import { Link } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import { IconUser } from "@tabler/icons-react";
const Login = () => {
  document.title = "JustSmile | Login";

  return (
    <AuthLayout>
      <div className=" my-8 text-4xl font-bold text-center text-white us">
        L O G I N
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

        <div className="flex w-full justify-between items-center pt-9">
          <a href="#" className="text-white">
            <u>Forget Password?</u>
          </a>

          <div className="flex justify-end">
            <Link to="/signup">
              <button className="btn bg-neutrals-700 w-28 text-white mx-1 hover:bg-neutrals-700">
                SIGN UP
              </button>
            </Link>
            <button
              type="submit"
              value="Submit"
              className="btn bg-primary text-white mx-1 w-28 border-spacing-1 hover:bg-blue-500"
            >
              LOGIN
            </button>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Login;
