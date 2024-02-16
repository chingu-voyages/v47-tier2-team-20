import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';
import { useState } from 'react'
import GridLayout from "react-grid-layout";
import './App.css'
import data from './assets.json'
import Header from './components/Header'
import SideBar from './components/SideBar'

const layout = [
  { i: "a", x: 0, y: 0, w: 1, h: 1, taskName: 'a' },
  { i: "b", x: 1, y: 0, w: 1, h: 1, taskName: 'b' },
  { i: "c", x: 2, y: 6, w: 3, h: 1, taskName: 'c' },
  { i: "d", x: 3, y: 0, w: 1, h: 1, taskName: 'd' },
  { i: "e", x: 4, y: 0, w: 1, h: 1, taskName: 'e' },
  { i: "f", x: 5, y: 0, w: 1, h: 1, taskName: 'f' },
  { i: "g", x: 6, y: 0, w: 1, h: 1, taskName: 'g' },
  { i: "h", x: 3, y: 3, w: 1, h: 1, taskName: 'h' }
];
function App() {
  const [staticLayout, setStaticLayout] = useState(JSON.parse(window.localStorage.getItem("staticLayout")))
  const [taskName, setTaskName] = useState("")
 
  const onDrop = (layout, layoutItem, _event) => {
    console.log('newItem', layout)
    layoutItem.isResizable = true
    layoutItem.static = true
    layoutItem.moved = false
    layoutItem.resizeHandles = true
    layoutItem.i = taskName
    setStaticLayout([...layout])

  };
  function saveToLS(layout) {
    if (window.localStorage) {
      window.localStorage.setItem(
        "staticLayout",
        JSON.stringify(layout)
      );
    }
  }
  console.log('staticLayout', staticLayout)
  function onLayoutChange (layout, oldItem, newItem) {
console.log(layout)
    saveToLS(layout)
  }
  return (
    <>
      <div
        className="droppable-element"
        draggable={true}
        unselectable='on'
      >
        (Drag me!)
      </div>
      <input type="text" onChange={(e) => setTaskName(e.target.value)} />
      <div className="app">
        <Header />
        <div className='wrapper'>
          <SideBar data={data} />
          <div className="days-container">
            <div className="days">
              <p>Monday</p>
              <p>Tuesday</p>
              <p>Wednesday</p>
              <p>Thursday</p>
              <p>Friday</p>
              <p>Saturday</p>
              <p>Sunday</p>
            </div>

            <GridLayout
              className="layout"
              layout={layout}
              cols={12}
              rowHeight={30}
              width={1200}
              onLayoutChange={onLayoutChange}
              // onDrag={onLayoutChange}
              verticalCompact={false}
              allowOverlap={false}
            
              isDroppable={true}
              draggable={true}
              measureBeforeMount={false}
              preventCollision={true}
              onDrop={onDrop}
            >
              {staticLayout.map ((n, i) => (
                <div key={n.i} data-grid={{ x: n.x, y: n.y, w: n.w, maxW: 3, h: n.h }}>{n.i}</div>
              ))}
            
            </GridLayout>
          </div>
        </div>


      </div>
    </>
  )
}

export default App
