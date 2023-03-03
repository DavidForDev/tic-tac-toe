import { useState } from "react";
import Link from "next/link";

// =========== Layouts =========== \\
import PageHeader from "../layout/head.layout";
import Section from "../layout/section.layout";

// =========== Components =========== \\
import PickPlayer from "../components/pickPlayer";

// =========== Icons =========== \\
import OvalSvg from "../public/icons/oval";
import XSvg from "../public/icons/x";

// =========== UIElement =========== \\
import { PrimaryButton } from "../UIElements/element";

export default function Home() {
  const [p1, setP1] = useState<string | undefined>();

  const withPlayer = () => {
    const withCPU = localStorage.getItem("withCPU");

    if (withCPU) {
      localStorage.removeItem("withCPU");
    }

    if (!p1) return;

    localStorage.setItem("p1", p1);
    localStorage.setItem("p2", p1 === "x" ? "o" : "x");
  };

  const withCPU = () => {
    if (p1) {
      localStorage.removeItem("p1");
      localStorage.removeItem("p2");
    }

    localStorage.setItem("withCPU", "true");
  };

  return (
    <>
      <PageHeader
        title="Game"
        description="this our change"
        icon="/favicon.ico"
      />
      <Section>
        <div className="w-full m-auto h-full flex flex-col gap-10 justify-center items-center">
          <div className="flex gap-2">
            <XSvg fill="#31C3BD" width="25px" height="25px" />
            <OvalSvg fill="#F2B137" width="25px" height="25px" />
          </div>
          <PickPlayer setPlayer={setP1} />
          <div className="w-full flex flex-col gap-5">
            <a href="/dashboard">
              <PrimaryButton color="#F2B137" onClick={withCPU}>
                NEW GAME (VS CPU)
              </PrimaryButton>
            </a>
            <a href="/dashboard">
              <PrimaryButton color="#31C3BD" onClick={withPlayer}>
                NEW GAME (VS PLAYER)
              </PrimaryButton>
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
