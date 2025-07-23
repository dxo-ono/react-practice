// Layout.tsx
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopButton from "../components/TopButton";


function Layout() {
  return (
    <>
      <Header />
      <main className="min-w-[390px] md:mx-auto w-full">
        <TopButton />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
