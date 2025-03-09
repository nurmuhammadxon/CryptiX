import { Outlet } from "react-router-dom";

// components
import Navbar from "../components/Navbar";

function MainLayouts() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayouts;
