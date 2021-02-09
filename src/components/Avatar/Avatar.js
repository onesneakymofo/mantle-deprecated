import React from "react";
import PropTypes from "prop-types";
import * as Style from "./style";

const getInitials = name => {
  let [firstName, lastName] = name.split(" ");
  if (firstName && lastName) return `${firstName.charAt(0)}${lastName.charAt(0)}`
  else if(firstName) return firstName.charAt(0)
  else return ':)'
};

const AvatarBadge = ({color}) => {
  return (
    <div className={Style.AvatarBadge(color)}></div>
  )
}

const Avatar = (
  {
    size = 'sm',
    src,
    name,
    children,
    className = null
  }
) => {
  if(src) {
    return (
      <div className={ Style.Avatar(size) }>
        <img className="rounded-full" src={ src } alt="" />
        { children }
      </div>
    )
  } else if(!src && name) {
    return (
      <div className={ Style.Avatar(size)}>
        {getInitials(name)}
        { children }
      </div>
    )
  } else {
    return (
      <div className={ Style.Avatar(size)}>
        <svg className={ Style.AvatarImage(size) + " fill-current " + className}  viewBox="0 0 128 128" role="img">
          <g>
            <path d="M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z" />
            <path d="M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24" />
          </g>
        </svg>
        { children }
      </div>
    )
  }

}

Avatar.propTypes = {
  size: PropTypes.string,
  src: PropTypes.string
};

export {Avatar, AvatarBadge};
