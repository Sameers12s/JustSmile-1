import UserNames from "../UserNames";
const Notifiy = () => {
  return (
    <div className="flex flex-row justify-center items-center bg-neutrals-800 h-20 w-full rounded-lg p-4">
      <UserNames ExtraInfo={null} />
      <div className="flex w-full h-full text-start items-center ">
        <div className="font-normal">
          Liked your post:{" "}
          <span className="hover:underline">"Another Happy Day"</span>
        </div>
      </div>
      <div className="flex flex-col h-full w-32">
        <div className="flex h-full w-full indicator">
          <div className="badge badge-xs badge-primary indicator-item indicator-middle indicator-end mr-2"></div>
        </div>
        <div className=" text-gray-500 text-xs grid w-full h-full bg-nautrals-900 items-end text-right">
          3 Days Ago
        </div>
      </div>
    </div>
  );
};

export default Notifiy;
