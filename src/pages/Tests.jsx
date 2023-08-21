import ProfilePictureCrop from "../components/ProfilePictureCrop";
import Accounts from "../components/Accounts";
import Notification from "../components/Notifiy"







const Tests = () => {
  document.title = "JustSmile | Test Area";
  return (
    <div>
      <ProfilePictureCrop />
      <Accounts />
      <Notification />
    </div>
  );
};

export default Tests;
