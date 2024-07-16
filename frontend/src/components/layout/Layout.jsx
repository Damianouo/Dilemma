/* eslint-disable react/prop-types */
const Layout = ({ children }) => {
  return (
    <div
      className="flex min-h-screen flex-col bg-gradient-to-b from-primary-900 to-zinc-900 font-nunito text-xl
    font-medium text-zinc-400 "
    >
      {children}
    </div>
  );
};

export default Layout;
