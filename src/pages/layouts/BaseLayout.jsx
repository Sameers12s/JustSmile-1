import Navbar from "../../components/Navbar";
import LeftSidebar from "../../components/LeftSidebar";
import RightSidebar from "../../components/RightSidebar";
import { Outlet, useFetcher } from "react-router-dom";

const BaseLayout = () => {
  document.title = "JustSmile | Home";
  return (
    <div className="w-full h-screen">
      <div className="h-20 w-full top-0 ">
        <div className="container max-w-7xl mx-auto justify-center">
          <Navbar />
        </div>
      </div>
      <div className="h-[calc(100vh-5rem)] w-full">
        <div className="container max-w-7xl h-full flex mx-auto justify-center">
          <div className="min-w-[18rem] hidden lg:block">
            <LeftSidebar />
          </div>
          <div className="flex-1 max-w-[42rem] px-2">
            <Outlet />
          </div>
          <div className="min-w-[20rem] max-w-[20rem] hidden xl:block bg-neutrals-900">
            <RightSidebar />
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 h-20 bg-green-500 z-30 w-full lg:hidden"></div>
    </div>
  );
};

export default BaseLayout;
