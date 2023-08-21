import React, { useState } from "react";
import SearchbarItem from "./SearchbarItem";


const SearchBar = () => {
    const [activeTab, setActiveTab] = useState("ACCOUNTS");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <div className="flex justify-center items-center h-full w-full">
            <div className="flex flex-col justify-center items-center bg-neutrals-800 h-full w-full rounded-lg">
                <div className="flex flex-col justify-start items-start p-3 w-full">
                    <div className="flex justify-start items-start pl-3">
                        <h6 className="flex justify-start items-start font-extrabold">
                            SEARCH
                        </h6>
                    </div>
                    <div className="flex py-3 w-full">
                        <input
                            id="email"
                            className="h-16 textarea bg-neutrals-900 rounded-lg w-full text-neutrals-600"
                            placeholder="Search accounts or posts by hashtags"
                        ></input>
                    </div>
                </div>
                <div className="flex flex-row w-full justify-center items-center border-t-2 border-neutral-800 py-2">
                    <div className="flex w-full justify-center">
                        <SearchbarItem
                            isActive={activeTab === "ACCOUNTS"}
                            onClick={() => handleTabClick("ACCOUNTS")}
                        >
                            ACCOUNTS
                        </SearchbarItem>
                    </div>
                    <div className="flex w-full justify-center">
                        <SearchbarItem
                            isActive={activeTab === "HASHTAGS"}
                            onClick={() => handleTabClick("HASHTAGS")}
                        >
                            HASHTAGS
                        </SearchbarItem>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default SearchBar;
