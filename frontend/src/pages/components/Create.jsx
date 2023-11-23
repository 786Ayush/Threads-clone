import React from 'react'
import Feeds from './Feeds'
import Navbar from './Navbar'
const Create = () => {
  return (
    <div>
      <Navbar />
      <div className="md:grid md:grid-cols-3">
        <div></div>
        <Feeds />
        <div></div>
      </div>
    </div>
  )
}

export default Create