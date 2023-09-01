import UserNames from "../UserNames";

const Followers = () => {
    document.title = "JustSmile | followers-followings - Followers";
    return <div className="flex h-auto w-full justify-center items-center rounded-lg bg-neutrals-800 p-5">
        <UserNames Name="Sameer Singh" ExtraInfo="@sameers12" />
    </div>;
};

export default Followers;

