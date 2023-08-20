import SidebarItem from "./LeftSiderbarItem";
const SearchBar = () => {
    return (
        <div className="flex justify-center items-center h-full w-full">
            <div className="flex flex-col justify-center items-center bg-neutrals-800 h-auto w-full rounded-lg">
                <div className="flex flex-col justify-start items-start p-3  w-full">
                    <div className="flex justify-start items-start pl-3">
                        <h6 className="flex justify-start items-start font-extrabold">SEARCH</h6>

                    </div>
                    <div className="flex py-3 w-full">
                    <input id="email" className=" textarea bg-neutrals-900 rounded-lg w-full h-3" placeholder="Search accounts or posts by hashtags"></input>
                    </div>
                </div>
                <div className="flex flex-row w-full justify-center items-center border-t-2 border-neutral-800 py-3" >
                    <div className="flex w-full justify-center ">
                        <SidebarItem isActive={false}>
                            ACCOUNTS
                        </SidebarItem>
                    </div>
                    <div className="flex w-full justify-center">
                        <SidebarItem isActive={false}>
                            HASHTAGS
                        </SidebarItem>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default SearchBar;