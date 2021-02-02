import React from "react";
import PropTypes from "prop-types";

const Flex = (
  {
    className = '',
    children
  }
) => {
  return (
    <div className={`flex ${className}`}>
     { children }
    </div>
  )
}

const FlexItem = (
  {
    className = '',
    children
  }
) => {
  return (
    <div className={className}>
      { children }
    </div>
  )
}

Flex.propTypes = {
  color: PropTypes.string,
  percent: PropTypes.number
};

export {Flex, FlexItem};
