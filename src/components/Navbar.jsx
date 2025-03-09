import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        background:
          " linear-gradient(90deg, rgba(15,15,139,1) 0%, rgba(14,158,188,1) 100%)",
      }}
      className="w-full h-[80px] font-audiowide shadow-md"
    >
      <div className="flex items-center justify-between w-full h-full px-8">
        {/* Logo */}
        <div className="flex text-3xl sm:text-4xl lg:text-5xl leading-12">
          <p className="text-[#00EEFF]">Crypto</p>
          <span className="text-[#FF0004]">X</span>
        </div>

        {/* Hamburger menu (mobil versiya) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(true)} className="w-10 h-10">
            <i className="bx bx-menu-alt-right text-white text-5xl"></i>
          </button>
        </div>

        {/* Mobil menyu */}
        <div
          className={`fixed top-0 right-0 w-[250px] h-screen bg-gradient-to-b z-40 from-[#1E293B] to-[#334155] text-white shadow-lg transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 text-white text-3xl"
          >
            <i className="bx bx-x"></i>
          </button>
          <ul className="flex flex-col mt-16 space-y-6 text-lg px-6">
            <li>
              <Link
                to="/"
                className="text-white text-xl lg:text-2xl hover:text-gray-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/masalalar"
                className="text-white text-xl lg:text-2xl hover:text-gray-300"
              >
                Masalalar
              </Link>
            </li>
            <li>
              <Link
                to="/natijalar"
                className="text-white text-xl lg:text-2xl hover:text-gray-300"
              >
                Natijalar
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-400">
                Kirish
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop menyu */}
        <div className="hidden md:flex items-center h-full gap-7">
          <ul className="flex items-center gap-8">
            <li>
              <Link
                to="/"
                className="text-white text-xl lg:text-2xl hover:text-gray-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/masalalar"
                className="text-white text-xl lg:text-2xl hover:text-gray-300"
              >
                Masalalar
              </Link>
            </li>
            <li>
              <Link
                to="/natijalar"
                className="text-white text-xl lg:text-2xl hover:text-gray-300"
              >
                Natijalar
              </Link>
            </li>
          </ul>
          <div>
            <Link
              to="/login"
              className="lg:text-2xl text-white hover:text-gray-300"
            >
              Kirish
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
