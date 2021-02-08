export const Button = (color, size, variant, disabled) => {
  return [
    `inline-block px-3 py-2 rounded antialiased tracking-wide border font-medium`, // base
    `focus:outline-none focus:shadow-outline`,                                     // accessibility
    size === "md" ? `text-base` : `text-${size}`,                                 // size
    disabled ? `opacity-50 cursor-not-allowed` : `cursor-pointer`,                // disability
    variantProps(variant, color)                                                  // variation
  ].join(" ")
};

const variantProps = (variant, color) => {
  switch (variant) {
    case "ghost": return ghostProps(color);
    case "light": return lightProps(color);
    case "link": return linkProps(color);
    case "outline": return outlineProps(color);
    case "solid": return solidProps(color);
    default: return solidProps(color);
  }
}

const solidProps = (color) => {
  return `
    bg-${color}-600
    border-${color}-200
    text-white
    hover:bg-${color}-700
    hover:border-${color}-700
  `
}

const lightProps = (color) => {
  return `
    bg-${color}-300
    border-${color}-200
    text-${color}-900
    hover:bg-${color}-300
    hover:border-${color}-300
  `
}

const outlineProps = color => {
  if (color.includes('gray'))
    return `
      border-${color}-500 
      text-${color}-600 
      hover:bg-${color}-300 
      hover:border-${color}-300
    `
  else
    return `
      text-${color}-600 
      border-${color}-600 
      hover:bg-${color}-700 
      hover:text-white 
      hover:border-${color}-800
    `
}

const ghostProps = color => {
  return `
    text-${color}-700
    border-none
    hover:bg-${color}-200
    hover:text-${color}-700
  `
}

const linkProps = color => {
  return `
    text-${color}-700
    border-white
  `
}


