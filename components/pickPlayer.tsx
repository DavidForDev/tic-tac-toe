import React, { useEffect, useState } from "react";

// =========== Icons =========== \\
import XSvg from "../public/icons/x.js";
import OvalSvg from "../public/icons/oval.js";

interface Props {
  setPlayer?: any;
}

const PickPlayer = (props: Props) => {
  const { setPlayer } = props;

  const [pickPlayer, setPickPlayer] = useState({
    x: false,
    o: true,
  });

  useEffect(() => {
    setPlayer(pickPlayer.x === true ? "x" : "o");
  });

  const activeX = pickPlayer.x && "bg-[#A8BFC9]";
  const activeSvgX = pickPlayer.x ? "fill-[#1F3641]" : "fill-[#A8A8A8]";
  const activeO = pickPlayer.o && "bg-[#A8BFC9]";
  const activeSvgO = pickPlayer.o ? "fill-[#1F3641]" : "fill-[#A8A8A8]";

  return (
    <div className="bg-[#1F3641] p-5 shadow-[insert_0_-8px_0px_-8px_#10212A] w-full rounded-xl flex flex-col gap-6 items-center">
      <h3 className="text-[#A8BFC9] font-semibold">PICK PLAYER 1S MARK</h3>
      <div className="bg-[#1A2A33] w-full p-2 rounded-lg flex justify-between gap-2">
        <div
          className={`group hover:bg-[#a8bfc973] ${activeX} cursor-pointer flex justify-center items-center w-full rounded-xl p-3`}
          onClick={() => setPickPlayer({ x: true, o: false })}
        >
          <XSvg className={`group-hover:fill-[#1F3641] ${activeSvgX}`} />
        </div>
        <div
          className={`group hover:bg-[#a8bfc973] ${activeO} cursor-pointer flex justify-center items-center w-full rounded-xl p-3`}
          onClick={() => setPickPlayer({ x: false, o: true })}
        >
          <OvalSvg className={`group-hover:fill-[#1F3641] ${activeSvgO}`} />
        </div>
      </div>
      <p className="text-sm text-[#A8BFC9] opacity-50">
        REMEMBER : X GOES FIRST
      </p>
    </div>
  );
};

export default PickPlayer;
