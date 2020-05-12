import React from "react";
import PropTypes from "prop-types";
import Button from './Button';

class LinkButton extends Component {
  render() {
    const { text, ...rest } = this.props;
    return (
      <Button
        className={ 'text-blue-600 border-0 ' + this.props.className}
      >
      { this.props.text }
      </Button>
    );
  }
}

LinkButton.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  hidden: PropTypes.bool,
  role: PropTypes.string,
  onclick: PropTypes.func
};

LinkButton.defaultProps = {
  disabled: false,
  text: "Submit",
  type: "button",
  className: "text-blue-600 border-0",
  hidden: false,
  role: "button"
};

export default LinkButton;
