import AppTheme from "../components/SettingsComponents/AppTheme";
import PersonalDetails from "../components/SettingsComponents/PersonalDetails";
import SocialLinks from "../components/SettingsComponents/SocialLinks";
import Security from "../components/SettingsComponents/Security";
import DangerZone from "../components/SettingsComponents/DangerZone";
import { useAuth } from "../context/auth-context";
import { useQuery } from "react-query";
import getCurrentUserDetails from "../api/getCurrentUserDetails";
const Setting = () => {
  document.title = "JustSmile | Setting";

  const { currentUser } = useAuth();

  const { data: userData, isLoading: userDataLoading } = useQuery(
    ["userData", currentUser.uid],
    () => getCurrentUserDetails(currentUser.uid)
  );

  if (userDataLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className=" max-w-[41rem]">
      <div className="flex flex-col">
        <div className="pb-5">
          <div className="py-4 font-bold text-neutrals-600">APP THEME</div>
          <AppTheme />
        </div>
        <div className="pb-5">
          <div className="py-4 font-bold text-neutrals-600">
            PERSONAL DETAILS
          </div>
          <PersonalDetails
            name={userData?.name}
            username={userData?.username}
            bio={userData?.bio}
          />
        </div>
        <div className="pb-5">
          <div className="py-4 font-bold text-neutrals-600">SOCIAL LINKS</div>
          <SocialLinks
            githubp={userData?.githubp}
            twitterp={userData?.twitterp}
            linkedinp={userData?.linkedinp}
          />
        </div>
        <div className="pb-5">
          <div className="py-4 font-bold text-neutrals-600">SECURITY</div>
          <Security />
        </div>
        <div className="pb-5">
          <div className="py-4 font-bold text-neutrals-600">DANGER ZONE</div>
          <DangerZone />
        </div>
      </div>
    </div>
  );
};

export default Setting;
