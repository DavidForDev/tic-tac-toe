import "../styles/globals.css";
import type { AppProps } from "next/app";

// ======= Contexts ========= \\
import GameContextWrapper from "../contexts/game.context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GameContextWrapper>
      <Component {...pageProps} />
    </GameContextWrapper>
  );
}
