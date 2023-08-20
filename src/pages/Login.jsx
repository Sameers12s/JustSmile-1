import { Link } from "react-router-dom";
import { IconUser } from "@tabler/icons-react";
import Logo from "../assets/images/logo.svg";
const Login = () => {
  document.title = "JustSmile | Login";

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-neutrals-900 p-2">
      <div className="w-[31rem] h-[27rem] p-7 bg-neutrals-800 rounded-2xl">
        <div className="flex justify-center text-center mb-4 mt-8">
          <img className="w-20" src={Logo} alt="logo" />
        </div>
        <div className=" mb-8 mt-8 text-4xl font-bold text-center text-white us">
          L O G I N
        </div>
        <form>
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

          <div className="flex justify-between items-center mb-4">
            <a href="#" className="text-white">
              <u>Forget Password?</u>
            </a>

            <div className="flex justify-end my-5">
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
      </div>
    </div>
  );
};

export default Login;
