import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section className="p-8 bg-black bg-opacity-50 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-200 mb-4">
        Welcome{" "}
        <span className="text-cyan-500">
          {enteredPlayerName ?? "unknown entity"}!
        </span>
      </h2>
      <div className="flex items-center">
        <input
          ref={playerName}
          type="text"
          placeholder="Enter your name..."
          className="text-black px-4 py-2 rounded-l-lg flex-1"
        />
        <button
          onClick={handleClick}
          className="bg-green-800 text-white py-2 px-6 rounded-r-lg hover:bg-green-700 transition-colors flex-none"
        >
          Set Name
        </button>
      </div>
    </section>
  );
}
