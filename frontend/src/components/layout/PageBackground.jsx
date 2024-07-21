const PageBackground = () => {
  return (
    <>
      <div className="absolute z-0 h-full w-full bg-[radial-gradient(ellipse,_rgba(40,40,47,1)_30%,_rgba(32,32,36,1)_95%)]" />
      <div className="absolute z-0 h-full w-full animate-bg-pan bg-card-pattern bg-[length:50%] md:bg-[length:25%]" />
      <div className="absolute z-10 h-full w-full bg-[radial-gradient(ellipse,_rgba(255,255,255,0)_30%,_rgba(32,32,36,1)_95%)]" />
    </>
  );
};

export default PageBackground;
