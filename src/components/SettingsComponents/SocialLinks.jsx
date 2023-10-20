import { useState } from "react";
import { useAuth } from "../../context/auth-context";
import updateSocialLinks from "../../api/updateSocialLinks";

const SocialLinks = (props) => {
  const [githubp, setGithubp] = useState(props.githubp);
  const [twitterp, setTwitterp] = useState(props.twitterp);
  const [linkedinp, setLinkedinp] = useState(props.linkedinp);
  const { currentUser } = useAuth();

  const handleSocialLinks = (event) => {
    event.preventDefault();
    updateSocialLinks(currentUser.uid, githubp, twitterp, linkedinp);
  };

  return (
    <div className="flex h-full w-full flex-col   bg-neutrals-800 rounded-lg">
      <div className="flex flex-row px-3 pt-4">
        <h1 className=" basis-1/4 mt-3 mr-4">Github Profile</h1>
        <div className="basis-3/4">
          <input
            className=" textarea bg-neutrals-900 rounded-lg w-full h-3"
            placeholder="Enter Your GitHub Profile Link"
            value={githubp}
            onChange={(e) => setGithubp(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="flex flex-row px-3 pt-2">
        <h1 className="basis-1/4 mt-3 mr-4">Twitter Profile</h1>
        <div className="basis-3/4">
          <input
            className=" textarea bg-neutrals-900 rounded-lg w-full h-3"
            placeholder="Enter your Twitter Profile Link"
            value={twitterp}
            onChange={(e) => setTwitterp(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="flex flex-row px-3 pb-4 pt-2">
        <h1 className="basis-1/4 mt-3 mr-4">Linkedin Profile</h1>
        <div className="basis-3/4">
          <input
            className=" textarea bg-neutrals-900 rounded-lg w-full h-3"
            placeholder="Enter your LinkedIn Profile Link"
            value={linkedinp}
            onChange={(e) => setLinkedinp(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="flex w-full justify-end">
        <button
          type="button"
          className="btn text-neutrals-500 bg-neutrals-700 mb-3 mr-3 w-28 "
          onClick={handleSocialLinks}
        >
          UPDATE
        </button>
      </div>
    </div>
  );
};
export default SocialLinks;
