import React, { useState } from "react";
import {
  IconHeart,
  IconHeartFilled,
  IconTrash,
  IconMessage,
} from "@tabler/icons-react";
import moment from "moment";
import { useAuth } from "../context/auth-context";
import { useQuery, useQueryClient } from "react-query";
import UserNames from "./UserNames";
import createPostLike from "../api/createpostLike";
import getPostlikes from "../api/getPostlikes";
import getPostLikedByUser from "../api/getPostLikedByUser";
import deletePost from "../api/deletePost";

const Post = ({
  body,
  time,
  username,
  name,
  total_comments,
  postDocId,
  uid,
}) => {
  const { currentUser } = useAuth();
  const [isCommented, setIsCommented] = useState(false);
  const queryClient = useQueryClient();

  const { data: likes, isLoading: isLikesLoading } = useQuery(
    ["Likes", postDocId],
    () => getPostlikes(postDocId)
  );
  const { data: likedByUser } = useQuery(
    ["LikedByUser", postDocId, currentUser.uid],
    () => getPostLikedByUser(postDocId, currentUser.uid)
  );

  const handleLikeClick = async () => {
    await createPostLike(currentUser.uid, postDocId);
    queryClient.resetQueries({ queryKey: ["Likes", postDocId] });
    queryClient.resetQueries({
      queryKey: ["LikedByUser", postDocId, currentUser.uid],
    });
  };

  const handleCommentClick = () => {
    setIsCommented(!isCommented);
  };

  const handleDelete = () => {
    deletePost(postDocId);
    queryClient.resetQueries({ queryKey: ["postList", currentUser.uid] });
  };

  return (
    <div className="flex flex-col w-full min-h-48 bg-neutrals-800 rounded-lg my-4">
      <div className="flex flex-row w-full h-18 items-center p-2">
        <UserNames Name={name} ExtraInfo={username} postDocId={postDocId} />
      </div>
      <div className="w-full flex-1 px-4 py-1 whitespace-pre-line">{body}</div>
      <div className="flex flex-row w-full p-4 text-neutrals-600">
        <div className="flex flex-row font-bold text-sm">
          <button
            className={`flex h-full pr-2 items-center  hover:text-neutrals-400 ${
              likedByUser ? "text-red-600 hover:text-red-800" : ""
            }`}
            onClick={handleLikeClick}
          >
            {likedByUser ? <IconHeartFilled /> : <IconHeart />}
            {isLikesLoading ? "0" : likes}
          </button>
          <button
            className={`flex px-2 items-center  hover:text-neutrals-400 ${
              isCommented ? "text-blue-600 hover:text-blue-800" : ""
            }`}
            onClick={handleCommentClick}
          >
            <IconMessage />
            {total_comments}
          </button>
          {currentUser.uid == uid ? (
            <button
              className="flex px-2 items-center hover:text-neutrals-400"
              onClick={handleDelete}
            >
              <IconTrash />
            </button>
          ) : null}
        </div>
        <div className="flex-1"></div>
        <div>{moment(parseInt(time)).fromNow()}</div>
      </div>
    </div>
  );
};

export default Post;
