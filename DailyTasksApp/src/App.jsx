import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';
import { useState } from 'react'
import GridLayout from "react-grid-layout";
import './App.css'
import data from './assets.json'
// import List from './components/List'
import Header from './components/Header'
import SideBar from './components/SideBar'
// const ResponsiveGridLayout = WidthProvider(Responsive);

function App() {
  const [currentDimensions, setCurrentDimensions] = useState({ w: 5, h: 2 })
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 1 },
    { i: "b", x: 1, y: 0, w: 1, h: 1 },
    { i: "c", x: 2, y: 6, w: 3, h: 1 },
    { i: "d", x: 3, y: 0, w: 1, h: 1 },
    { i: "e", x: 4, y: 0, w: 1, h: 1 },
    { i: "f", x: 5, y: 0, w: 1, h: 1 },
    { i: "g", x: 6, y: 0, w: 1, h: 1 },
    { i: "h", x: 3, y: 3, w: 1, h: 1 }
  ];
  function getDroppingItem() {
    return {
      i: layout.length,
      x: 3,
      y: 3,
      w: 2,
      h: 2,
    }
  }
  return (
    <>
      <div
        className="droppable-element"
        draggable={true}
        unselectable="on"
        // this is a hack for firefox
        // Firefox requires some kind of initialization
        // which we can do by adding this attribute
        // @see https://bugzilla.mozilla.org/show_bug.cgi?id=568313
        onDragStart={(e) => {
          e.dataTransfer.setData("text/plain", "");
        }}
      >
        (Drag me!)
      </div>
      <div className="app">
        <Header />
        <div className='wrapper'>
          <SideBar data={data} />
          {/* <List data={ data } /> */}
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
              droppingItem= {{ i: "z", w: 2, h: 2 }}
              // This turns off compaction so you can place items wherever.
              verticalCompact={false}
              preventCollision= {true}
              // preventCollision={!this.state.compactType}
              isDroppable={true}
              draggable={true}
              onDropDragOver= {(e) => ({ i: layout.length, w:2, h:1 }) }
            

            >
              <div key="a" data-grid={{ x: 0, y: 0, w: 2, maxW: 3, h: 1 }}>a</div>
              <div key="b" data-grid={{ x: 1, y: 4, w: 3, maxW: 3, h: 1 }}>Saturday</div>
              <div key="c" data-grid={{ x: 2, y: 6, w: 1, maxW: 3, h: 1 }}>c</div>
              <div key="d" data-grid={{ x: 3, y: 6, w: 1, maxW: 3, h: 1 }}>d</div>
              <div key="e" data-grid={{ x: 4, y: 6, w: 1, maxW: 3, h: 1 }}>e</div>
              <div key="f" data-grid={{ x: 5, y: 2, w: 1, maxW: 3, h: 1 }}>f</div>
              <div key="g" data-grid={{ x: 3, y: 3, w: 1, maxW: 3, h: 1 }}>g</div>
              <div key="h" data-grid={{ x: 1, y: 6, w: 1, maxW: 3, h: 1 }}>h</div>
              <div key="i" data-grid={{ x: 0, y: 6, w: 1, maxW: 3, h: 1 }}>i</div>
              <div key="j" data-grid={{ x: 0, y: 7, w: 1, maxW: 3, h: 1 }}>New Item</div>
            </GridLayout>
          </div>
        </div>


      </div>
    </>
  )
}

export default App
