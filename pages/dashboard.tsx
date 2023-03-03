import { useEffect, useRef, useState, useContext } from "react";

// ============ Layout =========== \\
import PageHeader from "../layout/head.layout";
import Section from "../layout/section.layout";
import Modal from "../layout/modal";

// =========== Icons =========== \\
import OvalSvg from "../public/icons/oval";
import XSvg from "../public/icons/x";
import RoundedSvg from "../public/icons/rounded";

// =========== UIElement =========== \\
import { PrimaryButton, SecondaryButton } from "../UIElements/element";

// ============ Components =========== \\
import WinAlert from "../components/alerts-froms/win.alert";
import RestartAlert from "../components/alerts-froms/restart.alert";
import TiedAlert from "../components/alerts-froms/tied.alert";

// ============ Helper =========== \\
import RenderIcon from "../helper/renderIcon.helper";

// ============ Contexts =========== \\
import { GameContext } from "../contexts/game.context";

const Dashboard = () => {
  const {
    drawers,
    p1,
    p2,
    xCore,
    oCore,
    tieCore,
    checkWin,
    wonCombo,
    player,
    handleClick,
    winnerModal,
    restartModal,
    tiedModal,
    nextRound,
    modalCloser,
    restartGame,
    withCPU,
    quitGame,
  } = useContext(GameContext);

  const checkWonCombo = (index: number) => {
    const isTrue = wonCombo?.some((x: number) => x === index);

    return isTrue === true
      ? checkWin === "x"
        ? "bg-[#31C3BD]"
        : "bg-[#F2B137]"
      : "";
  };

  return (
    <>
      <PageHeader title="dashboard" icon="/favicon.ico" />
      {winnerModal && (
        <Modal>
          <WinAlert
            winnerIcon={checkWin}
            nextRound={nextRound}
            quitGame={quitGame}
            message="oh, You lost..."
          />
        </Modal>
      )}
      {restartModal && (
        <Modal>
          <RestartAlert message="RESTART GAME?" closer={modalCloser} />
        </Modal>
      )}
      {tiedModal && (
        <Modal>
          <TiedAlert
            message="ROUND TIED"
            nextRound={nextRound}
            quitGame={quitGame}
          />
        </Modal>
      )}
      <Section>
        <div className="w-full flex flex-col gap-5">
          <div className="grid grid-cols-3 items-center gap-4">
            <div className="flex gap-2">
              <XSvg fill="#31C3BD" width="25px" height="25px" />
              <OvalSvg fill="#F2B137" width="25px" height="25px" />
            </div>
            <SecondaryButton
              color="#1F3641"
              className="flex items-center justify-center gap-2 p-0"
            >
              <RenderIcon arg={player} colorO="#A8A8A8" colorX="#A8A8A8" />
              <p className="text-[#A8A8A8]">Turn</p>
            </SecondaryButton>
            <SecondaryButton
              color="#A8BFC9"
              className="w-fit flex place-self-end"
              onClick={restartGame}
            >
              <RoundedSvg />
            </SecondaryButton>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {drawers.map((el: String, index: number) => {
              console.log(checkWonCombo(index));
              return (
                <div
                  key={index}
                  onClick={() => handleClick(index)}
                  data-value={player === "o" ? "o" : "x"}
                  className={`${
                    checkWonCombo(index) ? checkWonCombo(index) : "bg-[#1F3641]"
                  }  group rounded-xl cursor-pointer h-32 shadow-[inset_0px_-8px_0px_#10212A] flex items-center justify-center`}
                >
                  <RenderIcon
                    arg={el}
                    colorO={
                      checkWonCombo(index) ? checkWonCombo(index) : "#F2B137"
                    }
                    colorX={
                      checkWonCombo(index) ? checkWonCombo(index) : "#31C3BD"
                    }
                    size="50px"
                  />
                  {drawers[index].length === 0 && (
                    <div className="hidden group-hover:flex">
                      <RenderIcon
                        arg={player}
                        strokeO="#F2B137"
                        strokeX="#31C3BD"
                        size="50px"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <div className="rounded-xl w-full bg-[#31C3BD] p-3 py-2 flex flex-col items-center justify-center">
              <p className="text-[#1A2A33] font-bold text-sm uppercase">
                x ({p1 === "x" ? "p1" : withCPU ? "you" : "p2"})
              </p>
              <span className="font-semibold text-2xl text-[#1A2A33]">
                {xCore}
              </span>
            </div>
            <div className="rounded-xl w-full bg-[#A8BFC9] p-3 py-2 flex flex-col items-center justify-center">
              <p className="text-[#1A2A33] font-bold text-sm">Ties</p>
              <span className="font-semibold text-2xl text-[#1A2A33]">
                {tieCore}
              </span>
            </div>
            <div className="rounded-xl w-full bg-[#F2B137] p-3 py-2 flex flex-col items-center justify-center">
              <p className="text-[#1A2A33] font-bold text-sm uppercase">
                o ({p2 === "o" ? "p2" : withCPU ? "cpu" : "p1"})
              </p>
              <span className="font-semibold text-2xl text-[#1A2A33]">
                {oCore}
              </span>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Dashboard;
