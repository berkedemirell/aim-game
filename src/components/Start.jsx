/* eslint-disable react/prop-types */

const Start = ({ handleStart, gameInfos, handleDifficulty, handleGame }) => {
  const buttons = [
    {
      title: "Short (1min)",
      back: "bg-red-950 text-slate-50 hover:bg-red-700 active:bg-red-950",
      mode: "short",
      duration: 60,
    },
    {
      title: "Medium (3min)",
      back: "bg-yellow-900 text-slate-50 hover:bg-yellow-600 active:bg-yellow-900",
      mode: "medium",
      duration: 180,
    },
    {
      title: "Long (5min)",
      back: "bg-green-950 text-slate-50 hover:bg-green-700 active:bg-green-950",
      mode: "long",
      duration: 300,
    },
  ];
  const buttons2 = [
    {
      id: 1,
      title: "Easy",
      style: "w-24 h-24",
    },
    {
      id: 2,
      title: "Medium",
      style: "w-12 h-12",
    },
    {
      id: 3,
      title: "Hard",
      style: "w-6 h-6",
    },
  ];

  return (
    <div className="h-screen w-screen flex items-center justify-center font-mono">
      <div className="bg-slate-800 text-slate-50 p-4 rounded-lg pl-10 pr-10">
        <h1 className="text-2xl font-bold pb-4 text-center">
          Improve Your Aim
        </h1>
        <div className="flex flex-col gap-1 items-center">
          {buttons.map((d) => {
            return (
              <button
                id={d.mode}
                onClick={handleStart}
                key={d.duration}
                className={`${d.duration} ${
                  d.mode === gameInfos.mode ? "border border-slate-50" : ""
                } text-center w-36 pl-2 pr-2 rounded-md p-1 transition-all duration-400 ${
                  d.back
                } font-bold`}
              >
                {d.title}
              </button>
            );
          })}
        </div>
        <div className="flex flex-row items-center justify-center mt-4 gap-4">
          {buttons2.map((d) => {
            return (
              <button
                onClick={handleDifficulty}
                id={d.style}
                key={d.id}
                className={`bg-slate-950 pl-6 pr-6 p-1 rounded-md font-bold ${
                  gameInfos.difficulty === d.title
                    ? "border border-slate-50"
                    : ""
                }`}
              >
                {d.title}
              </button>
            );
          })}
        </div>
        <div className="text-center mt-4">
          <button onClick={handleGame} className="text-2xl bg-emerald-800 p-1 pr-4 pl-4 rounded-md hover:bg-emerald-200 hover:text-slate-900 font-bold transition-all duration-400 active:bg-emerald-800">
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
