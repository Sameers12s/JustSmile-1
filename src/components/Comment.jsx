import { IconDotsVertical, IconTrash } from "@tabler/icons-react";
import Avatar from "./Avatar";
import deleteComment from "../api/deleteComment";
import { useQueryClient } from "react-query";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const Comments = ({ uid, name, content, postDocId, id, time }) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const handleDeleteComment = () => {
    deleteComment(postDocId, id);
    queryClient.resetQueries({ queryKey: ["totalComments", postDocId] });
    queryClient.resetQueries({ queryKey: ["commentsList", postDocId] });
  };

  return (
    <div className="pb-4">
      <div className="flex h-full w-full p-1">
        <button className="flex" onClick={() => navigate(`/account/${uid}`)}>
          <div className="avatar px-1">
            <div className={`w-7 h-7 rounded-full hover:bg-slate-200`}>
              <Avatar uid={uid} />
            </div>
          </div>
        </button>
        <div className="flex items-start pt-1">
          <p>
            <button
              className=" text-white pr-1 rounded hover:underline font-bold"
              onClick={() => navigate(`/account/${uid}`)}
            >
              {name}
            </button>
            {content}
          </p>
        </div>
        <div className="flex-1"></div>
        <button
          className="flex flex-row items-center text-neutrals-600"
          onClick={handleDeleteComment}
        >
          <IconTrash />
        </button>
      </div>
      <div className="flex justify-end px-1 text-neutrals-600">
        {moment(parseInt(time)).fromNow()}
      </div>
    </div>
  );
};

export default Comments;
