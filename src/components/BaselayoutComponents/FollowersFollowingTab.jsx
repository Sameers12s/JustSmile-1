const FollowersFollowingTab = (props) => {
  return (
    <div>
      <div className="flex flex-row h-36 rounded-lg justify-center items-center text-center bg-neutrals-800 font-bold">
        <div className="stats bg-neutrals-800">
          <button className="stat px-2 place-items-center">
            <div className="stat-figure"></div>
            <div className="stat-value text-xl">{props.Following}</div>
            <div className="stat-desc">FOLLOWING</div>
          </button>

          <button className="stat px-2 place-items-center border-transparent">
            <div className="stat-figure"></div>
            <div className="stat-value text-xl">{props.Followers}</div>
            <div className="stat-desc">FOLLOWERS</div>
          </button>
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
