const baseProps = "inline-block px-3 py-2 rounded tracking-wider border";
const accessibilityProps = "focus:outline-none focus:shadow-outline";
const sizeProps = size => size === 'md' ? 'text-base' : `text-${size}`;
const disabledProps = disabled => disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'

const solidProps = color => {
  if (color === 'gray')
    return 'bg-gray-200 border-gray-200 text-gray-600 hover:bg-gray-300 hover:border-gray-300';
  else
    return `bg-${color}-600 border-${color}-600 text-white hover:bg-${color}-700 hover:border-${color}-800`;
}

const outlineProps = color => {
  if (color === 'gray')
    return 'border-gray-500 text-gray-600 hover:bg-gray-300 hover:border-gray-300';
  else
    return `text-${color}-600 border-${color}-600 hover:bg-${color}-700 hover:text-white hover:border-${color}-800`
}

const ghostProps = color => {
  return `text-${color}-700 border-none hover:bg-${color}-200 hover:text-${color}-700`
}

const linkProps = color => `text-${color}-700 border-white`;

const variantProps = props => {
  switch (props.variant) {
    case "solid": return solidProps(props.color);
    case "ghost": return ghostProps(props.color);
    case "link": return linkProps(props.color);
    case "outline": return outlineProps(props.color);
    default: return '';
  }
};


const buttoneStyle = props => {
  return baseProps                + " " +
  accessibilityProps              + " " +
  sizeProps(props.size)           + " " +
  disabledProps(props.disabled)   + " " + 
  variantProps(props);
};

export default buttoneStyle;