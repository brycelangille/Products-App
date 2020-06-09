import React from 'react'
import "./Search.css";

export default function Search(props) {

  const handleChange = (e) => {
    props.setSearch(e.target.value)
  }

    return (
      <div className='search'>
        <input className='search-input' type='text' onChange={handleChange}  />
      </div>
    )
  }
