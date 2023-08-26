import Navbar from "../../components/BaselayoutComponents/Navbar";
import LeftSidebar from "../../components/BaselayoutComponents/LeftSidebar";
import RightSidebar from "../../components/BaselayoutComponents/RightSidebar";
import NavbarMobile from "../../components/BaselayoutComponents/NavbarMobile";
import { Outlet, useFetcher, useMatch, useMatches } from "react-router-dom";

const BaseLayout = () => {
  document.title = "JustSmile | Home";

  const matches = useMatches();
  let func = matches
    .filter((match) => Boolean(match.handle?.hideRightSidebar))
    .map((match) => match.handle.hideRightSidebar);
  let visibility = func;

  return (
    <div className="w-full h-screen">
      <div className="h-20 w-full top-0 sticky z-50">
        <div className="container max-w-7xl mx-auto justify-center ">
          <Navbar />
        </div>
      </div>
      <div className="h-[calc(100vh-5rem)] w-full">
        <div className="container max-w-7xl h-full flex mx-auto justify-center">
          <div className="min-w-[18rem] hidden lg:block">
            <LeftSidebar />
          </div>
          <div className="flex-1 h-full px-2">
            <Outlet />
          </div>

          <div className={` ${visibility}`}>
            <RightSidebar />
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 h-16 bg-neutrals-900 z-30 w-full lg:hidden border-t-2 border-t-neutrals-800">
        <NavbarMobile />
      </div>
    </div>
  );
};

export default BaseLayout;
