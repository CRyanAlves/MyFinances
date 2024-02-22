import Header from "./components/layout/Header";
import SideBar from "./components/layout/SideBar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen flex bg-bg dark:bg-darkbg">
      <SideBar />
      <main className="w-full text-3xl flex flex-col p-[10px] text-primary dark:text-white font-semibold">
        <Header />
        {children}
      </main>
    </div>
  );
}

export default Layout;
