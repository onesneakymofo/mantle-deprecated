const baseProps = "inline-block px-3 py-2 rounded antialiased tracking-wide border font-medium";
const accessibilityProps = "focus:outline-none focus:shadow-outline";
const sizeProps = size => size === 'md' ? 'text-base' : `text-${size}`;
const disabledProps = disabled => disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'

const solidProps = (color, shade = 600) => {
  if (color.includes('gray'))
    return `bg-${color}-200 border-${color}-200 text-${color}-600 hover:bg-${color}-300 hover:border-${color}-300`;
  else
    return `bg-${color}-600 border-${color}-${shade} text-white hover:bg-${color}-${shade + 100} hover:border-${color}-${shade + 100}`;
}

const outlineProps = color => {
  if (color.includes('gray'))
    return `border-${color}-500 text-${color}-600 hover:bg-${color}-300 hover:border-${color}-300`;
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
