import React from 'react'
import Activity from './Activity'

function Category({ category }) {
    return (
        <div className="category">
            <h4>{category.categoryName}</h4>
            {/* {
                category.activityTypes.map(n => <Activity key={n.activityName} activity={n} />)
            } */}
        </div>
    )
}

export default Category