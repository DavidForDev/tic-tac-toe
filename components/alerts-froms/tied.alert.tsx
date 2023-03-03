// ========== UIEelement ========== \\
import { PrimaryButton } from "../../UIElements/element";

interface Props {
  message?: String;
  nextRound?: any;
  quitGame: any;
}

const TiedAlert = (props: Props) => {
  const { message, nextRound, quitGame } = props;

  return (
    <div className="flex flex-col justify-center items-center gap-12">
      <h3 className="text-[#A8BFC9] uppercase text-4xl font-semibold">
        {message}
      </h3>
      <div className="flex items-center gap-4">
        <a href="/" onClick={quitGame}>
          <PrimaryButton
            color="#A8BFC9"
            onClick={() => window.location}
            type="button"
          >
            quit
          </PrimaryButton>
        </a>
        <PrimaryButton type="button" onClick={nextRound}>
          Next round
        </PrimaryButton>
      </div>
    </div>
  );
};

export default TiedAlert;
