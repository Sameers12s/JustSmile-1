import { Dashboard } from "tabler-icons-react";
import SidebarItem from "./SiderbarItem";

const LeftSidebar = () => {
    return ( <div>
        <SidebarItem>
            <Dashboard />
            Dashboard
        </SidebarItem>
    </div> );
}
 
export default LeftSidebar;