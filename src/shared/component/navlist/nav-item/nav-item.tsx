import React from 'react';
import {NavLink} from 'react-router-dom'

interface Props {
    path : string,
    children? : any
    icon : any,
    name : string,
    clicked? : ()=> void
}
const navItem = (props : Props) => (
    <li className='nav-item'>
        <NavLink to={props.path} className='nav-link d-flex align-items-center'>
            {props.icon}
            <span>{props.name}</span>
        </NavLink>
            {props.children}
    </li>
)

export default navItem;