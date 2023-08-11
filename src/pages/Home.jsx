import LeftSidebar from "../components/LeftSidebar";
import Navbar from "../components/Navbar";

const Home = () => {
    document.title = "JustSmile | Home"
    return (<>
        <div><Navbar /></div>
    <div className="flex h-screen w-full max-w-[120rem] mx-auto">
        <div className="flex h-screen w-full max-w-[120rem] mx-auto">
            <div className="flex-[0_1_20%] min-w-[24rem]">
            <LeftSidebar />
            </div>
            <div className="flex-1 bg-red-500"></div>
            <div className="flex-[0_1_20%] bg-green-500 min-w-[24rem]"></div>
        </div>
    </div> </>);

}
 
export default Home;