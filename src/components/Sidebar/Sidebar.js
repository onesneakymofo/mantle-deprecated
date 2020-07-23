import React from "react";
import PropTypes from "prop-types";
import sidebarStyle from "./style";


const Sidebar = ({color, className, children}) => {
  return (
    <div className={ sidebarStyle({color}) + " " +  className } >
      <ul className="flex flex-col w-full rounded">
        { children }
      </ul>
    </div>
  )
}

const SidebarItem = ({link, count, icon, children}) => {
  return (
    <li className="my-px">
      <a href="link" className="flex flex-row items-center h-12 px-4 rounded text-gray-600 hover:bg-gray-200">
        { icon && <i className={`fa fa-${icon} mr-3`}></i> }
        {children}
      </a>
    </li>
  )
}

const SidebarHeader = ({ children }) => {
  return (
    <li className="my-px">
      <div className="flex font-medium text-sm text-gray-500 px-4 my-4 uppercase">
        { children }
      </div>
    </li>
  )
}

Sidebar.propTypes = {
  size: PropTypes.string,
};

export {Sidebar, SidebarItem, SidebarHeader};
