import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'
import { TiLocation } from "react-icons/ti";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMailSharp } from "react-icons/io5";



export default function Nav() {


  return (
    <div className='Nav'>
        <nav>
            <ul>
                <li><NavLink><TiLocation className='navIcons'/>102 Street 2714 Don </NavLink></li>
                <li><NavLink><BsTelephoneFill className='navIcons'/>+02 1234 567 </NavLink></li>
                <li><NavLink><IoMailSharp className='navIcons'/>hello@flowbase.com </NavLink></li>
            </ul>
        </nav>
    </div>
  )
}
