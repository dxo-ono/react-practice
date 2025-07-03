// Layout.tsx
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <main className="text-black-800 mx-auto w-full">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
