import React from 'react'

function SideBar( { data }) {
  return (
    <div className="sidebar">
      {
        data.map( n => (
          <div key={n.categoryName}>{n.categoryName}</div>
        ))
      }
    </div>
  )
}

export default SideBar