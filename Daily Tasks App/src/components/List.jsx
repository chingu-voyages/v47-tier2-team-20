import React from 'react'
import Category from './Category'

function List({ data }) {
    return (
        <div className="list-container">
            {
                data.map(n => <Category key={n.categoryName} category={n} />)
            }
        </div>
    )
}

export default List