const SocialLinks = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col h-auto w-full justify-between bg-neutrals-800 rounded-lg">
        <div className="flex flex-row px-3 pt-4">
          <h1 className=" basis-1/4 mt-3 mr-4">Github Profile</h1>
          <div className="basis-3/4">
            <input
              className=" textarea bg-neutrals-900 rounded-lg w-full h-3"
              placeholder="github.com/JustSmile"
            ></input>
          </div>
        </div>
        <div className="flex flex-row px-3 pt-2">
          <h1 className="basis-1/4 mt-3 mr-4">Twitter Profile</h1>
          <div className="basis-3/4">
            <input
              className=" textarea bg-neutrals-900 rounded-lg w-full h-3"
              placeholder="@JustSmile"
            ></input>
          </div>
        </div>
        <div className="flex flex-row px-3 pb-4 pt-2">
          <h1 className="basis-1/4 mt-3 mr-4">Linkedin Profile</h1>
          <div className="basis-3/4">
            <input
              className=" textarea bg-neutrals-900 rounded-lg w-full h-3"
              placeholder="linkedIn.com/JustSmile"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SocialLinks;
