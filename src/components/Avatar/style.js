export const Avatar = (size) => {
  return [
    `flex relative font-semibold bg-gray-700 justify-center items-center rounded rounded-full text-white shadow-solid`, 	// base
    `text-${size} h-${avatarSizes[size]} w-${avatarSizes[size]}`		    // color                                                    // variation
  ].join(" ")
};

export const AvatarBadge = (color) => {
  return [
    `bg-${color}-400 rounded-full w-4 h-4 borderc border-2 border-white absolute bottom-0 right-0`
  ]
}

export const AvatarName = () => { return `flex relative font-semibold bg-gray-700 justify-center items-center rounded rounded-full text-white shadow-solid` }
export const AvatarImage = (size) => { return `fill-current` };

const avatarSizes = {
  'xs': 8,
  'sm': 12,
  'md': 16,
  'lg': 20,
  'xl': 24,
  'full': "full",
};