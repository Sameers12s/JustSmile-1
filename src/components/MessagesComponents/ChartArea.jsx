import { IconCircleArrowRight } from "@tabler/icons-react";
import UserNames from "../UserNames";
import {
  Timestamp,
  arrayUnion,
  doc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useContext, useEffect, useRef, useState } from "react";
import { ChatContext } from "../../context/ChatContext";
import { firestore } from "../../services/firebase";
import { useAuth } from "../../context/auth-context";
import { v4 as uuid } from "uuid";
const ChartArea = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);
  const [text, setText] = useState("");
  const { currentUser } = useAuth();
  const ref = useRef();

  useEffect(() => {
    const unSub = onSnapshot(doc(firestore, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  const handleSend = async (e) => {
    e.preventDefault();

    await updateDoc(doc(firestore, "chats", data.chatId), {
      messages: arrayUnion({
        id: uuid(),
        text,
        senderId: currentUser.uid,
        date: Timestamp.now(),
      }),
    });

    await updateDoc(doc(firestore, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(firestore, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
  };

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="join-item flex flex-col flex-1 h-full rounded-lg bg-neutrals-800">
      <div className="w-full h-16 text-center ">
        <div className="flex flex-1 h-full items-center px-3">
          <UserNames
            Name={data.user.displayName}
            uid={data.user.uid}
            IndicatorNeed={true}
            MoreOptionNeed={true}
          />
        </div>
      </div>

      <div className="flex flex-col flex-1 bg-neutrals-950 rounded-none min-h-0 ">
        <div className="flex-1 flex-col overflow-y-auto p-2">
          {messages.map((m) => (
            <div
              className={`chat ${
                m.senderId === currentUser.uid ? "chat-end" : "chat-start"
              }`}
              key={m.id}
            >
              <div
                className={`chat-bubble ${
                  m.senderId === currentUser.uid
                    ? "chat-bubble-primary"
                    : "chat-bubble bg-neutrals-800"
                }`}
              >
                {m.text}
              </div>
              <div className="chat-footer opacity-50">Seen at 12:46</div>
            </div>
          ))}
        </div>
        <div className="p-4 pt-1">
          <div className=" flex-shrink-0">
            <form
              className="join items-center justify-center bg-neutrals-900 w-full"
              onSubmit={handleSend}
            >
              <input
                id="text"
                placeholder="Type Something"
                className="h-16 input w-full rounded-lg text-bold pl-2 focus:outline-none"
                onChange={(e) => setText(e.target.value)}
                value={text}
                required
              />
              <button className="join-item pr-2 rounded-full " type="submit">
                <IconCircleArrowRight />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChartArea;
