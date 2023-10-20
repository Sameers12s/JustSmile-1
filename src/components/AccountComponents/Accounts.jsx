import { useQuery } from "react-query";
import getCurrentUserDetails from "../../api/getCurrentUserDetails";
import { useAuth } from "../../context/auth-context";
import UserNames from "../UserNames";
import FollowButton from "./FollowButton";

import {
  IconEdit,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitterFilled,
} from "@tabler/icons-react";
const Accounts = () => {
  const { currentUser } = useAuth();

  const { data: userData, isLoading: userDataLoading } = useQuery(
    ["userData", currentUser.uid],
    () => getCurrentUserDetails(currentUser.uid)
  );

  if (userData?.linkedinp) {
    const hide = true;
  }

  return (
    <div className="flex flex-col w-full min-h-48 bg-neutrals-800 rounded-lg">
      <div className="flex flex-row justify-around w-full h-18 items-center p-2">
        <div className="flex  h-full w-full">
          <UserNames Name={userData?.name} ExtraInfo={userData?.username} />
        </div>
      </div>
      <div className="flex py-2 px-4 font-bold text-neutrals-600">Bio</div>
      <div className="w-full flex-1 px-4 py-1">{userData?.bio}</div>
      <div className="flex flex-row w-full p-4 text-neutrals-600">
        <div className="flex flex-row font-bold text-sm">
          {userData?.githubp ? (
            <a
              className="flex h-full items-center pr-2 rounded-full hover:text-black"
              href={userData?.githubp}
            >
              <IconBrandGithub stroke={2} size={28} />
            </a>
          ) : null}
          {userData?.twitterp ? (
            <a
              className="flex px-2 items-center hover:text-blue-600"
              href={userData?.twitterp}
            >
              <IconBrandTwitterFilled stroke={2} size={28} />
            </a>
          ) : null}

          {userData?.linkedinp ? (
            <a
              className="flex px-2 items-center hover:text-blue-400"
              href={userData?.linkedinp}
            >
              <IconBrandLinkedin stroke={2} size={28} />
            </a>
          ) : null}
        </div>
        <div className="flex-1"></div>
        <div>
          <FollowButton>Follow</FollowButton>
        </div>
      </div>
    </div>
  );
};
export default Accounts;
