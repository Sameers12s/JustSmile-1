import follower from "../../api/follow";
import isUserFollowing from "../../api/isUserFollowing";
import { useAuth } from "../../context/auth-context";
import propTypes from "prop-types";
import { useQuery, useQueryClient } from "react-query";

const FollowButton = (props) => {
  const { currentUser } = useAuth();
  const queryClient = useQueryClient();

  const { data: UserFollowing } = useQuery(
    ["UserFollowing", currentUser.uid, props.uid],
    () => isUserFollowing(currentUser.uid, props.uid)
  );

  const handleButtonClick = async () => {
    await follower(currentUser.uid, props.uid);
    queryClient.resetQueries(
      {
        queryKey: ["UserFollowing", currentUser.uid, props.uid],
      },
      { queryKey: ["FollowingCount", currentUser?.uid] }
    );
  };

  return (
    <button
      onClick={handleButtonClick}
      className={`px-4 py-2 w-30 rounded-lg ${
        UserFollowing
          ? "btn bg-neutrals-700 text-neutrals-600  hover:bg-neutrals-900"
          : "btn  bg-primary text-white  hover:bg-blue-700"
      }`}
    >
      {UserFollowing ? "Following" : props.children}
    </button>
  );
};

export default FollowButton;

FollowButton.propTypes = {
  uid: propTypes.string,
  children: propTypes.string,
};
