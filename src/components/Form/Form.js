import React from 'react'
import CenterContainerButtons from '../CenterContainerButtons/CenterContainerButtons'
import './Form.css'

export default function Form() {
  return (
    <div className='Form'>
        <form>
            <span>Your Name</span>
            <input placeholder='Name' className='userName' type="text" />
            <span>Mail</span>
            <input placeholder='Your email' className='email' type="text" />
            <span>Phone</span>
            <input placeholder='Your phone' className='phone' type="text" />
           <div className='textarea'> 
                <span>Message</span><br/><br/>
                <textarea placeholder='Your message' cols="50" rows="14"></textarea>
           </div>
           <h3>Services</h3>
           <CenterContainerButtons />
        </form>
    </div>
  )
}
