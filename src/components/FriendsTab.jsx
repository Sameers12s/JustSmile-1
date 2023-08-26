import UserNames from "./UserNames";
import { IconSearch } from "@tabler/icons-react";
const FriendsTab = (props) => {
  return (
    <div className="join-item flex flex-col w-72 h-full rounded-lg bg-neutrals-800">
      <div className="w-full h-16 font-bold text-neutrals-600 text-center text-lg py-4">
        {props.title}
      </div>
      <div className="flex flex-row w-full h-18 items-center p-4 border-t-4 border-t-neutrals-900 rounded-none">
        {props.InputNeed ? (
          <div className="join w-full items-center justify-center pl-2 bg-neutrals-900">
            <div className="join-item ">
              <IconSearch />
            </div>
            <input
              type="text"
              id="search"
              placeholder="Search."
              className="input w-full  rounded-lg text-bold pl-2 focus:outline-none"
              required
            />
          </div>
        ) : null}
      </div>
      <div className="flex-1 px-4">
        <UserNames />
      </div>
      <div className="flex justify-center p-4">
        <button className="btn w-full bg-neutrals-700">
          {props.ButtonName}
        </button>
      </div>
    </div>
  );
};
export default FriendsTab;

FriendsTab.defaultProps = {
  title: "Title Name",
  InputNeed: false,
  ButtonName: "Button Name",
};
