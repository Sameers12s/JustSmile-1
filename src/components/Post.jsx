import UserNames from "./UserNames";
import {
  IconDotsVertical,
  IconHeart,
  IconShare,
  IconMessage,
} from "@tabler/icons-react";
const Post = () => {
  return (
    <div className="flex flex-col w-full min-h-48 bg-neutrals-800 rounded-lg">
      <div className="flex flex-row w-full h-18 items-center p-2">
        <UserNames MoreOptionNeed={true} />
      </div>
      <div className="w-full flex-1 px-4 py-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
        natus? Qui aliquam, dolore architecto incidunt harum eos iusto eum!
        Praesentium officiis qui et natus accusamus alias similique, illum
        magnam. Illo?
      </div>
      <div className="flex flex-row w-full p-4 text-neutrals-600">
        <div className="flex flex-row font-bold text-sm">
          <button className="flex h-full pr-2 items-center">
            <IconHeart /> 100
          </button>
          <button className="flex px-2 items-center">
            <IconMessage />
            100
          </button>
          <button className="flex px-2 items-center">
            <IconShare />
          </button>
        </div>
        <div className="flex-1"></div>
        <div>time</div>
      </div>
    </div>
  );
};

export default Post;
