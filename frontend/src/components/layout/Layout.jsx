/* eslint-disable react/prop-types */
const Layout = ({ children }) => {
  return (
    <div
      className="flex min-h-screen flex-col bg-primary-700 font-nunito text-xl
    font-medium text-primary-400 "
    >
      {children}
    </div>
  );
};

export default Layout;
