import UserImg from "../assets//images/userimg.jpg";
const PersonalDetails = () => {
  return (
    <div className="flex w-full h-full font-medium">
      <div className=" flex flex-col w-full justify-between bg-neutrals-800 rounded-lg">
        <div className="flex flex-row  p-3">
          <h1 className="basis-1/4 mt-8">Profile Picture</h1>
          <div className="basis-3/4 flex flex-row">
            <div className="flex basis-3/4  max-w-[7rem] rounded-full bg-neutrals-600 text-center">
              <div className="avatar">
                <div className="max-w-[7rem] rounded-full">
                  <img src={UserImg} />
                </div>
              </div>
            </div>
            <div className="grid basis-3/4 ml-16 w-full">
              <button
                type="button"
                className="btn text-neutrals-500 bg-neutrals-700 mt-2"
              >
                UPLOAD
              </button>
              <button className="btn bg-red-500">REMOVE</button>
            </div>
          </div>
        </div>
        <div className="flex flex-row px-3">
          <h1 className="basis-1/4 pt-5">Name</h1>
          <div className="basis-3/4">
            <input
              className=" textarea bg-neutrals-900 rounded-lg px-3 w-full h-3 mt-4"
              placeholder="JustSmiles"
            ></input>
          </div>
        </div>
        <div className="flex flex-row px-3">
          <h1 className=" basis-1/4 pt-3">Bio</h1>
          <div className="basis-3/4 items-end pt-1">
            <textarea
              className="textarea bg-neutrals-900 rounded-lg w-full h-20]"
              placeholder="My profile BIO&#10;Here I put details about Myself"
            ></textarea>
          </div>
        </div>

        <div className=" flex flex-row justify-between px-3 pb-3">
          <h1 className="pt-4">Blocked Contacts</h1>
          <button
            type="button"
            className="btn w-32 text-neutrals-500 bg-neutrals-700 mt-2"
          >
            MANAGE
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
