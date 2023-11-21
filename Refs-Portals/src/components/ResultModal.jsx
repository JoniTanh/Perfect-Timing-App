import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref
) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 bg-sky-50 border-2 border-black rounded-lg p-5 max-w-lg w-full mx-auto my-12 shadow-lg top-40"
    >
      <div className="text-center">
        {userLost && (
          <h2 className="text-lg text-red-600 font-bold mb-4">You lost</h2>
        )}
        {!userLost && (
          <h2 className="text-lg text-cyan-500 font-bold mb-4">
            Your score: {score}
          </h2>
        )}
      </div>
      <p className="mb-3">
        The target time was <strong className="font-bold">{targetTime}</strong>{" "}
        seconds.
      </p>
      <p>
        You stopped the timer with{" "}
        <strong className="font-bold">
          {formattedRemainingTime} seconds left.
        </strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <div className="flex justify-end">
          <button className="mt-5 bg-teal-300 text-black px-4 py-2 rounded-full font-bold hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition ease-in duration-200">
            Close
          </button>
        </div>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

ResultModal.propTypes = {
  targetTime: PropTypes.number.isRequired,
  remainingTime: PropTypes.number,
  onReset: PropTypes.func,
};

export default ResultModal;
