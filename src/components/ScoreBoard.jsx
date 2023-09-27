/* eslint-disable react/prop-types */

import { useEffect } from "react";

const ScoreBoard = ({ counter, gameInfos, setGameInfos,setCounter }) => {
//   const [selectedTime, setSelectedTime] = useState(timer.short)

  useEffect(() => {
    const interval = setInterval(() => {
      setGameInfos({...gameInfos, duration: Number(gameInfos.duration) - 1})
      if(Number(gameInfos.duration) === 0) {
        setGameInfos({...gameInfos, isGameFinished: true})
      }

    },1000)

    return () => clearInterval(interval)
  },[setGameInfos, gameInfos, setCounter])

  return (
    <div className="absolute right-0 top-0 p-2 pl-6 pr-6 bg-slate-950 text-slate-50 font-bold font-mono rounded-md mr-1 mt-1">
      <div className="text-center flex flex-col">
        <span className="text-xl text-center">Score: {counter}</span>
        <span className="text-xl text-center">Difficulty: {gameInfos.difficulty}</span>
      </div>
      <div className="text-center">
        <span className="text-xl">{Number(gameInfos.duration)}</span>
      </div>
    </div>
  );
};

export default ScoreBoard;
