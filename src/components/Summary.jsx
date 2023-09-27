/* eslint-disable react/prop-types */


const Summary = ({accuracy, counter, handlePlayAgain}) => {
  return (
    <div className="w-screen h-screen flex items-center justify-center font-mono">
      <div className="flex flex-col bg-slate-950 p-4 rounded-lg pl-10 pr-10 text-slate-50 font-bold">
        <div className="flex flex-col text-2xl">
          <span>Your Score: {counter}</span>
          <span>Accuracy: {Number(accuracy).toFixed(2)}%</span>
        </div>
        <div className="text-center">
          <button onClick={handlePlayAgain} className="p-1 pl-10 pr-10 mt-4 bg-slate-300 text-slate-950 rounded-sm text-xl hover:bg-slate-700 hover:text-slate-50 transition-all duration-400 active:bg-slate-300 active:text-slate-950">
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
