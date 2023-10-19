import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import { IconUser, IconLock, IconEye, IconAt } from "@tabler/icons-react";
import { useAuth } from "../context/auth-context";

const SignUpPage = () => {
  document.title = "JustSmile | Signup";
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { currentUser, signup } = useAuth();

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      await signup(name, username, email, password, confirmPassword);
    } catch (error) {
      console.error("Error during signup", error);
    }
  };

  if (currentUser !== null) {
    return <Navigate to={"/home"} />;
  }

  return (
    <AuthLayout>
      <div className=" my-8 text-4xl font-bold text-center text-white us tracking-[.5rem]">
        SIGNUP
      </div>
      <form
        className="flex flex-col h-full space-y-2 text-neutrals-600"
        onSubmit={handleSignup}
      >
        <div className="join items-center justify-center pl-2 bg-neutrals-900 ">
          <div className="join-item ">
            <IconUser />
          </div>
          <input
            type="text"
            id="Name"
            placeholder="Full Name"
            className="input w-full  rounded-lg text-bold pl-2 focus:outline-none"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="join items-center justify-center pl-2 bg-neutrals-900 ">
          <div className="join-item ">
            <IconUser />
          </div>
          <input
            type="text"
            id="Username"
            placeholder="User Name"
            className="input w-full  rounded-lg text-bold pl-2 focus:outline-none"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="join items-center justify-center pl-2 bg-neutrals-900 ">
          <div className="join-item ">
            <IconAt />
          </div>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="input w-full  rounded-lg text-bold pl-2 focus:outline-none"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="join items-center justify-center pl-2 bg-neutrals-900 ">
          <div className="join-item">
            <IconLock />
          </div>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="input w-full rounded-lg text-bold pl-2 focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="join items-center justify-center pl-2 bg-neutrals-900 ">
          <div className="join-item">
            <IconLock />
          </div>
          <input
            type="password"
            id="ConfirmPassword"
            placeholder="Confirm Password"
            className="input w-full rounded-lg text-bold pl-2 focus:outline-none"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <div className="flex w-full justify-end items-center pt-9">
          <div className="flex justify-end">
            <Link to="/login">
              <button className="btn bg-neutrals-700 w-28 text-white mx-1 hover:bg-neutrals-700">
                LOGIN
              </button>
            </Link>
            <button
              className="btn bg-primary text-white mx-1 w-28 border-spacing-1 hover:bg-blue-500"
              type="submit"
              value="submit"
            >
              SIGN UP
            </button>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
};

export default SignUpPage;
