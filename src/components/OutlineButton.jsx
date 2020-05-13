import React from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';

class OutlineButton extends React.Component {
  buttonColor = () => {
    const color = this.props.color;
    return classNames({
      "text-blue-700 border-2 border-blue-700 text-white hover:bg-blue-800 hover:text-white hover:border-blue-800": color === "blue",
      "text-gray-300 border-2 border-gray-300 text-gray-800 hover:bg-gray-400 hover:border-gray-400": color === "gray",
      "text-gray-300 border-2 border-gray-300 text-gray-800 hover:bg-gray-100 hover:border-gray-300": color === "white",
      "text-red-700 border-2 border-red-700 text-white hover:bg-red-800 hover:text-white hover:border-red-800": color === "red",
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
    const { ...rest } = this.props;
    return (
      <button
        {...rest}
        className = { this.buttonColor() + " " + this.buttonSize() + " " + this.props.className } >
        { this.props.children }
      </button>
    );
  }
}

OutlineButton.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  hidden: PropTypes.bool,
  role: PropTypes.string,
  onclick: PropTypes.func,
};

OutlineButton.defaultProps = {
  className: "",
  disabled: false,
  type: "button",
  hidden: false,
  role: "button"
};

export default OutlineButton;
