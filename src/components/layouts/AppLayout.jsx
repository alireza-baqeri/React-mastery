import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white ">
      <Header />
      <main className="flex-1 max-w-6xl mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
