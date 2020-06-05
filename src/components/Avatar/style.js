const baseProps= size => { return `flex relative text-${size} font-semibold bg-gray-700 justify-center items-center rounded rounded-full text-white shadow-solid` }

const sizeProps = size => {
  return `h-${avatarSizes[size]} w-${avatarSizes[size]}`;
}

const avatarSizes = {
  'xs': 8,
  'sm': 12,
  'md': 16,
  'lg': 20,
  'xl': 24,
  'full': "full",
};

const avatarStyle = props => {
  return baseProps(props.size) + " " + sizeProps(props.size)
};

export default avatarStyle;

