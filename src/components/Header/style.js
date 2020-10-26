const baseProps = "font-bold leading-7 text-gray-900";
const sizeProps = size => {
  if (size === '2xl')
    return 'text-3xl sm:text-5xl sm:leading-9';
  else if (size === 'xl')
    return 'text-2xl sm:text-4xl sm:leading-9';
  else if (size === 'lg')
    return 'text-xl sm:text-2xl sm:leading-9';
  else if (size === 'md')
    return 'text-lg sm:text-xl sm:leading-9';
  else if (size === 'sm')
    return 'text-base sm:text-lg sm:leading-9';
  else
    return 'text-sm sm:text-base sm:leading-9';
}

const headerStyle = props => {
  return baseProps                + " " +
  sizeProps(props.size);
};

export default headerStyle;
