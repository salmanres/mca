import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <Fragment>
        <div className='nav-bar'>
            <Link to='/'>HOME</Link> ----
            <Link to='/contactus'>    CONTACT US</Link>
        </div>
    </Fragment>
  )
}

export default Navbar