import UserNames from "./UserNames";
const FriendsTab = () => {
  return (
    <div className="flex flex-col w-full h-full rounded-lg bg-neutrals-800">
      <div className="w-full h-16 font-bold text-neutrals-600 text-center text-lg py-4 border-b-neutrals-900 mb-2">
        FRIENDS
      </div>
      <div className="flex flex-row w-full h-18 items-center">
        <UserNames />
        <div className="flex indicator p-4">
          <span className="indicator-item indicator-middle indicator-center badge badge-secondary h-1 bg-brand-green p-1"></span>
        </div>
      </div>
      <div className="flex-1"></div>
      <div className="flex justify-center p-4">
        <button className="btn w-full bg-neutrals-700">FIND FRIENDS</button>
      </div>
    </div>
  );
};
export default FriendsTab;
