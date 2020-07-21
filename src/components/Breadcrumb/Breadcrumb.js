import React from "react";
import breadcrumbStyle from "./style";
import { createContext, useContext } from "react";


const Breadcrumb = ({color = 'white', separator = '/', className, children}) => {
  const lastIndex = children.length - 1

  children = children.reduce((acc, child, index) => {
    const notLast = index < lastIndex
    if (notLast) {
      acc.push(child,
        <BreadcrumbSeparator key={`breadcrumb_sep${index}`}>
          {separator}
        </BreadcrumbSeparator>
      )
    } else {
      acc.push(child)
    }
    return acc
  }, [])

  return (
    <nav>
      <ol
        className={ breadcrumbStyle({color}) + " " +  className } >
        { children }
      </ol>
    </nav>
  )
}

const BreadcrumbItem = ({children}) => {
  return (
    <li className="inline-flex pr-5">
      { children }
    </li>
  )
}

const BreadcrumbLink = ({link, children}) => {
  return (
    <a href={link}>{children}</a>
  )
}

const BreadcrumbSeparator = ({children}) => {
  return (
    <li className="inline-flex pr-5">
      { children }
    </li>
  )
}

export { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator};
