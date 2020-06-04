import React from "react";
import PropTypes from "prop-types";
import badgeStyle from "./style";

const Badge = (
  {
    color = 'gray',
    size = 'xs',
    children,
    className
  }
) => {
  return (
    <span
      className={ badgeStyle({color, size}) + " " + className}
    >
      { children }
    </span>
  )
}

Badge.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string
};

export default Badge;
