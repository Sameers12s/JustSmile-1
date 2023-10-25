import { useContext, useEffect, useState } from "react";
import UserNames from "./UserNames";
import { IconSearch } from "@tabler/icons-react";
import { useAuth } from "../context/auth-context";
import { useQuery } from "react-query";
import { getAllFollowing } from "../api/getAllFollowing";
import getFollowingByUID from "../api/getFollowingByUID";
import {
  doc,
  getDoc,
  onSnapshot,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { firestore } from "../services/firebase";
import { ChatContext } from "../context/ChatContext";

function searchText(text, target) {
  return text.toLowerCase().includes(target.toLowerCase());
}

const FriendsTab = (props) => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useAuth();
  const { dispatch } = useContext(ChatContext);
  const [searchFriends, setSearchFriends] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  const { data: following, isLoading: followingLoading } = useQuery(
    ["following", currentUser?.uid],
    () => getFollowingByUID(currentUser.uid)
  );

  const { data: userdeails } = useQuery(
    ["following-user-detail", currentUser?.uid],
    () => getAllFollowing(following, currentUser.uid),
    {
      enabled: !followingLoading,
    }
  );

  useEffect(() => {
    if (!userdeails) return;
    const filteredUsers = userdeails.filter(
      (u) =>
        searchText(u.name, searchFriends) ||
        searchText(u.username, searchFriends)
    );
    setFilteredList(filteredUsers);
  }, [searchFriends, userdeails]);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(
        doc(firestore, "userChats", currentUser.uid),
        (doc) => {
          setChats(doc.data());
        }
      );

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser?.uid]);

  const handleSelect = async (following_uid, name) => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      currentUser.uid > following_uid
        ? currentUser.uid + following_uid
        : following_uid + currentUser.uid;
    try {
      const res = await getDoc(doc(firestore, "chats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(firestore, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(firestore, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: following_uid,
            displayName: name,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
        await updateDoc(doc(firestore, "userChats", following_uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
      setSearchFriends("");
    } catch (err) {}
  };

  const handleSelect1 = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div className="join-item flex flex-col w-72 h-full rounded-lg bg-neutrals-800 ">
      <div className="w-full h-16 font-bold text-neutrals-600 text-center text-lg py-4">
        {props.title}
      </div>
      <div className="flex flex-col w-full h-18 items-center p-4 border-t-4 border-t-neutrals-900 rounded-none">
        {props.InputNeed ? (
          <div className="join w-full items-center justify-center pl-2 bg-neutrals-900">
            <div className="join-item ">
              <IconSearch />
            </div>
            <input
              type="text"
              id="search"
              placeholder="Search."
              className="input w-full  rounded-lg text-bold pl-2 focus:outline-none"
              required
              value={searchFriends}
              onChange={(e) => setSearchFriends(e.target.value)}
            />
          </div>
        ) : null}
      </div>
      {searchFriends ? (
        <div className=" border-neutrals-900 border-b-4 rounded-none shadow-lg">
          {filteredList?.map((p) => (
            <div className="px-4 py-2" key={p.following_uid}>
              <UserNames
                Name={p.name}
                ExtraInfo={p.username}
                uid={p.following_uid}
                link={() => handleSelect(p.following_uid, p.name)}
              />
            </div>
          ))}
        </div>
      ) : null}

      {chats &&
        Object.entries(chats)
          .sort((a, b) => b[1].date - a[1].date)
          .map((chat) => (
            <div className="px-4 py-2 " key={chat[0]}>
              <UserNames
                Name={chat[1].userInfo?.displayName}
                ExtraInfo={chat[1].lastMessage?.text}
                link={() => handleSelect1(chat[1].userInfo)}
                uid={chat[1].userInfo?.uid}
                IndicatorNeed={true}
              />
            </div>
          ))}

      <div className="flex-1"></div>
      <div className="flex justify-center p-4">
        <button className="btn w-full bg-neutrals-700" onClick={props.link}>
          {props.ButtonName}
        </button>
      </div>
    </div>
  );
};
export default FriendsTab;

FriendsTab.defaultProps = {
  title: "Title Name",
  InputNeed: false,
  ButtonName: "Button Name",
};
