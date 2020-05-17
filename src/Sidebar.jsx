import React from "react";
import SidebarItem from './SidebarItem';

class Sidebar extends React.Component {

  render() {
    return (
       <div className="w-full text-gray-900 bg-white rounded-lg text-left capitalize font-medium shadow py-4 px-2">
         <SidebarItem href="#buttons">Buttons</SidebarItem>
         <SidebarItem href="#labels">Labels</SidebarItem>
       </div>
    );
  }
}

Sidebar.defaultProps = {
  className: "",
};

export default Sidebar;
