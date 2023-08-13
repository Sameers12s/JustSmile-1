import Logo from "../assets/images/logo.svg";
const Login = () => {
  document.title = "JustSmile | Login";

  return (
    <div className="flex justify-center items-center h-screen bg-slate-900">
      <div className="w-[30.8rem] h-[30rem] top-[17.5rem] left-[29.5rem] p-7 bg-slate-800 rounded-2xl">
        <div className="flex justify-center text-center mb-4 mt-8">
        <img className="w-20" src={Logo} alt="logo" />
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
