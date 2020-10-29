const baseProps = "rounded-xl flex flex-col justify-center overflow-hidden text-center whitespace-no-wrap font-medium";
const colorProps = color => {
  if (color === 'black')
    return 'bg-gray-800 text-gray-200';
  else
    return `bg-${color}-600 text-${color}-100`;
}
const progressBarStyle = props => {
  return baseProps + " " +
         colorProps(props.color);
};

export default progressBarStyle;
