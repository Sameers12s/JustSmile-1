import Post from "../components/Post";
import { useAuth } from "../context/auth-context";
import { useQuery } from "react-query";
import getAllPostByUIDList from "../api/getAllPostByUIDList";
import getFollowingByUID from "../api/getFollowingByUID";
import { Navigate } from "react-router-dom";

const Home = () => {
  document.title = "JustSmile | Home";

  const { currentUser } = useAuth();
  if (currentUser == null) {
    return <Navigate to={"/login"} />;
  }
  const { data: followers, isLoading: followersLoading } = useQuery(
    ["followers", currentUser.uid],
    () => getFollowingByUID(currentUser.uid)
  );

  const {
    data: allposts,
    isLoading: postsLoading,
    isError: postsIsError,
    error: postsError,
  } = useQuery(
    ["postList", currentUser.uid],
    () => getAllPostByUIDList([currentUser.uid, ...followers]),
    {
      enabled: !followersLoading,
    }
  );

  if (postsLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (postsIsError) {
    console.log({ error: postsError });
    return <div>Not Found</div>;
  }

  return (
    <div className=" max-w-[41rem]">
      {allposts?.map((p) => (
        <Post
          key={p.id}
          body={p.content}
          time={p.created_at}
          name={p.author_fullname}
          username={p.author_username}
          total_likes={p.total_likes}
          total_comments={p.total_comments}
          uid={p.uid}
          postDocId={p.id}
        />
      ))}
    </div>
  );
};

export default Home;
