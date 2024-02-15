import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';
import { useEffect, useState } from 'react';
import GridLayout from "react-grid-layout";
import './App.css';
import data from './assets.json';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Category from './components/Category';

const items = [
  {
    key: "a",
    dataGrid: { x: 0, y: 0, w: 2, maxW: 3, h: 1 },
    taskName: "Monday",
  },
  {
    key: "b",
    dataGrid: { x: 0, y: 1, w: 2, maxW: 3, h: 1 },
    taskName: "Saturday",
  },
  {
    key: "c",
    dataGrid: { x: 0, y: 2, w: 2, maxW: 3, h: 1 },
    taskName: "Friday",
  },
  {
    key: "d",
    dataGrid: { x: 0, y: 3, w: 2, maxW: 3, h: 1 },
    taskName: "test2",
  },
  {
    key: "e",
    dataGrid: { x: 0, y: 4, w: 2, maxW: 3, h: 1 },
    taskName: "test3",
  },
  {
    key: "f",
    dataGrid: { x: 1, y: 5, w: 1, maxW: 3, h: 1 },
    taskName: "test",
  }
];

function App() {
  const [taskName, setTaskName] = useState("")
  // const [days, setDays] = useState({
  //   monday: {y:0, x:0},
  //   tuesday: {y:1, x:0},
  //   wednesday: {y:2, x:0},
  //   thursday: {y:3, x:0},
  //   friday: {y:4, x:0},
  //   saturday: {y:5, x:0},
  //   sunday: {y:6, x:0}
  // })
  const [tasks, setTasks] = useState([...items])

  const adjustLayout = (items) => {
    let currentX = 0;

    return items.map((item, index) => {
      const newItem = {
        ...item,
        dataGrid: {
          ...item.dataGrid,
          x: currentX,
        },
      };

      currentX += item.dataGrid.w;

      return newItem;
    });
  };

  const adjustedItems = adjustLayout(tasks);
 
  const onDrop = (layout, layoutItem, _event) => {
    console.log(layoutItem)
    layoutItem.isResiable = true
    layoutItem.static = true
    layoutItem.moved = true
    layoutItem.resizeHandles = true
    layoutItem.i = taskName
    console.log('layoutitem', layoutItem)
    setTasks([...tasks, {
      key: layoutItem.i,
       dataGrid: { x: layoutItem.x, y: layoutItem.y, w: layoutItem.w, maxW: 3, h: 1 },
       taskName: taskName
    }])
    console.log('tasks', tasks)
    alert(`Dropped element props:\n${JSON.stringify(layoutItem, ['x', 'y', 'w', 'h'], 2)}`);
  };
console.log('adjusteditems', adjustedItems)
  return (
    <>
      <div
        className="droppable-element"
        draggable={true}
        unselectable='on'
      // unselectable="on"
      // onDragStart={(e) => {
      //   e.dataTransfer.setData("text/plain", "");
      // }}
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
              // layout={layout}
              cols={12}
              rowHeight={30}
              width={1200}
              verticalCompact={false}
              isDroppable={true}
              draggable={true}
              preventCollision={true}
              onDrop={onDrop}
            >
              {tasks.map((item) => (
                <div key={item.key} data-grid={item.dataGrid}>
                  {item.taskName}
                </div>
              ))}
              {/* <div key="a" data-grid={{ x: 0, y: 0, w: 2, maxW: 3, h: 1 }}>a</div>
              <div key="b" data-grid={{ x: 1, y: 4, w: 3, maxW: 3, h: 1 }}>Saturday</div>
              <div key="c" data-grid={{ x: 2, y: 6, w: 1, maxW: 3, h: 1 }}>c</div>
              <div key="d" data-grid={{ x: 3, y: 6, w: 1, maxW: 3, h: 1 }}>d</div>
              <div key="e" data-grid={{ x: 4, y: 6, w: 1, maxW: 3, h: 1 }}>e</div>
              <div key="f" data-grid={{ x: 5, y: 2, w: 1, maxW: 3, h: 1 }}>f</div>
              <div key="g" data-grid={{ x: 3, y: 3, w: 1, maxW: 3, h: 1 }}>g</div>
              <div key="h" data-grid={{ x: 1, y: 6, w: 1, maxW: 3, h: 1 }}>h</div>
              <div key="i" data-grid={{ x: 0, y: 6, w: 1, maxW: 3, h: 1 }}>i</div>
              <div key="j" data-grid={{ x: 0, y: 1, w: 1, maxW: 3, h: 1 }}>New Item</div>  */}
            </GridLayout>
          </div>
        </div>


      </div>
    </>
  )
}

export default App
