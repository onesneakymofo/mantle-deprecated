import React from "react";
import PropTypes from "prop-types";

const Grid = (
  {
    className,
    children
  }
) => {
  return (
    <div className={`grid ${className}`}>
     { children }
    </div>
  )
}

const GridItem = (
  {
    className,
    children
  }
) => {
  return (
    <div className={className}>
      { children }
    </div>
  )
}

Grid.propTypes = {
  color: PropTypes.string,
  percent: PropTypes.number
};

export {Grid, GridItem};
