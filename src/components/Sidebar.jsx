import React from "react";
import SidebarItem from './SidebarItem';

class Sidebar extends React.Component {

  render() {
    return (
       <div className="sidebar py-4 px-2">
         <SidebarItem href="#buttons">Buttons</SidebarItem>
         <SidebarItem href="#labels">Labels</SidebarItem>
       </div>
    );
  }
}

export default Sidebar;
