import LeftSidebar from "../components/LeftSidebar";
import Navbar from "../components/Navbar";

const Home = () => {
    document.title = "JustSmile | Home"
    return (<div className="w-full max-w-[79rem] mx-auto">
        <div className="sticky top-0"><Navbar /></div>
    <div className="flex h-screen w-full bg-slate-500">
        <div className="flex h-screen w-full  min-w-[24rem]">
            <div className="min-w-[18rem] bg-slate-500">
            <LeftSidebar />
            </div>
            <div className="min-w-[43rem] bg-red-500"></div>
            <div className=" bg-green-500 min-w-[18rem]"></div>
        </div>
    </div> </div>);

}
 
export default Home;