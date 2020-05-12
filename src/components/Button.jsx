import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component {
  render() {
    const { text, ...rest } = this.props;

    return (
      <button
        {...rest}
        className={`${this.props.className} ${
          this.props.hidden ? "hidden" : ""
        }`}
      >
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
  className: "btn btn-primary",
  hidden: false,
  role: "button"
};

export default Button;
