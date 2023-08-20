import PersonalDetails from "../components/PersonalDetails";
import SocialLinks from "../components/SocialLinks";
import Security from "../components/Security";
import DangerZone from "../components/DangerZone";
import AppTheme from "../components/AppTheme";
const Setting = () => {
  document.title = "JustSmile | Setting";
  return (
    <div className="flex flex-col">
      <div>
        <div className="py-4 font-bold text-neutrals-600">APP THEME</div>
        <AppTheme />
      </div>
      <div>
        <div className="py-4 font-bold text-neutrals-600">PERSONAL DETAILS</div>
        <PersonalDetails />
      </div>
      <div>
        <div className="py-4 font-bold text-neutrals-600">SOCIAL LINKS</div>
        <SocialLinks />
      </div>
      <div>
        <div className="py-4 font-bold text-neutrals-600">SECURITY</div>
        <Security />
      </div>
      <div>
        <div className="py-4 font-bold text-neutrals-600">DANGER ZONE</div>
        <DangerZone />
      </div>
    </div>
  );
};

export default Setting;
