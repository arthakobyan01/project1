import React from 'react'
import Nav from '../Nav/Nav'
import './NavContainer.css'

export default function NavContainer() {
  return (
    <div className='NavContainer'>
        <h1>Get in touch!</h1>
        <p>Contact us for a quote, help ot to join team.</p>
        <div>
            <Nav />
        </div>
    </div>
  )
}
