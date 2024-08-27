import React from 'react'

function Display() {

    const data = JSON.parse(localStorage.getItem("JobDescription"));

  return (
    <div>{data}</div>
  )
}

export default Display