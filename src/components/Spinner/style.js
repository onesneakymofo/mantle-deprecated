const baseProps = "animate-spin";
const sizeProps = size => {
  if (size === '2xl')
    return 'h-20 w-20';
  else if (size === 'xl')
    return 'h-16 w-16';
  else if (size === 'lg')
    return 'h-12 w-12';
  else if (size === 'md')
    return 'h-8 w-8';
  else if (size === 'sm')
    return 'h-6 w-6';
  else
    return 'h-4 w-4';
}
const colorProps = color => {
  if (color === 'blue')
    return 'text-blue-600';
  else if (color === 'gray')
    return 'text-gray-600';
  else if (color === 'white')
    return 'text-white';
  else
    return 'text-gray-600';
}

const spinnerStyle = props => {
  return baseProps                + " " +
  sizeProps(props.size)           + " " +
  colorProps(props.color)
};

export default spinnerStyle;
