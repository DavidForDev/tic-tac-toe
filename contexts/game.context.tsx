import { createContext, useState, useEffect } from "react";

const initialState: {
  drawers?: any;
  p1?: String;
  p2?: String;
  xCore?: number;
  oCore?: number;
  tieCore?: number;
  checkWin?: any;
  player?: String;
  handleClick?: any;
  winnerModal?: any;
  restartModal?: any;
  tiedModal?: any;
  nextRound?: any;
  modalCloser?: any;
  restartGame?: any;
  wonCombo?: any;
  withCPU?: boolean;
  quitGame?: any;
} = {
  drawers: [],
  p1: "",
  p2: "",
  xCore: 0,
  oCore: 0,
  tieCore: 0,
  checkWin: null,
  player: "",
  wonCombo: null,
  handleClick: null,
  winnerModal: null,
  restartModal: null,
  tiedModal: null,
  nextRound: null,
  modalCloser: null,
  restartGame: null,
  withCPU: false,
  quitGame: null,
};

export const GameContext = createContext<any>(initialState);

interface Props {
  children?: any;
}

const GameContextWrapper = (props: Props) => {
  const { children } = props;

  // ========== Win Combo ========== \\
  const [winCombo, setWinCombo] = useState<any | null>([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]);

  const [drawers, setDrawers] = useState<any | 0>(Array(9).fill(""));
  const [player, setPlayer] = useState<String | any>("x");

  // ========== get P1, P2 from localstorage ========= \\
  const [p1, setP1] = useState<String | null>();
  const [p2, setP2] = useState<String | null>();

  // ========== play with CPU ========= \\
  const [cpu, setCpu] = useState<boolean | null>();

  useEffect(() => {
    const storageP1 = localStorage.getItem("p1");
    const storageP2 = localStorage.getItem("p2");

    setP1(storageP1);
    setP2(storageP2);

    const storageCPU = JSON.parse(localStorage.getItem("withCPU") || "false");

    setCpu(storageCPU);
  }, [setPlayer]);

  // ========== Game Cores ========= \\
  const [xCore, setXCore] = useState<number | 0>(0);
  const [oCore, setOCore] = useState<number | 0>(0);
  const [tieCore, setTieCore] = useState<number | 0>(0);

  // ========== Modals ========= \\
  const [winnerModal, setWinnerModal] = useState<boolean | null>(false);
  const [restartModal, setRestartModal] = useState<boolean | null>(false);
  const [tiedModal, setTiedModal] = useState<boolean | null>(false);

  // ========== win rules ========== \\
  const checkWin = () => {
    for (let i = 0; i < winCombo.length; i++) {
      const [a, b, c] = winCombo[i];
      if (
        drawers[a] &&
        drawers[a] === drawers[b] &&
        drawers[a] === drawers[c]
      ) {
        return { wonPlayer: drawers[a], wonCombo: [a, b, c] };
      }
    }

    return null;
  };

  // ========== Mark Box Rule ========== \\
  const asMark = async (indexOfDraw: number) => {
    if (checkWin()) return;

    setDrawers(
      drawers.map((el: String, index: number) => {
        if (index === indexOfDraw && el === "") {
          changePlayer();
          return player;
        }

        return el;
      })
    );

    setEmptyDraws(emptyDraws.filter((x: number) => x !== indexOfDraw));
  };

  // ========== Change Player after move ========== \\
  const changePlayer = () => {
    return player === "x" ? setPlayer("o") : setPlayer("x");
  };

  // ========== Computer Move permission ========== \\
  const [computerMove, setComputerMove] = useState<boolean | null>(false);

  // ========== when I Click on box should do this ========== \\
  const handleClick = async (indexOfDraw: number) => {
    if (cpu === true) {
      // ========= checkWin() => if someone is already won, you can't touch empty boxes ========= \\
      // ========= drawers[indexOfDraw] !== "" => if box is not empty you can't click them, you can mark only empty boxes ========= \\
      if (drawers[indexOfDraw] !== "") return;

      asMark(indexOfDraw);
      setComputerMove(!computerMove);
    } else {
      asMark(indexOfDraw);
    }
  };

  // ========== ComputerMove ========== \\
  const [emptyDraws, setEmptyDraws] = useState<number | any>([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  useEffect(() => {
    if (computerMove === false) return;
    let computerIndex: any;

    for (let i = 0; i < emptyDraws.length; i++) {
      const random = Math.floor(Math.random() * emptyDraws[i]);

      computerIndex = emptyDraws[random];
    }

    // ========== Splice number after mark ========== \\
    setEmptyDraws(emptyDraws.filter((x: number) => x !== computerIndex));

    handleClick(computerIndex);
  });

  // ========== Check Winner ========== \\
  useEffect(() => {
    if (checkWin()) {
      const winner = checkWin()?.wonPlayer;

      winner === "x" ? setXCore(xCore + 1) : setOCore(oCore + 1);

      setWinnerModal(!winnerModal);
    } else if (drawers.every((x: any) => x.length > 0) && checkWin() === null) {
      setTieCore(tieCore + 1);
      setTiedModal(!tiedModal);
    }
  }, [checkWin()?.wonPlayer, drawers]);

  // ========== Next Round ========== \\
  const nextRound = () => {
    setDrawers(Array(9).fill(""));
    setWinnerModal(false);
    setTiedModal(false);
    setPlayer("x");
    setEmptyDraws([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    if (cpu) {
      setComputerMove(false);
    }
  };

  // ========== Game Restarter ========== \\
  const restartGame = () => {
    setRestartModal(true);
  };

  // ========== Modals Closer ========== \\
  const modalCloser = () => {
    setRestartModal(false);
    setWinnerModal(false);
    setTiedModal(false);
  };

  // ========== Quit Game ========== \\
  const quitGame = () => {
    localStorage.removeItem("p1");
    localStorage.removeItem("p2");
    localStorage.removeItem("withCPU");
  };

  // ========== Finally ========== \\
  const store = {
    drawers: drawers,
    p1: p1,
    p2: p2,
    xCore: xCore,
    oCore: oCore,
    tieCore: tieCore,
    checkWin: checkWin()?.wonPlayer,
    wonCombo: checkWin()?.wonCombo,
    player: player,
    handleClick: handleClick,
    winnerModal: winnerModal,
    restartModal: restartModal,
    tiedModal: tiedModal,
    nextRound: nextRound,
    modalCloser: modalCloser,
    restartGame: restartGame,
    withCPU: cpu,
    quitGame: quitGame,
  };

  return <GameContext.Provider value={store}>{children}</GameContext.Provider>;
};

export default GameContextWrapper;
