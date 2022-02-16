import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-white flex">
      <Header />
      <main className="pt-[72px] flex grow justify-center flex-col">
        {children}
      </main>
    </div>
  );
};

export default Layout;
