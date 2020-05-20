const baseProps = "inline-block px-2 rounded-full font-bold tracking-wide";
const sizeProps = size => size === 'md' ? 'text-base' : `text-${size}`;

const solidProps = color => {
  if (color === 'white')
    return 'bg-white border-gray-300 border-2 text-gray-800';
  else if (color === 'black')
    return 'bg-gray-800 text-gray-200';
  else
    return `bg-${color}-300 text-${color}-800`;
}

const badgeStyle = props => {
  return baseProps                + " " +
  sizeProps(props.size)           + " " +
  solidProps(props.color);
};

export default badgeStyle;
