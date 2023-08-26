import FriendTab from "../components/FriendsTab";
import ChartArea from "../components/ChartArea";
const Messenger = () => {
  document.title = "JustSmile | Messenger";
  return (
    <div className="join flex flex-row h-full pb-4">
      <FriendTab title="MESSAGES" InputNeed={true} ButtonName="NEW MESSAGE" />
      <ChartArea />
    </div>
  );
};

export default Messenger;
