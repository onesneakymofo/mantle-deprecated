import React from "react";
import PropTypes from "prop-types";
import progressBarStyle from "./style";

const ProgressBar = (
  {
    color = 'blue',
    percent = 0,
    className
  }
) => {
  return (
    <div className="rounded-xl p-1 bg-gray-200 flex leading-none overflow-hidden w-full">
      <div className={ progressBarStyle({color}) + " " + className } style={{'width': `${percent}%` }}>
      { percent } %
      </div>
    </div>
  )
}

ProgressBar.propTypes = {
  color: PropTypes.string,
  percent: PropTypes.number
};

export default ProgressBar;
