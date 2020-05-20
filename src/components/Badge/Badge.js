import React from "react";
import PropTypes from "prop-types";
import badgeStyle from "./style";

const Badge = (
  {
    color = 'gray',
    size = 'xs',
    children,
    className,
    ...rest
  }
) => {
  return (
    <span
      className={ badgeStyle({color, size}) + " " + className}
      { ...rest }
    >
      { children }
    </span>
  )
}

Badge.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string
};

export default Badge;
