import tw, { styled } from 'twin.macro'

export const Button = styled.button(({ color, size, variant, disabled }) => [
  applyBase(),
  applySize(size),
  applyDisability(disabled),
  applyVariantAndColor(variant, color),
])

const applyBase = () => {
  return tw`inline-block px-3 py-2 rounded antialiased tracking-wide border font-medium`
}

const applySize = size => {
  return size === 'md' ? tw`text-base` : tw`text-${size}`
}

const applyVariantAndColor = (variant, color) => {
  switch(variant) {
    case "light":   return lightProps(color);
    case "ghost":   return ghostProps(color);
    case "link":    return linkProps(color);
    case "outline": return outlineProps(color);
    default:        return solidProps(color);
  };
}

const applyDisability = (disabled) => {
  return disabled ? tw`opacity-50 cursor-not-allowed` : tw`cursor-pointer`
}

const solidProps = (color, shade = 600) => {

  if (color.includes('gray'))
    return tw`bg-${color}-200 border-${color}-200 text-${color}-600 hover:bg-${color}-300 hover:border-${color}-300`;
  else
    return tw`bg-${color}-600 border-${color}-600 text-white hover:bg-${color}-600 hover:border-${color}-700`;
}

const lightProps = (color, shade = 600) => {
  if (color.includes('gray'))
    return tw`bg-${color}-200 border-${color}-200 text-${color}-600 hover:bg-${color}-300 hover:border-${color}-300`;
  else
    return tw`bg-${color}-600 border-${color}-600 text-white hover:bg-${color}-600 hover:border-${color}-700`;
}

const outlineProps = color => {
  if (color.includes('gray'))
    return tw`border-${color}-500 text-${color}-600 hover:bg-${color}-300 hover:border-${color}-300`;
  else
    return tw`text-${color}-600 border-${color}-600 hover:bg-${color}-700 hover:text-white hover:border-${color}-800`
}

const ghostProps = color => {
  return tw`text-${color}-700 border-none hover:bg-${color}-200 hover:text-${color}-700`
}

const linkProps = color => `text-${color}-700 border-white`;

// export default buttoneStyle;
