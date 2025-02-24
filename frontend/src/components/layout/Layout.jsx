const Layout = ({ children }) => {
  return (
    <div className="font-nunito flex min-h-screen flex-col text-xl font-medium text-zinc-400">
      {children}
    </div>
  );
};

export default Layout;
