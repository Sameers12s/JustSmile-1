import AppTheme from "../components/SettingsComponents/AppTheme";
import PersonalDetails from "../components/SettingsComponents/PersonalDetails";
import SocialLinks from "../components/SettingsComponents/SocialLinks";
import Security from "../components/SettingsComponents/Security";
import DangerZone from "../components/SettingsComponents/DangerZone";
const Setting = () => {
  document.title = "JustSmile | Setting";
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
          <PersonalDetails />
        </div>
        <div className="pb-5">
          <div className="py-4 font-bold text-neutrals-600">SOCIAL LINKS</div>
          <SocialLinks />
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
