/* eslint-disable react/prop-types */


const Circle = ({handleHit, gameInfos}) => {

  return (
    <div className="flex items-center justify-center w-screen h-screen">
        <button onClick={handleHit} id="btn" className={`${gameInfos?.difStyle} rounded-full bg-red-900 cursor-crosshair absolute`}></button>
    </div>
  )
}

export default Circle