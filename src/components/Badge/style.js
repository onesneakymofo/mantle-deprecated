const baseProps = "inline-block px-2 py-1 rounded-full subpixel-antialiased font-semibold tracking-wide";
const sizeProps = size => size === 'md' ? 'text-base' : `text-${size}`;

const solidProps = color => {
  if (color === 'black')
    return 'bg-gray-800 text-gray-200';
  else
    return `bg-${color}-200 text-${color}-700`;
}

const badgeStyle = props => {
  return baseProps                + " " +
  sizeProps(props.size)           + " " +
  solidProps(props.color);
};

export default badgeStyle;
