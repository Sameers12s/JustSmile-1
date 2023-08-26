import React, { useState } from "react";

const FollowButton = ({ children }) => {
    const [isFollowing, setIsFollowing] = useState(false);

    const handleButtonClick = () => {
        setIsFollowing(!isFollowing);
    };

    return (
        <button
            onClick={handleButtonClick}
            className={`px-4 py-2 w-30 rounded-lg ${isFollowing ? "btn bg-neutrals-700 text-neutrals-600  hover:bg-neutrals-900" : "btn  bg-primary text-white  hover:bg-blue-700"
                }`}
        >
            {isFollowing ? "Following" : children}
        </button>
    );
};

export default FollowButton;
