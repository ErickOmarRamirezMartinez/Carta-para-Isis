import { useState } from "preact/hooks";
import OkYay from "./OkYay";

export const App = () => {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No"
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <main className="w-11/12 max-w-7xl mx-auto flex flex-col items-center justify-center h-svh -mt-16">
      {yesPressed ? (
        <OkYay />
      ) : (
        <>
          <img
            alt="Cute love bear roses"
            className="h-52 brightness-110 mix-blend-multiply"
            src="/Cenicienta.gif"
          />
          <h1 className="text-4xl font-bold text-center my-4">
            Espero que disfrutes el 14 de febrero Isis
          </h1>
          <div>
            <button
              type="button"
              onClick={handleNoClick}
              className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded ml-2 mt-2"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </main>
  );
};
