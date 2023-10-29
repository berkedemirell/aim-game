import { useEffect, useState } from "react";
import ScoreBoard from "./components/ScoreBoard";
import Circle from "./components/Circle";
import Start from "./components/Start";
import Summary from "./components/Summary";

function App() {
  const [counter, setCounter] = useState(0);
  const [mouseClick, setMouseClick] = useState(0);
  const [gameInfos, setGameInfos] = useState({
    mode: '',
    duration: Number(''),
    isGameStart: false,
    isGameFinished: false,
    difficulty: '',
    difStyle: '',
    gameMode: ''
  })

  const accuracy = Number(counter) * 100 / (Number(mouseClick - 1))


  let height = window.screen.availHeight - 200
  let width = window.screen.availWidth - 200

  const handleHit = () => {
    const btn = document.querySelector("#btn");
    const randomNum = Math.floor(Math.random() * width);
    const randomNum2 = Math.floor(Math.random() * height);
    btn.style.left = randomNum + "px";
    btn.style.top = randomNum2 + "px";
    setCounter((prev) => prev + 1);
  };

  useEffect(() => {
    const handler = () => {
      setMouseClick((prev) => prev + 1);
    };
    document.addEventListener("click", handler);

    if(gameInfos.isGameFinished === true) {
      document.removeEventListener('click', handler)
    }

    return () => {
      document.removeEventListener("click", handler);
    };
  }, [gameInfos]);



  const handleStart = (e) => {
    e.preventDefault();
    setGameInfos({
      mode: e.target.id,
      duration: e.target.innerHTML.startsWith('S') ? e.target.className.slice(0,2) : e.target.className.slice(0,3),
      isGameStart: false,
      isGameFinished: false,
      difficulty: gameInfos.difficulty,
      difStyle: gameInfos.difStyle, 
      gameMode: gameInfos.gameMode, 
    })
  }

  const handleGame = (e) => {
    e.preventDefault();
    setMouseClick(0)
    if(gameInfos.mode.length !== 0 && gameInfos.difficulty.length !== 0 && gameInfos.gameMode.length !== 0 ) {
      setGameInfos({...gameInfos, isGameStart: true,}) 
    } else {
      alert('Select Game Modes')
    }
  } 

  const handlePlayAgain = (e) => {
    e.preventDefault();
    setGameInfos({...gameInfos, isGameFinished: false, isGameStart:false, difficulty: '', difStyle: '', mode: '', duration: '', gameMode: ''})
    setCounter(0)
    setMouseClick(0)
  }

  const handleDifficulty = (e) => {
    e.preventDefault();
    setGameInfos({...gameInfos, difficulty: e.target.innerHTML, difStyle: e.target.id})
  }

  const handleGameMode = (e) => {
    e.preventDefault();
    setGameInfos({...gameInfos, gameMode: e.target.id})
  }

  return (
    <div className="h-screen w-screen bg-red-800 cursor-crosshair relative">
      {!gameInfos.isGameFinished ? <div>
        {!gameInfos.isGameStart ? (
          <Start handleGame={handleGame} handleGameMode={handleGameMode} handleStart={handleStart} gameInfos={gameInfos} setGameInfos={setGameInfos} setMouseClick={setMouseClick} handleDifficulty={handleDifficulty}/>
        ) : (
          <div>
            <ScoreBoard counter={counter} gameInfos={gameInfos} setGameInfos={setGameInfos} setCounter={setCounter}/>
            <Circle
              handleHit={handleHit}
              counter={counter}
              setCounter={setCounter}
              gameInfos={gameInfos}
            />
          </div>
        )}
      </div> : <Summary counter={counter} accuracy={accuracy} handlePlayAgain={handlePlayAgain} mouseClick={mouseClick}/>}
    </div>
  );
}

export default App;
