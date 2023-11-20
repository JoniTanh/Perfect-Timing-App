import Player from "./components/Player";
import TimerChallenge from "./components/TimerChallenge";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-800 to-blue-900 flex justify-center px-4 py-10">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-8">
          THE <span className="text-cyan-500">ALMOST</span> FINAL COUNTDOWN
        </h1>
        <p className="text-gray-300 mb-8 font-serif">
          Stop the timer once you estimate that time is{" "}
          <span className="text-cyan-500">(almost)</span> up
        </p>
        <Player />
        <div className="flex flex-wrap justify-center items-start my-8 -mx-2">
          <TimerChallenge title="Easy" targetTime={1} />
          <TimerChallenge title="Not easy" targetTime={5} />
          <TimerChallenge title="Getting tough" targetTime={10} />
          <TimerChallenge title="Pros only" targetTime={15} />
        </div>
      </div>
    </div>
  );
}

export default App;
