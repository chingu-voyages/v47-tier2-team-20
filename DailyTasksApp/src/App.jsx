import { useState } from 'react'
import { Responsive, WidthProvider } from "react-grid-layout";
import './App.css'
import data from './assets.json'
import List from './components/List'
import Header from './components/Header'
import SideBar from './components/SideBar'
const ResponsiveGridLayout = WidthProvider(Responsive);

function App() {
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2},
    { i: "b", x: 1, y: 0, w: 1, h: 2},
    { i: "c", x: 2, y: 0, w: 1, h: 2 },
    { i: "d", x: 3, y: 0, w: 1, h: 2 },
    { i: "e", x: 4, y: 0, w: 1, h: 2 },
    { i: "f", x: 5, y: 0, w: 1, h: 2 },
    { i: "g", x: 6, y: 0, w: 1, h: 2 }
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
          <ResponsiveGridLayout
            className="layout"
            layout={layout}
            // breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
       
            rowHeight={30}
            width={1200}
          >
            <div key="a">a</div>
            <div key="b">b</div>
            <div key="c">c</div>
            <div key="d">d</div>
            <div key="e">e</div>
            <div key="f">f</div>
            <div key="g">g</div>
          </ResponsiveGridLayout>
        </div>
      </div>


    </div>
  )
}

export default App
