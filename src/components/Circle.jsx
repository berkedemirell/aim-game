/* eslint-disable react/prop-types */

import {  useRef } from "react"


const Circle = ({handleHit, gameInfos}) => {

  const circleRef = useRef(null)

  



  return (
    <div id="circle-div" className="flex items-center justify-center w-screen h-screen">
        <button onClick={handleHit} id="btn" ref={circleRef} className={`${gameInfos?.difStyle} ${gameInfos.gameMode} rounded-full bg-red-900 cursor-crosshair absolute`}></button>
    </div>
  )
}

export default Circle