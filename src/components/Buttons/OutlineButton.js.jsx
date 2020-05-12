import React from "react";
import PropTypes from "prop-types";
import Button from './Button';

class RedButton extends Component {
  render() {
    const { text, ...rest } = this.props;
    return (
      <Button
        className={ 'bg-red-700 text-white hover:bg-red-800 ' + this.props.className }
      >
      { this.props.text }
      </Button>
    );
  }
}

RedButton.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  hidden: PropTypes.bool,
  role: PropTypes.string,
  onclick: PropTypes.func
};

RedButton.defaultProps = {
  disabled: false,
  text: "Submit",
  type: "button",
  hidden: false,
  role: "button"
};

export default RedButton;
