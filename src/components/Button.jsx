import React from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';

class Button extends React.Component {
  buttonColor = () => {
    const color = this.props.color;
    return classNames({
      "bg-blue-700 text-white hover:bg-blue-800": !color || color === "blue",
      "bg-gray-300 text-gray-800 hover:bg-gray-400": color === "gray",
      "bg-red-700 text-white hover:bg-red-800": color === "red",
      "bg-white border-gray-300 border-2 text-gray-800 hover:bg-gray-100": color === "white",
      "inline-block px-3 py-1 rounded tracking-wider font-semibold cursor-pointer \
       focus:outline-none focus:shadow-outline": true
    });
  }
  buttonSize = () => {
    const size = this.props.size;
    console.log(size);
    return classNames({
      "text-xs": size === "xs",
      "text-sm": size === "sm",
      "text-lg": size === "lg",
      "text-xl": size === "xl"
    });
  }

  render() {
    const { text, ...rest } = this.props;
    console.log(this.buttonColor() + this.buttonSize())
    return (
      <button
        className = { this.buttonColor() + " " + this.buttonSize() + " " + this.props.className } >
        { this.props.children }
      </button>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  hidden: PropTypes.bool,
  role: PropTypes.string,
  onclick: PropTypes.func,
};

Button.defaultProps = {
  className: "",
  disabled: false,
  type: "button",
  hidden: false,
  role: "button"
};

export default Button;
