import React from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';

class Button extends React.Component {
  buttonColor = () => {
    const color = this.props.color;
    return classNames({
      "bg-blue-700 border-2 border-blue-700 text-white hover:bg-blue-800 hover:border-blue-800": color === "blue",
      "bg-gray-300 border-2 border-gray-300 text-gray-800 hover:bg-gray-400 hover:border-gray-400": color === "gray",
      "bg-white border-gray-300 border-2 text-gray-800 hover:bg-gray-100 hover:border-gray-300": color === "white",
      "bg-red-700 border-2 border-red-700 text-white hover:bg-red-800 hover:border-red-800": color === "red",
      "inline-block px-3 py-1 rounded tracking-wider font-semibold  \
       focus:outline-none focus:shadow-outline": true,
       'opacity-50 cursor-not-allowed hover:none': this.props.disabled

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
    const { ...rest } = this.props;
    return (
      <button
        {...rest}
        className = { this.buttonColor() + " " + this.buttonSize() + this.props.className }>
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
  className: " ",
  disabled: false,
  type: "button",
  hidden: false,
  role: "button"
};

export default Button;
