import React from "react";
import PropTypes from "prop-types";
import * as Style from "./style";

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
    <div
      type={type}
      role="button"
      className={Style.Button(color, size, variant, disabled)}
      { ...rest }
    >
      { children }
    </div>
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
  disabled: false,
  type: "button",
  hidden: false,
  role: "button"
};

export { Button };
