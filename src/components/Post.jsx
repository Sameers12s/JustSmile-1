import { useState } from "react";
import {
  IconHeart,
  IconHeartFilled,
  IconTrash,
  IconMessage,
  IconDotsVertical,
  IconBrandTwitterFilled,
} from "@tabler/icons-react";
import moment from "moment";
import { useAuth } from "../context/auth-context";
import { useQuery, useQueryClient } from "react-query";
import UserNames from "./UserNames";
import createPostLike from "../api/createpostLike";
import getPostlikes from "../api/getPostlikes";
import getPostLikedByUser from "../api/getPostLikedByUser";
import deletePost from "../api/deletePost";
import { useNavigate } from "react-router-dom";
import createComment from "../api/createComment";
import getComments from "../api/getComments";
import Comments from "./Comment";
import getCommentsCount from "../api/getCommentsCount";

const Post = ({ body, time, username, name, postDocId, uid }) => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [isCommented, setIsCommented] = useState(false);
  const [comment, setComment] = useState("");
  const queryClient = useQueryClient();


  const tweetNow = () => {
    let tweetPost = `https://twitter.com/intent/tweet?text=${body}`;
    window.open(tweetPost);
  }
  const { data: likes, isLoading: isLikesLoading } = useQuery(
    ["Likes", postDocId],
    () => getPostlikes(postDocId)
  );
  const { data: totalComments, isLoading: istotalCommentsLoading } = useQuery(
    ["totalComments", postDocId],
    () => getCommentsCount(postDocId)
  );
  const { data: likedByUser } = useQuery(
    ["LikedByUser", postDocId, currentUser.uid],
    () => getPostLikedByUser(postDocId, currentUser.uid)
  );

  const { data: commentsList, isLoading: commentsLoading } = useQuery(
    ["commentsList", postDocId],
    () => getComments(postDocId)
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

  const handleComment = async (event) => {
    event.preventDefault();
    await createComment(
      currentUser.uid,
      postDocId,
      comment,
      currentUser.displayName
    );
    setComment("");
    queryClient.resetQueries({ queryKey: ["totalComments", postDocId] });
    queryClient.resetQueries({
      queryKey: ["commentsList", postDocId],
    });
  };

  const handleDeletePost = async () => {
    await deletePost(postDocId);
    queryClient.resetQueries({ queryKey: ["postList", currentUser.uid] });
  };

  return (
    <div className="flex flex-col w-full min-h-48 bg-neutrals-800 rounded-lg my-4">
      <div className="flex flex-row w-full h-18 items-center p-2">
        <UserNames
          Name={name}
          ExtraInfo={"@" + username}
          postDocId={postDocId}
          link={() => navigate(`/account/${uid}`)}
          uid={uid}
        />
      </div>
      <div className="w-full flex-1 px-4 py-1 whitespace-pre-line">{body}</div>
      <div className="flex flex-row w-full p-4 text-neutrals-600">
        <div className="flex flex-row font-bold text-sm">
          <button
            className={`flex h-full pr-2 items-center  hover:text-neutrals-400 ${likedByUser ? "text-red-600 hover:text-red-800" : ""
              }`}
            onClick={handleLikeClick}
          >
            {likedByUser ? <IconHeartFilled /> : <IconHeart />}
            {isLikesLoading ? "0" : likes}
          </button>
          <button
            className={`flex px-2 items-center  hover:text-neutrals-400 ${isCommented ? "text-blue-600 hover:text-blue-800" : ""
              }`}
            onClick={handleCommentClick}
          >
            <IconMessage />
            {totalComments}
          </button>
          {currentUser.uid == uid ? (
            <button
              className="flex px-2 items-center hover:text-neutrals-400"
              onClick={handleDeletePost}
            >
              <IconTrash />
            </button>
          ) : null}
          {currentUser.uid == uid ? (
            <button
              className="flex px-2 items-center hover:text-neutrals-400"
              onClick={tweetNow}
            >
              < IconBrandTwitterFilled />
            </button>
          ) : null}



        </div>
        <div className="flex-1"></div>
        <div>{moment(parseInt(time)).fromNow()}</div>
      </div>
      {isCommented ? (
        <div className=" border-t-2 border-t-neutrals-700">
          {commentsList?.map((c) => (
            <Comments
              key={c.id}
              uid={c.uid}
              name={c.name}
              content={c.content}
              postDocId={postDocId}
              id={c.id}
              time={c.created_at}
            />
          ))}

          <form className="flex p-3 pl-10" onSubmit={handleComment}>
            <textarea
              type="text"
              placeholder="Type here"
              className=" w-full h-10 bg-transparent border-b-4 border-b-neutrals-700 focus:outline-none"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
            <button
              className="btn btn-sm h-10 btn-primary join-item"
              type="submit"
              value="submit"
            >
              Post
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default Post;
