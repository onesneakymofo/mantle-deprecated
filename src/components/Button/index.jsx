import React from "react";
import PropTypes from "prop-types";

const Button = (
  {
    color = 'blue', 
    variant = 'solid',
    size = 'md', 
    disabled,
    type, 
    role,
    children,
    className,
    onclick, 
    ...rest
  }
) => {

  return (
    <button
      { ...rest }
    >
      { children }
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  hidden: PropTypes.bool,
  role: PropTypes.string,
  onclick: PropTypes.func,
};

Button.defaultProps = {
  className: " ",
  disabled: false,
  type: "button",
  hidden: false,
  role: "button"
};

export default Button;
