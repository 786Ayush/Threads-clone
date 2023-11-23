import React from 'react'
import Navbar from './Navbar'
import Feeds from './Feeds'
const Search = () => {
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

export default Search