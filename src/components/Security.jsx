const Security = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col h-auto w-full justify-between bg-neutrals-800 rounded-lg">
        <div className="flex flex-row px-3 pt-4 pb-2">
          <h1 className=" basis-1/4 mr-4 mt-2">Change Email</h1>
          <div className="basis-3/4">
            <input
              id="email"
              className=" textarea bg-neutrals-900 rounded-lg w-full h-3"
              placeholder="new email"
            ></input>
          </div>
        </div>
        <div className="flex flex-row px-3 pb-4">
          <h1 className="basis-1/4 mt-4 mr-4">Change Password</h1>
          <div className="basis-3/4">
            <button
              type="button"
              className="btn w-full text-neutrals-500 bg-neutrals-700 mt-2"
            >
              SEND PASSWORD RESET LINK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Security;
