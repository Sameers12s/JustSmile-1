import UserImg from "../assets/images/userimg.jpg";

const Notifiy = () => {
    return (
        <div className="flex justify-center items-center h-full w-full pt-6">
            <div className="flex flex-row justify-center items-center bg-neutrals-800 h-full w-full rounded-lg p-4">
                <button className="flex basis-1/6 w-full h-full ">
                    <div className="avatar">
                        <div className="w-10 rounded-full hover:bg-slate-200">
                            <img src={UserImg} alt="userimg" />
                        </div>
                    </div>
                    <div className="px-2">
                        <div className="font-bold hover:underline">Username</div>
                    </div>
                </button>
                <div className="flex justify-start w-full h-full text-start items-start basis-5/6 px-3 ">
                    <div className="font-normal">
                        Liked your post: <span className="hover:underline">"Another Happy Day"</span>
                    </div>
                </div>
                <div className="basis-1/6 flex flex-col ">
                    <div className="indicator">
                        <div className="badge badge-xs badge-primary indicator-item"></div>
                        <div className=" text-gray-500 text-xs grid w-full h-full bg-nautrals-900 items-end pt-7">
                            3 Days Ago
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Notifiy;