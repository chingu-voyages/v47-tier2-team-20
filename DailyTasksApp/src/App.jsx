import { useState } from 'react'
import GridLayout from "react-grid-layout";
import './App.css'
import data from './assets.json'
import List from './components/List'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Footer from './components/Footer'
// const ResponsiveGridLayout = WidthProvider(Responsive);

function App() {
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 1},
    { i: "b", x: 1, y: 0, w: 1, h: 1},
    { i: "c", x: 2, y: 6, w: 3, h: 1 },
    { i: "d", x: 3, y: 0, w: 1, h: 1 },
    { i: "e", x: 4, y: 0, w: 1, h: 1 },
    { i: "f", x: 5, y: 0, w: 1, h: 1 },
    { i: "g", x: 6, y: 0, w: 1, h: 1 },
    { i: "h", x: 3, y: 3, w: 1, h: 1 }
  ];
  return (
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

            // breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={12}
            rowHeight={30}
            width={1200}
          >
            <div key="a" data-grid={{x: 0, y: 0, w: 2, maxW: 3, h:1, static:true}}>a</div>
            <div key="b" data-grid={{x: 1, y: 4, w: 3, maxW: 3, h:1, static:true}}>Saturday</div>
            <div key="c" data-grid={{x: 2, y: 6, w: 1, maxW: 3, h:1, static:true}}>c</div>
            <div key="d" data-grid={{x: 3, y: 6, w: 1, maxW: 3, h:1, static:true}}>d</div>
            <div key="e" data-grid={{x: 4, y: 6, w: 1, maxW: 3, h:1, static:true}}>e</div>
            <div key="f" data-grid={{x: 5, y: 2, w: 1, maxW: 3, h:1, static:true}}>f</div>
            <div key="g" data-grid={{x: 3, y: 3, w: 1, maxW: 3, h:1, static:true}}>g</div>
            <div key="h" data-grid={{x: 1, y: 6, w: 1, maxW: 3, h:1, static:true}}>h</div>
            <div key="i" data-grid={{x: 0, y: 6, w: 1, maxW: 3, h:1, static:true}}>i</div>
          </GridLayout>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
