import React from 'react'
import Category from './Category'

function List({ data }) {
     let nArr = []
     let x = data.map( n => n.activityTypes).map( n => n.map(n => n))
     for (let arr of x) {
        for (let item of arr) {
            nArr.push(item)
        }
     }
     console.log(nArr)
    
    return (
        <div className="list-container">
          <table>
            <thead>
                <tr>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wendesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
                <th>Sunday</th>
                </tr>
            </thead>
            <tbody>
               {/* {
                data
               } */}
            </tbody>
          </table>
        </div>
    )
}

export default List