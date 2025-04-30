import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'

function ContactUsPage() {

    const {count} = useParams();

  return (
    <Fragment>
        <h1>count is - {count}</h1>
        <h1>this is contact us page</h1>
    </Fragment>
  )
}

export default ContactUsPage