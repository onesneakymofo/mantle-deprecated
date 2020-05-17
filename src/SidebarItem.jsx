import React from "react";
import PropTypes from "prop-types";

class SidebarItem extends React.Component {
  render() {
    const { text, ...rest } = this.props;

    return (
      <a {...rest} className="sidebar-item mb-2">
      </a>
    );
  }
}

SidebarItem.propTypes = {
  text: PropTypes.string.isRequired,
}
export default SidebarItem;
