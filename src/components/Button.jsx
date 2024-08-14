import React from 'react'
import '../css/Navbar.css'
export default function Button() {
    return (
        <>
        <div style={{ display: 'flex', gap: '10px' }}>
        <button className='mybutton' onClick={() => console.log('Get Started clicked')}><strong>Get Started</strong></button>
        <button className='mybutton' onClick={() => console.log('Get API Access clicked')}><strong>Get API Access</strong></button>
        </div>
        </>
    )
}
