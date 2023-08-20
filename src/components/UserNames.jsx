import UserImg from "../assets//images/userimg.jpg";
const UserNames = () => {
  return (
    <button className="flex flex-row w-full">
      <div className="avatar">
        <div className="w-12 rounded-full hover:bg-slate-200">
          <img src={UserImg} alt="userimg" />
        </div>
      </div>
      <div className="px-2">
        <div className="font-bold hover:underline">Username</div>
        <div className="text-neutrals-600">@username</div>
      </div>
      <div className="flex-1"></div>
    </button>
  );
};
export default UserNames;
