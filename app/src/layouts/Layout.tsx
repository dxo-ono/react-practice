// Layout.tsx
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopLink from "../components/TopLink";

function Layout() {
  return (
    <>

    <Header />
    <TopLink />
      <main className="text-black-800 mx-auto w-full">
        <Outlet />
      </main>
    <Footer />
    </>
  );
}

export default Layout;
