import PersonalDetails from "../components/PersonalDetails";
import SocialLinks from "../components/SocialLinks";
import Security from "../components/Security";
const Setting = () => {
  document.title = "JustSmile | Setting";
  return (
    <div>
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
    </div>
  );
};

export default Setting;
