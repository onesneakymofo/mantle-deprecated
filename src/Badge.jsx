import React from "react";
import PropTypes from "prop-types";

class Badge extends React.Component {
  determinVariant() {
    switch(this.props.variant) {
      case 'blue':
        return ' bg-blue-200 text-blue-800 '
      case 'green':
        return ' bg-green-200 text-green-800 '
      case 'red':
        return ' bg-red-200 text-red-800 '
      case 'white':
        return ' bg-white border-gray-300 border-2 text-gray-800 '
      case 'yellow':
        return ' bg-yellow-200 text-yellow-800 '
      case 'gray':
        return ' bg-gray-200 text-gray-800 '
      case 'black':
        return ' bg-gray-800 text-gray-200 '
      default:
        return ' bg-blue-200 text-blue-800 '
    }
  }

  render() {
    const { text, ...rest } = this.props;
    return (
      <span
        className={ "inline-block text-xs px-2 rounded-full font-bold tracking-wide " + this.determinVariant() + this.props.className}
      >
      Badge
      </span>
    );
  }
}

Badge.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

Badge.defaultProps = {
  className: "inline-block text-xs px-2 rounded-full font-bold tracking-wide"
};

export default Badge;
