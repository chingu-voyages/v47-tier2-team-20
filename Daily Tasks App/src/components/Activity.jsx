import React from 'react'
import Task from './Task'

function Activity({ activity }) {
    return (
        <div className="activity">
            <p>{activity.activityName}</p>
            <div className="activity_tasks">
                {
                    activity.Tasks.map(n => <Task key={n.taskName} task={n} />)
                }
            </div>

        </div>
    )
}

export default Activity