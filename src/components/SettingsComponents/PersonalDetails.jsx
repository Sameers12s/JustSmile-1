import { useState } from "react";
import UserImg from "../../assets/images/userimg.jpg";
import { useAuth } from "../../context/auth-context";
import updatePersonalDetails from "../../api/updatePersonalDetails";

const PersonalDetails = (props) => {
  const [name, setName] = useState(props.name);
  const [username, setUsername] = useState(props.username);
  const [bio, setBio] = useState(props.bio);
  const { currentUser } = useAuth();

  const handleUpdatePersonalDetails = (event) => {
    event.preventDefault();
    updatePersonalDetails(currentUser.uid, name, username, bio);
  };

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
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="flex flex-row px-3 pt-1">
          <h1 className="basis-1/4 pt-5">User Name</h1>
          <div className="basis-3/4">
            <input
              className=" textarea bg-neutrals-900 rounded-lg px-3 w-full h-3"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="flex flex-row px-3 pb-3">
          <h1 className=" basis-1/4 pt-3">Bio</h1>
          <div className="basis-3/4 items-end pt-1">
            <textarea
              className="textarea bg-neutrals-900 rounded-lg w-full h-20]"
              placeholder="Enter Your Bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="flex w-full justify-end">
          <button
            type="button"
            className="btn text-neutrals-500 bg-neutrals-700 mb-3 mr-3 w-28 "
            onClick={handleUpdatePersonalDetails}
          >
            UPDATE
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
