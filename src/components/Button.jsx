import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component {
  determinVariant() {
    switch(this.props.variant) {
      case 'blue':
        return ' bg-blue-700 text-white hover:bg-blue-800 '
      case 'gray':
        return ' bg-gray-300 text-gray-800 hover:bg-gray-400 '
      case 'red':
        return ' bg-red-700 text-white hover:bg-red-800 '
      case 'white':
        return ' bg-white border-gray-300 border-2 text-gray-800 '
      default:
        return ' bg-blue-700 text-white hover:bg-blue-800 '
    }
  }

  render() {
    const { text, ...rest } = this.props;
    return (
      <button
        className = { "inline-block px-3 py-1 rounded tracking-wider font-semibold cursor-pointer focus:outline-none focus:shadow-outline " + this.determinVariant() + this.props.className}
      >
      { this.props.text }
      </button>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  hidden: PropTypes.bool,
  role: PropTypes.string,
  onclick: PropTypes.func
};

Button.defaultProps = {
  disabled: false,
  text: "Submit",
  type: "button",
  hidden: false,
  role: "button"
};

export default Button;
