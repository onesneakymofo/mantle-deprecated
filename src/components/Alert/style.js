const baseProps = "px-4 py-3 rounded relative border w-full";

const colorProps = color => {
  return `bg-${color}-100 text-${color}-700 border-${color}-300`;
}

const alertStyle = props => {
  return baseProps                + " " +
  colorProps(props.color)
};

export default alertStyle;

