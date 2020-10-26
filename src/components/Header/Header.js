import React from "react";
import PropTypes from "prop-types";
import headerStyle from "./style";

const Header = (
  {
    tag = 'h1',
    size = 'md',
    children,
    className
  }
) => {
  const Tag = tag;
  return (
    <Tag className={ headerStyle({size}) + " " + className}>
      { children }
    </Tag>
  )
}

Header.propTypes = {
  tag: PropTypes.string,
  size: PropTypes.string
};

export {Header};
