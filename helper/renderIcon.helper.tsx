// ========== Icons ========== \\
import XSvg from "../public/icons/x";
import OvalSvg from "../public/icons/oval";

interface Props {
  arg?: String;
  colorX?: String;
  colorO?: String;
  strokeX?: String;
  strokeO?: String;
  size?: String;
}

const RenderIcon = (props: Props) => {
  const { arg, colorX, colorO, size, strokeX, strokeO } = props;

  if (arg?.includes("x")) {
    return (
      <XSvg
        fill={colorX ? colorX : "none"}
        stroke={strokeX ? strokeX : "none"}
        width={size ? size : "20px"}
        height={size ? size : "20px"}
      />
    );
  } else if (arg?.includes("o")) {
    return (
      <OvalSvg
        fill={colorO ? colorO : "none"}
        stroke={strokeO ? strokeO : "none"}
        width={size ? size : "20px"}
        height={size ? size : "20px"}
      />
    );
  }

  return null;
};

export default RenderIcon;
