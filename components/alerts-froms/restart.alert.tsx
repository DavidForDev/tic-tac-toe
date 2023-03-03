import Link from "next/link";

// ========== UIEelement ========== \\
import { PrimaryButton } from "../../UIElements/element";

interface Props {
  message?: String;
  closer?: any;
}

const RestartAlert = (props: Props) => {
  const { message, closer } = props;

  return (
    <div className="flex flex-col justify-center items-center gap-12">
      <h3 className="text-[#A8BFC9] uppercase text-4xl font-semibold">
        {message}
      </h3>
      <div className="flex items-center gap-4">
        <PrimaryButton color="#A8BFC9" onClick={closer} type="button">
          no, cancel
        </PrimaryButton>
        <PrimaryButton type="button" onClick={() => location.reload()}>
          yes, restart
        </PrimaryButton>
      </div>
    </div>
  );
};

export default RestartAlert;
