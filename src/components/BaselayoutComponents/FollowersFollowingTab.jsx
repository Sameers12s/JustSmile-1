import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { useEffect } from "react";
import getFollowersCount from "../../api/getFollowersCount";
import { useQuery } from "react-query";
import getFollowingCount from "../../api/getFollowingCount";

const FollowersFollowingTab = (props) => {
  const { currentUser } = useAuth();
  useEffect(() => {});

  const { data: FollowersCount } = useQuery(
    ["FollowersCount", currentUser?.uid],
    () => getFollowersCount(currentUser.uid)
  );
  const { data: FollowingCount } = useQuery(
    ["FollowingCount", currentUser?.uid],
    () => getFollowingCount(currentUser.uid)
  );

  return (
    <div>
      <div className="flex flex-row h-36 rounded-lg justify-center items-center text-center bg-neutrals-800 font-bold">
        <div className="stats bg-neutrals-800">
          <Link to="followers-followings/Followers">
            <button className="stat px-2 place-items-center">
              <div className="stat-figure"></div>
              <div className="stat-value text-xl">{FollowersCount}</div>
              <div className="stat-desc">FOLLOWERS</div>
            </button>
          </Link>
          <Link
            to="followers-followings/Followers"
            className=" border-transparent"
          >
            <button className="stat px-2 place-items-center border-transparent">
              <div className="stat-figure"></div>
              <div className="stat-value text-xl">{FollowingCount}</div>
              <div className="stat-desc">FOLLOWING</div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default FollowersFollowingTab;

FollowersFollowingTab.defaultProps = {
  Followers: 0,
  Following: 0,
};
