import LeftSidebar from "../components/LeftSidebar";
import Navbar from "../components/Navbar";

const Home = () => {
  document.title = "JustSmile | Home";
  return (
    <div className="w-screen h-screen">
      <div className="h-20 w-full top-0">
        <div className="container mx-auto ">
          <Navbar />
        </div>
      </div>
      <div className="h-[calc(100vh-5rem)] w-full">
        <div className="container h-full flex mx-auto ">
          <div className="min-w-[18rem] hidden lg:block">
            <LeftSidebar />
          </div>
          <div className="flex-1"></div>
          <div className="min-w-[18rem] hidden xl:block bg-neutrals-950"></div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 h-20 bg-green-500 z-30 w-full lg:hidden"></div>
    </div>
  );
};

export default Home;
