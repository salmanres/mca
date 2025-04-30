import React, { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom'
import LoginPage from './LoginPage'
import Navbar from './Navbar'

function LandingPage() {
  return (
    <Fragment>
        <Navbar/>
        <Outlet/>
    </Fragment>
  )
}

export default LandingPage