/* eslint-disable react/prop-types */
const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col font-nunito text-xl font-medium text-zinc-400">
      {children}
    </div>
  );
};

export default Layout;
