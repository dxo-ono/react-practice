// Layout.tsx
import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";

function Layout() {
  return (
    <>

    <Header />
      <main className="text-black-800 mx-auto w-full">
        <Outlet />
      </main>
    <Footer />
    </>
  );
}

export default Layout;
