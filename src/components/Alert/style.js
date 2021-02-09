export const Alert = (color) => {
  return [
    `leading-normal px-4 py-3 rounded relative border-0 w-full`, 	// base
    `bg-${color}-100 text-${color}-700 border-${color}-300`		    // color                                                    // variation
  ].join(" ")
};


