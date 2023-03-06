import React, { useState, useEffect } from 'react'

const GalleryTab = ({ nav }) => {
  let [nav1, setNav1] = useState(false)
  let [nav2, setNav2] = useState(false)
  let [nav3, setNav3] = useState(false)
  let [nav4, setNav4] = useState(false)
  let [nav5, setNav5] = useState(false)

  let link1 = () => {
    setNav1(true)
    setNav2(false)
    setNav3(false)
    setNav4(false)
    setNav5(false)
  }
  let link2 = () => {
    setNav1(false)
    setNav2(true)
    setNav3(false)
    setNav4(false)
    setNav5(false)
  }
  let link3 = () => {
    setNav1(false)
    setNav2(false)
    setNav3(true)
    setNav4(false)
    setNav5(false)
  }
  let link4 = () => {
    setNav1(false)
    setNav2(false)
    setNav3(false)
    setNav4(true)
    setNav5(false)
  }
  let link5 = () => {
    setNav1(false)
    setNav2(false)
    setNav3(false)
    setNav4(false)
    setNav5(true)
  }

  return (
    <>
      <div className="text-center">
        <ul className="list-inline categories-filter animation-nav" id="filter">
          <li className="list-inline-item" onClick={link1}>
            <a className={"categories " + (nav1 === true || nav === 1 ? "active" : "")} data-filter="*">All</a>
          </li>
          <li className="list-inline-item" onClick={link2}>
            <a className={"categories " + (nav2 === true ? "active" : "")} data-filter=".project">Project</a>
          </li>
          <li className="list-inline-item" onClick={link3}>
            <a className={"categories " + (nav3 === true ? "active" : "")} data-filter=".designing">Designing</a>
          </li>
          <li className="list-inline-item" onClick={link4}>
            <a className={"categories " + (nav4 === true ? "active" : "")} data-filter=".photography">Photography</a>
          </li>
          <li className="list-inline-item" onClick={link5}>
            <a className={"categories " + (nav5 === true ? "active" : "")} data-filter=".development">Development</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default GalleryTab
