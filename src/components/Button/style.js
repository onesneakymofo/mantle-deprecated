const baseProps = "inline-block px-3 py-1 rounded tracking-wider font-semibold";
const accessibilityProps = "focus:outline-none focus:shadow-outline";
const sizeProps = size => size === 'md' ? 'text-base' : `text-${size}`;
const disabledProps = disabled => disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'

const solidProps = color => {
  console.log(color);
  if (color === 'gray')
    return 'bg-gray-300 border-2 border-gray-300 text-gray-800 hover:bg-gray-400 hover:border-gray-400';
  else
    return `bg-${color}-700 border-2 border-${color}-700 text-white hover:bg-${color}-800 hover:border-${color}-800`;
}

const outlineProps = color => {
  if (color === 'gray')
    return 'text-gray-700 border-2 border-gray-300 text-gray-800 hover:bg-gray-400 hover:border-gray-400'
  else
    return `text-${color}-700 border-2 border-${color}-700 hover:bg-${color}-800 hover:text-white hover:border-${color}-800`
}

const ghostProps = color => {
  return `text-${color}-700 border-2 border-none hover:bg-${color}-100 hover:text-${color}-700`
}

const linkProps = color => `text-${color}-600 border-2 border-white`;

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
  console.log(solidProps(props.color));
  return baseProps                + " " +
  accessibilityProps              + " " +
  sizeProps(props.size)           + " " +
  disabledProps(props.disabled)   + " " + 
  variantProps(props);
};

export default buttoneStyle;