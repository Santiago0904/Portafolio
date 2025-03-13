import React from 'react'
import { NavLink } from 'react-router-dom'

export const ItemNavBar = ({content, route}) => {
  return (
    <li>
        <NavLink className="text-lg hover:text-green-500 transition" to={route}>{content}</NavLink>
    </li>
  )
}

