import UserNames from "../UserNames";
import FollowButton from "./FollowButton";

import {
  IconEdit,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitterFilled,
} from "@tabler/icons-react";
const Accounts = () => {
  return (
    <div className="flex flex-col w-full min-h-48 bg-neutrals-800 rounded-lg">
      <div className="flex flex-row justify-around w-full h-18 items-center p-2">
        <div className="flex  h-full w-full">
          <UserNames />
        </div>
        <button className="flex h-full items-center pr-2 rounded-full text-neutrals-600 hover:text-neutrals-400">
          <a href="setting"><IconEdit stroke={2} size={28} /></a>
        </button>
      </div>
      <div className="flex py-2 px-4 font-bold text-neutrals-600">Bio</div>
      <div className="w-full flex-1 px-4 py-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
        natus? Qui aliquam, dolore architecto incidunt harum eos iusto eum!
        Praesentium officiis qui et natus accusamus alias similique, illum
        magnam. Illo?
      </div>
      <div className="flex flex-row w-full p-4 text-neutrals-600">
        <div className="flex flex-row font-bold text-sm">
          <button className="flex h-full items-center pr-2 rounded-full hover:text-black">
            <IconBrandGithub stroke={2} size={28} />
          </button>
          <button className="flex px-2 items-center hover:text-blue-600">
            <IconBrandTwitterFilled stroke={2} size={28} />
          </button>
          <button className="flex px-2 items-center hover:text-blue-400">
            <IconBrandLinkedin stroke={2} size={28} />
          </button>
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
