const baseProps = "p-4 max-w-xs bg-white p4 rounded"

const colorProps = color => {
  if (color === 'white')
    return 'bg-white text-gray-700';
  else
    return `bg-${color}-200 text-${color}-700`;
}

const sidebarStyle = props => {
  return baseProps + " " + colorProps(props.colors)
};

export default sidebarStyle;

