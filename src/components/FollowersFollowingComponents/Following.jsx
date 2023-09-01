import UserNames from "../UserNames";
const Following = () => {
    document.title = "JustSmile | followers-followings- Following";
    return <div className="flex h-auto w-full justify-center items-center rounded-lg bg-neutrals-800 p-5">
        <UserNames Name="Ayush Kumar" ExtraInfo="@ayushk01" />
    </div>;
};

export default Following;
