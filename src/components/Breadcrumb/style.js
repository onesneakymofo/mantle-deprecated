const baseProps = "flex p-3 rounded font-medium";

const colorProps = color => {
  if (color === 'white')
    return 'bg-white text-gray-700';
  else
    return `bg-${color}-200 text-${color}-700`;
}

const breadcrumbStyle = props => {
  return baseProps                + " " +
  colorProps(props.color)
};

export default breadcrumbStyle;

