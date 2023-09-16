import Accounts from "../components/AccountComponents/Accounts";
import Notification from "./Notification";


const Tests = () => {
  document.title = "JustSmile | Test Area";
  return (
    <div>
      <Accounts />
      <Notification />
    </div>
  );
};

export default Tests;
