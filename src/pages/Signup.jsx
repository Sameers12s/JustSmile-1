import React from "react";

const Login = () => {
  document.title = "JustSmile | Login";

  return (
    <div className="flex justify-center items-center h-screen bg-slate-900">
      <div className="w-[30.8rem] h-[30rem] top-[17.5rem] left-[29.5rem] p-7 bg-slate-800 rounded-2xl">
        <div className="flex justify-center text-center mb-4 mt-8">
          <svg
            width="77.91"
            top="323"
            height="34"
            viewBox="0 0 187 85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              // fill-rule="evenodd"
              // clip-rule="evenodd"
              d="M26.6917 13.3459C26.6917 20.7166 20.7166 26.6917 13.3459 26.6917C5.97514 26.6917 0 20.7166 0 13.3459C0 5.97514 5.97514 0 13.3459 0C20.7166 0 26.6917 5.97514 26.6917 13.3459ZM186.842 13.3459C186.842 20.7166 180.867 26.6917 173.496 26.6917C166.125 26.6917 160.15 20.7166 160.15 13.3459C160.15 5.97514 166.125 0 173.496 0C180.867 0 186.842 5.97514 186.842 13.3459ZM61.3834 36.701C61.3834 32.2827 57.8017 28.701 53.3834 28.701C48.9651 28.701 45.3834 32.2827 45.3834 36.701C45.3834 63.2314 66.8906 84.7386 93.421 84.7386C119.951 84.7386 141.459 63.2314 141.459 36.701C141.459 32.2827 137.877 28.701 133.459 28.701C129.04 28.701 125.459 32.2827 125.459 36.701C125.459 54.3949 111.115 68.7386 93.421 68.7386C75.7271 68.7386 61.3834 54.3949 61.3834 36.701Z"
              fill="#C4C9D4"
            />
          </svg>
        </div>
        <h1 className="mb-8 mt-8 text-4xl font-bold text-center text-neutral-300 us">
          S I G N U P
        </h1>
        <form>
          <input
            type="email"
            id="email"
            placeholder="username"
            className="input w-full max-w-[27rem] mt-2 rounded-lg focus:ring-blue-300"
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
            id="cpassword"
            placeholder="confirm password"
            className="input w-full max-w-[27rem] mt-2 rounded-lg"
            required
          />
          <div className="flex justify-between items-center mb-4">
            <h1></h1>
            <div className="flex justify-end my-5">
              <button
                type="submit"
                value="Submit"
                className="btn bg-slate-700 w-[7rem] text-white mx-1"
              >
                LOGIN
              </button>
              <button
                type="submit"
                value="Submit"
                className="btn bg-primary-blue hover:bg-blue-700 text-white mx-1 w-[7rem] border-spacing-1"
              >
                SIGN UP
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
