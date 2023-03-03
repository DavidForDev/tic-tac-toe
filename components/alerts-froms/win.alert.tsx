// ========== UIEelement ========== \\
import { PrimaryButton } from "../../UIElements/element";

// ========== Helper ========== \\
import RenderIcon from "../../helper/renderIcon.helper";

interface Props {
  winnerIcon?: String;
  message?: String;
  nextRound?: any;
  quitGame?: any;
}

const WinAlert = (props: Props) => {
  const { winnerIcon, message, nextRound, quitGame } = props;

  const textColor = winnerIcon === "o" ? "text-[#F2B137]" : "text-[#31C3BD]";

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <p className="text-[#A8BFC9] uppercase">{message}</p>
      <div className="flex justify-center items-center gap-6">
        <RenderIcon
          arg={winnerIcon}
          colorO="#F2B137"
          colorX="#31C3BD"
          size="64px"
        />
        <h2 className={`text-4xl ${textColor} font-semibold uppercase`}>
          TAKES THE ROUND
        </h2>
      </div>
      <div className="flex items-center gap-4">
        <a href="/" onClick={quitGame}>
          <PrimaryButton color="#A8BFC9">quit</PrimaryButton>
        </a>
        <PrimaryButton onClick={nextRound}>next round</PrimaryButton>
      </div>
    </div>
  );
};

export default WinAlert;
