import React from 'react'
import './CenterContainerButtons.css'

export default function CenterContainerButtons() {
  return (
    <div className='CenterContainerButtons'>
        <button>Web Design</button>
        <button>Web Development</button>
        <button>Logo Design</button>
        <button>Other</button>
        <button className='sendMessage'>Send Message</button>
    </div>
  )
}
