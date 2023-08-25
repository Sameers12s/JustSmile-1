import MessageFriendTab from "../components/MessageFriendsTab";
import ChartArea from "../components/ChartArea";
const Messenger = () => {
  document.title = "JustSmile | Messenger";
  return (
    <div className="join flex flex-row h-full pb-4">
      <MessageFriendTab />
      <ChartArea />
    </div>
  );
};

export default Messenger;
