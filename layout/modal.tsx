interface Props {
  children?: any;
}

const Modal = (props: Props) => {
  const { children } = props;

  return (
    <div className="absolute w-full h-full bg-[#00000071] flex items-center">
      <div className="w-full p-10 flex items-center justify-center bg-[#1F3641] max-h-64 h-full">
        {children}
      </div>
    </div>
  );
};

export default Modal;
