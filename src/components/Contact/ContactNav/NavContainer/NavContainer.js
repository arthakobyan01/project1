import React from 'react'
import './NavContainer.css'
import Nav from '../Nav/Nav'
// import CenterContainer from '../../ContactBody/CenterContainet/CenterContainer'




export default function NavContainer() {
  return (
    <div className='NavContainer'>
        <h1>Get in touch!</h1>
        <p>Contact us for a quote, help ot to join team.</p>
        <div>
            <Nav />
            {/* <CenterContainer /> */}
        </div>
    </div>
  )
}
