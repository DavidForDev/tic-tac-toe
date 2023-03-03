interface Props {
  children: any;
}

const Section = (props: Props) => {
  const { children } = props;
  return (
    <div className="h-full flex gap-10 justify-center items-center container max-w-md m-auto p-3">
      {children}
    </div>
  );
};

export default Section;
