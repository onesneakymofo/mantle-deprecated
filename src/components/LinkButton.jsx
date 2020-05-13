import React from "react";
import PropTypes from "prop-types";
import Button from './Button';

class LinkButton extends React.Component {
  render() {
    const { ...rest } = this.props;
    return (
      <Button
        {...rest}
        className={ 'text-blue-600 border-2 border-white ' + this.props.className}
      >
        { this.props.children }
      </Button>
    );
  }
}

LinkButton.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  hidden: PropTypes.bool,
  role: PropTypes.string,
  onclick: PropTypes.func,
};


LinkButton.defaultProps = {
  className: "text-blue-600 border-0",
  disabled: false,
  type: "button",
  hidden: false,
  role: "button"
};

export default LinkButton;
