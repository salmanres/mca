import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <Fragment>
        <div className='nav-bar'>
            <Link to='/'>HOME</Link> ----
            <Link to='/contactus'>    CONTACT US</Link> ------ 
            <Link to='/studentdata'>student data</Link> ----
            <Link to='/addstudent'>add data</Link>
        </div>
    </Fragment>
  )
}

export default Navbar